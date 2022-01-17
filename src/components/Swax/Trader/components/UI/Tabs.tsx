import { FC } from "react";

interface TabsProps {}
export const Tabs: FC<TabsProps> = (props) => {
  const {children} = props;
  return (
    <div>
      <div>
        <label>Swap</label>
        <label>Liquidity</label>
        <label>Arbitrage</label>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};
