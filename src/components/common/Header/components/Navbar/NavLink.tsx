import { FC } from "react";
import { Link } from "@chakra-ui/layout";
import NextLink from "next/link";
import { useRouter } from "next/router";

import style from "./navbar.module.css";

export interface NavLinkProps {
  link: string;
  title: string;
}

export const NavLink: FC<NavLinkProps> = (props) => {
  const { link, title } = props;
  const router = useRouter();
  const isActive = router.asPath === link;

  const color = isActive ? "blue" : "black";
  const thickness = isActive ? "thick" : "thin";

  return (
    <NextLink href={link}>
      <Link
        color={color}
        className={style.navLink}
        w="100%"
      >
        {title}
      </Link>
    </NextLink>
  );
};
