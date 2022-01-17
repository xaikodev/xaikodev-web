import { FC } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Title } from "./components/Title";

export const Header: FC = () => {
  return (
    <header>
      <Title />
      <Navbar />
    </header>
  );
};
