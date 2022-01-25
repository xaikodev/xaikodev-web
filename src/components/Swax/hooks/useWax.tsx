import { createContext, useContext, useEffect, useMemo, useState } from "react";
import * as waxjs from "@waxio/waxjs/dist";
import { ProvideWallet } from "./useWallet";
import { ProvideTokens, Token, useTokens } from "./useTokens";

type AlcorLP = {
  id: string;
  contract: string;
  symbol: string;
  supply: number;
  fee: number;
  fee_contract: string;
  pair: { quantity: number; contract: string; name: string }[];
};

export interface WaxAccount {
  name: string;
  pubKeys: string[];
}

interface UseWax {
  wax: waxjs.WaxJS;
  account: WaxAccount;
  tokens: Token[];
  getTokenLogo: (
    account: string,
    name: string
  ) => { logo: string; logo_lg: string };
  isConnected: boolean;
  login: () => Promise<void>;
}

const WaxContext = createContext<UseWax>({} as UseWax);

export const useWax = () => useContext(WaxContext);

export const WaxProvider: React.FC = ({ children }) => {
  const wax = useMemo(
    () => new waxjs.WaxJS({ rpcEndpoint: "https://wax.greymass.com" }),
    []
  );
  const { tokens, getTokenLogo } = useTokens();
  const [account, setAccount] = useState<WaxAccount>({
    name: wax.userAccount,
    pubKeys: wax.pubKeys
  });

  const login = async () => {
    const accountName = await wax.login();

    setAccount({ ...account, name: accountName });
    await getAlcorSwapTokens();
  };

  const getAlcorSwapTokens = async () => {
    try {
      const AlcorTable = await wax.api.rpc.get_table_rows({
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
      const pools: AlcorLP[] = AlcorTable.rows.map((row) => {
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
      const tokens0 = pools.map((pool) => {
        return {
          symbol: pool.pair[0].name,
          contract: pool.pair[0].contract
        };
      });
      const tokens1 = pools.map((pool) => {
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
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    wax.isAutoLoginAvailable().then((isAutoLoginAvailable) => {
      if (isAutoLoginAvailable) {
        setAccount((prevAcc) => {
          return { ...prevAcc, name: wax.userAccount, pubKeys: wax.pubKeys };
        });
      }
    });
  }, [wax]);

  return (
    <ProvideTokens>
      <WaxContext.Provider
        value={{
          account,
          login,
          isConnected: Boolean(account.name),
          tokens,
          getTokenLogo,
          wax
        }}
      >
        <ProvideWallet>{children}</ProvideWallet>
      </WaxContext.Provider>
    </ProvideTokens>
  );
};
