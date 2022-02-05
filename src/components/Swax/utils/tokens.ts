import { EOSAmsterdamToken, EOSCafeToken, Token } from "../models/wax.models";

const EOSCafeTokens: () => Promise<EOSCafeToken[]> = async () => {
  const EOSTokensResponse = await fetch("https://raw.githubusercontent.com/eoscafe/eos-airdrops/master/tokens.json");
  return await EOSTokensResponse.json();
};

const AccountTokens: (account: string) => Promise<EOSAmsterdamToken[]> = async (account) => {
  const response = await fetch(`https://lightapi.eosamsterdam.net/api/balances/wax/${account}`);
  const acc = await response.json();
  return acc.balances;
};

const isSameToken = (eosT: EOSCafeToken, eosA: EOSAmsterdamToken) => {
  return eosT.account === eosA.contract && eosT.symbol === eosA.currency;
};

export const GetTokens = async (acc: string) => {
  const accountTokens = await AccountTokens(acc);
  const EOSTokens = await EOSCafeTokens();
  let NoLogoTokens: Token[] = [];
  let LogoTokens: Token[] = [];

  accountTokens.forEach((eosA) => {
    if (EOSTokens.findIndex((eosT) => isSameToken(eosT, eosA)) !== -1) {
      NoLogoTokens.push({
        contract: eosA.contract,
        name: eosA.currency,
        symbol: eosA.currency,
        balance: Number(eosA.amount),
        precision: Number(eosA.decimals),
        logo: {},
      });
    }
  });

  LogoTokens = EOSTokens.map((eosT) => {
    const availableToken = accountTokens.find((eosA) => isSameToken(eosT, eosA));
    const balance = Number(availableToken?.amount) || 0;
    const decimals = Number(availableToken?.decimals) || 8;
    return {
      contract: eosT.account,
      name: eosT.name,
      symbol: eosT.symbol,
      balance: balance,
      precision: decimals,
      logo: { sm: eosT.logo, lg: eosT.logo_lg },
    };
  });

  return [...NoLogoTokens, ...LogoTokens];
};
