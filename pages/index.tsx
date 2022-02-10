import type { NextPage } from "next";
import Link from "next/link";

import { Screen } from "../src/ui";

const Home: NextPage = () => {
  return (
    <Screen title="Link Tree">
      <ul>
        <li>
          <Link href="partner/login">PARTNER</Link>
        </li>
        <li>
          <Link href="quote">QUOTE</Link>
        </li>
        <li>
          <Link href="app/acquisition/partner/welcome">APP</Link>
        </li>
      </ul>
    </Screen>
  );
};

export default Home;
