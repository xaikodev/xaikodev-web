import React, { createContext, FC, useCallback, useContext, useEffect, useState } from "react";
import { AlcorPool } from "../models/alcor.models";
import { Token } from "../models/wax.models";
import { useWax } from "./useWax";

export interface AlcorContextType {
  pools: AlcorPool[];
  swap: (tokenFrom: Token, tokenTo: Token, quantity: number, minReceived: number) => Promise<void>;
}

const AlcorContext = createContext({} as AlcorContextType);

const useAlcorHook: () => AlcorContextType = () => {
  const { transact, get, account } = useWax();
  const [pools, setPools] = useState<AlcorPool[]>([]);

  const getPools = async () => {
    try {
      const tablePools = await get({
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
      const pools: AlcorPool[] = tablePools.rows.map((row: any) => {
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
      setPools(pools);
    } catch (e) {
      throw e;
    }
  };

  const swap = async (tokenFrom: Token, tokenTo: Token, quantity: number, minReceived: number) => {
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
  };

  useEffect(() => {
    const pairTimeout = setInterval(() => getPools(), 2000);
    return () => {
      clearInterval(pairTimeout);
    };
  }, []);
  return { pools, swap };
};

export const ProvideAlcor: FC = ({ children }) => {
  const AlcorHook = useAlcorHook();
  return <AlcorContext.Provider value={AlcorHook}>{children}</AlcorContext.Provider>;
};

export const useAlcor = () => useContext(AlcorContext);
