import { FC } from "react";

interface ActionProps {
    text: string;
}
export const Action: FC<ActionProps> = (props) => {
  const {text} = props;
  return <label>{text}</label>;
};
