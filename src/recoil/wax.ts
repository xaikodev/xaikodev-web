import * as waxjs from "@waxio/waxjs/dist";
import { GetAccountResult } from "eosjs/dist/eosjs-rpc-interfaces";
import { atom, selector } from "recoil";

const wax = new waxjs.WaxJS({ rpcEndpoint: "https://wax.greymass.com" });

export interface WAXAccountToken {
  amount: number;
  contract: string;
  precision: number;
  symbol: string;
}

export const WaxAccount = atom({
  key: "WaxAccountState",
  default: {
    name: wax.userAccount,
    pubKeys: wax.pubKeys
  }
});

export const WaxAccountDetails = selector<GetAccountResult>({
  key: "WaxAccountDetailsState",
  get: async ({ get }) => {
    const account = get(WaxAccount);
    return await wax.rpc.get_account(account.name);
  }
});

export const WaxWallet = selector<WAXAccountToken[]>({
  key: "WaxWalletState",
  get: async ({ get }) => {
    const account = get(WaxAccount);
    const response = await fetch(
      `https://wax.eosrio.io/v2/state/get_tokens?account=${account.name}`
    );
    const result = await response.json();
    return await result.tokens;
  }
});
