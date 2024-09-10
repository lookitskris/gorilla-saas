import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  const adminClaim = process.env.NEXT_PUBLIC_USER_CLAIMS_ADMIN ?? "__admin__";

  return (
    <main>
      <h1 className="text-5xl font-bold text-gray-900 leading-[1.4] mb-5">
        Demo project
      </h1>
      <p className="text-2xl text-gray-700">Nested layouts in Next.js</p>
    </main>
  );
};

export default Home;
