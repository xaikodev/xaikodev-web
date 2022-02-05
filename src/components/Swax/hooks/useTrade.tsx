import { createContext, FC, useContext, useEffect, useState } from "react";
import { Token } from "../models/wax.models";
import { useAlcor } from "./useAlcor";
import { useWax } from "./useWax";

export interface TradeContextInterface {
  token: Token;
  pairToken: Token;
  value: number;
  pairValue: number;
  availableTokens: Token[];
  trade: () => void;
  switchTokens: () => void;
  changeToken: (token: Token) => void;
  changePairToken: (token: Token) => void;
  changeValue: (val: number) => void;
  changePairValue: (val: number) => void;
}

const TradeContext = createContext({} as TradeContextInterface);

const useTradeHook: () => TradeContextInterface = () => {
  const { tokens } = useWax();
  const { pools, swap } = useAlcor();

  const [token, setToken] = useState<Token>(tokens.find((t) => t.symbol === "WAX")!);
  const [pairToken, setPairToken] = useState<Token>(tokens.find((t) => t.symbol === "TLM")!);

  const [value, setValue] = useState(0);
  const [pairValue, setPairValue] = useState(0);

  const [availableTokens, setAvailableTokens] = useState<Token[]>([]);

  const changePairValue = (val: number) => {};

  const changeValue = (val: number) => {};

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
    setPairToken(token);
    resetValues();
  };

  const switchTokens = () => {
    const temp = token;
    setToken(pairToken);
    setPairToken(temp);
    resetValues();
  };

  const trade = () => {};

  const estimatePrice = (tokenBuy: Token, tokenSell: Token) => {};


  useEffect(() => {}, [token]);

  return { token, pairToken, value, pairValue, availableTokens, trade, switchTokens, changeToken, changePairToken, changeValue, changePairValue };
};

export const ProvideTrade: FC = ({ children }) => {
  const TradeHook = useTradeHook();
  return <TradeContext.Provider value={TradeHook}>{children}</TradeContext.Provider>;
};

export const useTrade = () => useContext(TradeContext);
