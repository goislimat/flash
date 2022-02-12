import type { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

import { Screen } from "../src/ui";

const List = styled.ul`
  li {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 16px;
  }
`;

const Home: NextPage = () => {
  return (
    <Screen title="Link Tree">
      <List>
        <li>
          <Link href="partner/login">PARTNER</Link>
        </li>
        <li>
          <Link href="quote">QUOTE</Link>
        </li>
        <li>
          <Link href="auth/login">APP</Link>
        </li>
      </List>
    </Screen>
  );
};

export default Home;
