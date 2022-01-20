import { createContext, useContext, useEffect, useState } from "react";
import * as waxjs from "@waxio/waxjs/dist";
const wax = new waxjs.WaxJS({ rpcEndpoint: "https://wax.greymass.com" });

interface TradeContextProps {
  accountName: string;
  pubKeys: string[];
  login: () => Promise<string>;
  isConnected: boolean;
  fetchBalance: (tokenSymbol: string, tokenContract: string) => Promise<number>;
}
const TradeContext = createContext<TradeContextProps>({} as TradeContextProps);

export const useTrade = () => useContext(TradeContext);

export const TradeProvider: React.FC = ({ children }) => {
  const [accountName, setAccountName] = useState(wax.userAccount);
  const [pubKeys, setPubkeys] = useState(wax.pubKeys);

  const login = async () => {
    console.log("login");
    const accountName = await wax.login();
    setAccountName(accountName);
    console.log(accountName, pubKeys);
    await getAlcorSwapTokens();
    return accountName;
  };

  const fetchBalance = async (
    tokenSymbol: string,
    tokenContract: string
  ): Promise<number> => {
    const value = await wax.api.rpc.get_currency_balance(
      tokenContract,
      accountName,
      tokenSymbol
    );
    let waxValue = 0;

    if (value[0]) {
      waxValue = Number(value[0].split(" ")[0]);
    }

    return waxValue;
  };

  const getAlcorSwapTokens = async () => {
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

    console.log(value);
  };

  useEffect(() => {
    wax.isAutoLoginAvailable().then((isAutoLoginAvailable) => {
      if (isAutoLoginAvailable) {
        setAccountName(wax.userAccount);
        setPubkeys(wax.pubKeys);
      }
    });
  }, []);
  return (
    <TradeContext.Provider
      value={{
        accountName,
        pubKeys,
        login,
        isConnected: Boolean(accountName),
        fetchBalance
      }}
    >
      {children}
    </TradeContext.Provider>
  );
};
