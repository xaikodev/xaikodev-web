import type { NextPage } from "next";
import { Charter } from "src/components/Swax/Charter";
import { Trader } from "src/components/Swax/Trader/Trader";

const Swax: NextPage = () => {
  return (
    <div>
      {/* components */}
      <Trader/>
      <Charter/>
      <div></div>
    </div>
  );
};

export default Swax;
