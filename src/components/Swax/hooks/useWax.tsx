import { createContext, useCallback, useContext, useEffect, useState } from "react";
import * as waxjs from "@waxio/waxjs/dist";
import { GetTableRowsResult } from "eosjs/dist/eosjs-rpc-interfaces";
import { Action } from "eosjs/dist/eosjs-serialize";
import { TransactConfig } from "eosjs/dist/eosjs-api-interfaces";
import { Account, GetProps, Token } from "../models/wax.models";
import { GetTokens } from "../utils/tokens";

interface UseWax {
  wax: waxjs.WaxJS;
  account: Account;
  tokens: Token[];
  isConnected: boolean;
  login: () => Promise<void>;
  logout: () => void;
  transact: (actions: Action[], options?: TransactConfig) => Promise<void>;
  get: (props: GetProps) => Promise<GetTableRowsResult>;
}

const WaxContext = createContext<UseWax>({} as UseWax);
export const useWax = () => useContext(WaxContext);

const wax = new waxjs.WaxJS({ rpcEndpoint: "https://wax.greymass.com" });

export const WaxProvider: React.FC = ({ children }) => {
  const [account, setAccount] = useState<Account>({
    name: wax.userAccount,
    pubKeys: wax.pubKeys,
  } as Account);
  const [tokens, setTokens] = useState<Token[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  const getWallet = async (account: string) => {
    const newTokens = await GetTokens(account);
    setTokens(newTokens);
    return newTokens.filter((t) => t.balance > 0);
  };

  const getDetails = async (account: string) => {
    try {
      return await wax.rpc.get_account(account);
    } catch (e) {
      throw e;
    }
  };

  const login = useCallback(async () => {
    const accountName = await wax.login();
    const details = await getDetails(accountName);
    const wallet = await getWallet(accountName);
    setAccount({ pubKeys: wax.pubKeys, name: accountName, details, wallet });
    setIsConnected(true);
  }, [getDetails, getWallet]);

  const logout = () => {
    setIsConnected(false);
  };

  const transact = useCallback(
    async (actions: Action[], options?: TransactConfig) => {
      try {
        const result = await wax.api.transact(
          { actions },
          options || {
            blocksBehind: 3,
            expireSeconds: 30,
          }
        );
        console.dir(result);
      } catch (e) {
        throw e;
      }
    },
    [wax]
  );

  const get = async (props: GetProps) => {
    const tableRows = await wax.api.rpc.get_table_rows({
      json: true,
      lower_bound: null,
      upper_bound: null,
      reverse: false,
      show_payer: false,
      ...props,
    });
    return tableRows;
  };

  useEffect(() => {
    wax.isAutoLoginAvailable().then((isAutoLoginAvailable) => {
      if (isAutoLoginAvailable) {
        setAccount((prevAcc) => {
          return { ...prevAcc, name: wax.userAccount, pubKeys: wax.pubKeys };
        });
      }
    });
  }, [wax.isAutoLoginAvailable]);

  return (
    <WaxContext.Provider
      value={{
        account,
        tokens,
        login,
        logout,
        isConnected,
        wax,
        transact,
        get,
      }}
    >
      {children}
    </WaxContext.Provider>
  );
};
