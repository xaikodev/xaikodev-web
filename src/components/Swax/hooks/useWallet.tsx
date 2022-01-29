import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { Token } from "./useTokens";
import { useWax, WaxAccount } from "./useWax";

export interface ResponseToken {
  amount: string;
  contract: string;
  currency: string;
  decimals: string;
}

export interface WalletToken extends Token {
  balance: number;
  decimals: number;
}

export interface WaxWallet {
  account: WaxAccount;
  availableTokens: WalletToken[];
}

interface UseWallet {
  wallet: WaxWallet;
  tokens: WalletToken[];
}

const WalletContext = createContext({} as UseWallet);

const useWalletHook: () => UseWallet = () => {
  const { account, tokens } = useWax();
  const [walletTokens, setWalletTokens] = useState<WalletToken[]>([]);

  const availableTokens = useMemo(
    () =>
      walletTokens &&
      walletTokens.filter((token) => {
        return token.balance > 0;
      }),
    [walletTokens]
  );

  const getTokensBalance = useCallback(async () => {
    const accountTokens = await fetch(
      `https://lightapi.eosamsterdam.net/api/balances/wax/${account.name}`
    );
    const response = await accountTokens.json();
    const newWalletTokens: WalletToken[] =
      tokens &&
      tokens.map((token) => {
        const responeToken: ResponseToken = response.find(
          (res: ResponseToken) =>
            res.currency === token.symbol && res.contract === token.account
        );
        return {
          ...token,
          balance: responeToken ? parseFloat(responeToken.amount) : 0,
          decimals: responeToken ? parseFloat(responeToken.decimals) : 8
        };
      });
    setWalletTokens(newWalletTokens);
  }, [account, tokens]);

  useEffect(() => {
    walletTokens || getTokensBalance();
    console.log(walletTokens);
  }, [getTokensBalance, tokens, walletTokens]);

  return { wallet: { account, availableTokens }, tokens: walletTokens };
};

export const ProvideWallet: FC = ({ children }) => {
  const WalletHook = useWalletHook();
  return (
    <WalletContext.Provider value={WalletHook}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
