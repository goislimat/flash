import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Link tree</h1>
      <ul>
        <li>
          <Link href="partner/login">partner login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
