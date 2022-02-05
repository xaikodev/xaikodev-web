

export interface AlcorPool {
    id: string;
    contract: string;
    symbol: string;
    supply: number;
    fee: number;
    fee_contract: string;
    pair: { quantity: number; contract: string; name: string }[];
  };