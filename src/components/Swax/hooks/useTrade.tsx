import { createContext, FC, useContext, useEffect, useState } from "react";
import { AlcorPool } from "../models/alcor.models";
import { Token } from "../models/wax.models";
import { useWax } from "./useWax";

export interface TradeContextInterface {
  token: Token;
  pairToken: Token;
  value: number;
  pairValue: number;
  trade: () => void;
  switchTokens: () => void;
  changeToken: (token: Token) => void;
  changePairToken: (token: Token) => void;
  changeValue: (val: number) => void;
  changePairValue: (val: number) => void;
}

const TradeContext = createContext({} as TradeContextInterface);

const useTradeHook: () => TradeContextInterface = () => {
  const { tokens, account, transact, get } = useWax();

  const [pools, setPools] = useState<AlcorPool[]>([]);

  const [token, setToken] = useState<Token>(tokens[0]);
  const [pairToken, setPairToken] = useState<Token>(tokens[1]);

  const [value, setValue] = useState(0);
  const [pairValue, setPairValue] = useState(0);

  const changePairValue = (val: number) => {
    setPairValue(val);
  };

  const changeValue = (val: number) => {
    setValue(val);
  };

  const resetValues = () => {
    setValue(0);
    setPairValue(0);
  };

  const changeToken = (token: Token) => {
    if (token.contract === pairToken.contract && token.symbol === pairToken.symbol) {
      switchTokens();
    } else {
      setToken(token);
      resetValues();
    }
  };
  const changePairToken = (token: Token) => {
    if (token.contract === pairToken.contract && token.symbol === pairToken.symbol) {
      switchTokens();
    } else {
      setPairToken(token);
      resetValues();
    }
  };

  const switchTokens = () => {
    const temp = token;
    setToken(pairToken);
    setPairToken(temp);
    resetValues();
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

  const estimatePrice = (tokenBuy: Token, tokenSell: Token) => {};

  const trade = () => {};

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

  useEffect(() => {}, [token]);

  useEffect(() => {
    const pairTimeout = setInterval(() => getPools(), 2000);
    return () => {
      clearInterval(pairTimeout);
    };
  }, []);

  return { token, pairToken, value, pairValue, trade, switchTokens, changeToken, changePairToken, changeValue, changePairValue };
};

export const ProvideTrade: FC = ({ children }) => {
  const TradeHook = useTradeHook();
  return <TradeContext.Provider value={TradeHook}>{children}</TradeContext.Provider>;
};

export const useTrade = () => useContext(TradeContext);
