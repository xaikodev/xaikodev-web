import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import * as waxjs from "@waxio/waxjs/dist";
import { GetAccountResult, GetTableRowsResult } from "eosjs/dist/eosjs-rpc-interfaces";
import { Action } from "eosjs/dist/eosjs-serialize";
import { TransactConfig } from "eosjs/dist/eosjs-api-interfaces";

export interface WAXToken {
  amount: number;
  contract: string;
  precision: number;
  symbol: string;
}
export interface WaxAccount {
  name: string;
  pubKeys: string[];
  wallet: WAXToken[];
  details: GetAccountResult;
}

export interface GetProps {
  code: string;
  scope: string;
  table: string;
  lower_bound?: string | null;
  upper_bound?: string | null;
  index: number;
  key_type: string;
  limit: string;
  reverse?: boolean;
  show_payer?: boolean;
}

interface UseWax {
  wax: waxjs.WaxJS;
  account: WaxAccount;
  isConnected: boolean;
  login: () => Promise<void>;
  transact: (actions: Action[], options?: TransactConfig) => Promise<void>;
  get: (props: GetProps) => Promise<GetTableRowsResult>;
}

const WaxContext = createContext<UseWax>({} as UseWax);

export const useWax = () => useContext(WaxContext);

export const WaxProvider: React.FC = ({ children }) => {
  const wax = useMemo(() => new waxjs.WaxJS({ rpcEndpoint: "https://wax.greymass.com" }), []);
  const [account, setAccount] = useState<WaxAccount>({ name: wax.userAccount, pubKeys: wax.pubKeys } as WaxAccount);

  const login = useCallback(async () => {
    const accountName = await wax.login();
    const details = await getDetails();
    const wallet = await getWallet();
    setAccount({ pubKeys: wax.pubKeys, name: accountName, details, wallet });
  }, [wax, setAccount]);

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

  const get = useCallback(
    async (props: GetProps) => {
      const tableRows = await wax.api.rpc.get_table_rows({
        json: true,
        lower_bound: null,
        upper_bound: null,
        reverse: false,
        show_payer: false,
        ...props,
      });
      return tableRows;
    },
    [wax]
  );

  const getWallet = useCallback(async () => {
    try {
      const response = await fetch(`https://wax.eosrio.io/v2/state/get_tokens?account=${account.name}`);
      const result = await response.json();
      return await result.tokens;
    } catch (e) {
      throw e;
    }
  }, [account]);

  const getDetails = useCallback(async () => {
    try {
      return await wax.rpc.get_account(account.name);
    } catch (e) {
      throw e;
    }
  }, [wax, account]);

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
    <WaxContext.Provider
      value={{
        account,
        login,
        isConnected: Boolean(account.name),
        wax,
        transact,
        get,
      }}
    >
      {children}
    </WaxContext.Provider>
  );
};
