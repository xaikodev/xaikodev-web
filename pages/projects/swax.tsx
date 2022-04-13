import type { NextPage } from "next";
import { Connect } from "src/components/Swax/components/Connect";
import { ProvideAlcor } from "src/components/Swax/hooks/useAlcor";
import { useWax, WaxProvider } from "src/components/Swax/hooks/useWax";

const Swax: NextPage = () => {
  const { isConnected } = useWax();
  console.log(isConnected);
  return (
    <WaxProvider>
      <Connect />
    </WaxProvider>
  );
};

export default Swax;
