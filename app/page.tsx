import Image from "next/image";
import Cards from "./cards";
import Link from "next/link";
import Capa from "./capa";

const Home: React.FC = () => {
  return (
    <div>
      <nav className="h-24">
        <ul className="ml-4 mt-4 flex items-center gap-4">
          <li>
            <Image src="/logo.webp" width={115} height={115} alt="logo" />
          </li>
          <li className="ml-auto mr-8 flex items-center gap-6">
            <Link href="/API">
              <span className="cursor-pointer border-b border-black text-sm font-medium">
                API Platform
              </span>
            </Link>
            <span className="cursor-pointer text-sm text-gray-500">中國人</span>
          </li>
        </ul>
      </nav>
      <p className="mt-4 flex items-center justify-center text-sm font-normal text-gray-400 cursor-pointer">
        🎉 DeepSeek-R1 is now live and open source, rivaling OpenAI's Model o1, Available on web, app, and API. Click for details
      </p>
      <section>
        <div className="mt-12 flex flex-col items-center justify-center gap-3">
          <Image src="/DeepSeek_logo.png" width={320} height={100} alt="logo2" />
          <h1 className="text-3xl font-bold text-black">Into the unknown</h1>
          <Cards />
        </div>
        <Capa />
      </section>
      <link rel="icon" href="/deepseek-ai.png" />
    </div>
  );
};

export default Home;