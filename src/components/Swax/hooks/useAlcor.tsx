import React, { createContext, FC, useCallback, useContext, useEffect, useState } from "react";
import { useWax, WAXToken } from "./useWax";

type AlcorPair = {
  id: string;
  contract: string;
  symbol: string;
  supply: number;
  fee: number;
  fee_contract: string;
  pair: { quantity: number; contract: string; name: string }[];
};

export interface AlcorContextType {
  pairs: AlcorPair[];
  swap: (tokenFrom: WAXToken, tokenTo: WAXToken, quantity: number, minReceived: number) => Promise<void>;
}

const AlcorContext = createContext({} as AlcorContextType);

const useAlcorHook: () => AlcorContextType = () => {
  const { wax, transact, get, account } = useWax();
  const [pairs, setPairs] = useState<AlcorPair[]>([]);

  const getPairs = useCallback(async () => {
    try {
      const tablePairs = await get({
        code: "alcorammswap",
        scope: "alcorammswap",
        table: "pairs",
        lower_bound: null,
        upper_bound: null,
        index: 1,
        key_type: "",
        limit: "100000",
        reverse: false,
        show_payer: false,
      });
      const pairs: AlcorPair[] = tablePairs.rows.map((row: any) => {
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
              name: row.pool1.quantity.split(" ")[1],
            },
            {
              quantity: Number(row.pool2.quantity.split(" ")[0]),
              contract: row.pool2.contract,
              name: row.pool2.quantity.split(" ")[1],
            },
          ],
        };
      });
      setPairs(pairs);
    } catch (e) {
      throw e;
    }
  }, [wax, setPairs]);

  const swap = useCallback(
    async (tokenFrom: WAXToken, tokenTo: WAXToken, quantity: number, minReceived: number) => {
      transact([
        {
          account: tokenFrom.contract,
          name: "transfer",
          authorization: [
            {
              actor: account.name,
              permission: "active",
            },
          ],
          data: {
            from: account.name,
            to: "alcorammswap",
            quantity: `${quantity} ${tokenFrom.symbol}`,
            memo: `${minReceived} ${tokenTo.symbol}@${tokenTo.contract}`,
          },
        },
      ]);
    },
    [transact]
  );

  useEffect(() => {
    const pairTimeout = setInterval(() => getPairs(), 10000);
    return () => {
      clearInterval(pairTimeout);
    };
  }, [wax]);
  ``;
  return { pairs, swap };
};

export const ProvideTokens: FC = ({ children }) => {
  const AlcorHook = useAlcorHook();
  return <AlcorContext.Provider value={AlcorHook}>{children}</AlcorContext.Provider>;
};

export const useAlcor = () => useContext(AlcorContext);
