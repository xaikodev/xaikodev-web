import { createContext, useContext, useEffect, useState } from "react";
import * as waxjs from "@waxio/waxjs/dist";
const wax = new waxjs.WaxJS({ rpcEndpoint: "https://wax.greymass.com" });

type EOSToken = {
  icon?: string;
  symbol: string;
  contract: string;
  balance?: number;
  decimals?: number;
};

type AlcorLP = {
  id: string;
  contract: string;
  symbol: string;
  supply: number;
  fee: number;
  fee_contract: string;
  pair: { quantity: number; contract: string; name: string }[];
};

type WaxAccount = {
  name: string;
  pubKeys: string[];
  tokens: EOSToken[];
};

interface WaxContextProps {
  account: WaxAccount;
  isConnected: boolean;
  login: () => Promise<void>;
}
const WaxContext = createContext<WaxContextProps>({} as WaxContextProps);

export const useWax = () => useContext(WaxContext);

export const WaxProvider: React.FC = ({ children }) => {
  const [account, setAccount] = useState<WaxAccount>({
    name: wax.userAccount,
    pubKeys: wax.pubKeys,
    tokens: []
  });
  const [tokens, setTokens] = useState<EOSToken[]>([]);

  const login = async () => {
    const accountName = await wax.login();
    setAccount({ ...account, name: accountName });
    await getAlcorSwapTokens();
    await fetchAccountBalances();
  };

  const getAlcorSwapTokens = async () => {
    try {
      const value = await wax.api.rpc.get_table_rows({
        json: true,
        code: "alcorammswap",
        scope: "alcorammswap",
        table: "pairs",
        lower_bound: null,
        upper_bound: null,
        index_position: 1,
        key_type: "",
        limit: "100000",
        reverse: false,
        show_payer: false
      });
      const pools: AlcorLP[] = value.rows.map((row) => {
        return {
          id: row.id,
          contract: "alcorammswap",
          symbol: row.supply.split(" ")[1],
          supply: Number(row.supply.split(" ")[0]),
          fee: row.fee,
          fee_contract: row.fee_contract,
          pair: [
            {
              quantity: Number(row.pool1.quantity.split(" ")[0]),
              contract: row.pool1.contract,
              name: row.pool1.quantity.split(" ")[1]
            },
            {
              quantity: Number(row.pool2.quantity.split(" ")[0]),
              contract: row.pool2.contract,
              name: row.pool2.quantity.split(" ")[1]
            }
          ]
        };
      });
      const tokens0: EOSToken[] = pools.map((pool) => {
        return {
          symbol: pool.pair[0].name,
          contract: pool.pair[0].contract
        };
      });
      const tokens1: EOSToken[] = pools.map((pool) => {
        return {
          symbol: pool.pair[1].name,
          contract: pool.pair[1].contract
        };
      });
      const newTokens = tokens0.concat(tokens1);
      console.log(
        newTokens
          .map(function (o) {
            return o.symbol;
          })
          .filter(function (v, i, a) {
            return a.indexOf(v) === i;
          })
          .map((tokenNames) => {
            return {
              symbol: tokenNames,
              contract: newTokens.find((token) => token.symbol === tokenNames)
                ?.contract
            };
          })
      );
      setTokens(newTokens);
    } catch (e) {
      throw e;
    }
  };

  const fetchAccountBalances = async (): Promise<void> => {
    const tokenIconts = await fetch(
      "https://raw.githubusercontent.com/eoscafe/eos-airdrops/master/tokens.json",
      {
        method: "GET"
      }
    );
    const tokensIco = await tokenIconts.json();
    console.log(tokensIco);
    const tokens = fetch(
      "https://lightapi.eosamsterdam.net/api/balances/wax/pk4be.wam"
    );
    const response = await (await tokens).json();
    setAccount((acc) => ({
      ...acc,
      tokens: response.balances.map((bal: any) => {
        return {
          balance: Number(bal.amount),
          symbol: bal.currency,
          contract: bal.contract,
          decimals: bal.decimals
        };
      })
    }));
  };

  useEffect(() => {
    wax.isAutoLoginAvailable().then((isAutoLoginAvailable) => {
      if (isAutoLoginAvailable) {
        setAccount((prevAcc) => {
          return { ...prevAcc, name: wax.userAccount, pubKeys: wax.pubKeys };
        });
      }
    });
  }, []);

  useEffect(() => {
    console.log(account.tokens);
  }, [account]);

  return (
    <WaxContext.Provider
      value={{
        account,
        login,
        isConnected: Boolean(account.name)
      }}
    >
      {children}
    </WaxContext.Provider>
  );
};
