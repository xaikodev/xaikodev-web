import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";

export interface Token {
  account: string;
  chain: string;
  logo: string;
  logo_lg: string;
  name: string;
  symbol: string;
}

interface TokensContextType {
  tokens: Token[];
  refreshTokens: () => Promise<void>;
  getTokenLogo: (
    account: string,
    name: string
  ) => { logo: string; logo_lg: string };
}

const TokensContext = createContext({} as TokensContextType);

const useTokensHook: () => TokensContextType = () => {
  const [tokens, setTokens] = useState<Token[]>([]);

  const refreshTokens = useCallback(async () => {
    const tokensFetch = await fetch(
      "https://raw.githubusercontent.com/eoscafe/eos-airdrops/master/tokens.json"
    );
    const newTokens: Token[] = await tokensFetch.json();
    setTokens(newTokens);
  }, [setTokens]);

  const getTokenLogo = (account: string, name: string) => {
    const tokenIndex = tokens.findIndex(
      (token) => token.account === account && token.name === name
    );
    return {
      logo: tokens[tokenIndex].logo,
      logo_lg: tokens[tokenIndex].logo_lg
    };
  };

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      refreshTokens();
    }, 20000);
    return () => {
      clearInterval(refreshInterval);
    };
  }, [refreshTokens]);

  return { tokens, refreshTokens, getTokenLogo };
};

export const ProvideTokens: FC = ({ children }) => {
  const TokensHook = useTokensHook();
  return (
    <TokensContext.Provider value={TokensHook}>
      {children}
    </TokensContext.Provider>
  );
};

export const useTokens = () => useContext(TokensContext);
