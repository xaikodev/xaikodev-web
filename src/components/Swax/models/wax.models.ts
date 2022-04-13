import { GetAccountResult } from "eosjs/dist/eosjs-rpc-interfaces";

export interface EOSCafeToken {
  account: string;
  chain: string;
  logo: string;
  logo_lg: string;
  name: string;
  symbol: string;
}

export interface EOSAmsterdamToken {
    currency: string
    amount: string
    contract: string;
    decimals: string
}

export interface TokenLogo {
  sm?: string;
  lg?: string;
}

export interface Token {
  contract: string;
  precision: number;
  balance: number;
  symbol: string;
  name: string;
  logo: TokenLogo;
}

export interface Account {
  name: string;
  pubKeys: string[];
  wallet: Token[];
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
