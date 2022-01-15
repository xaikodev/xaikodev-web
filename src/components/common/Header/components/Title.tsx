import { FC } from "react";

interface TitleProps {}

export const Title: FC<TitleProps> = (props) => {
  const {} = props;
  const text = "[<XaikoDev />]";
  return <label>{text}</label>;
};
