import "../styles/globals.css";

import type { AppProps } from "next/app";
import Image from 'next/image'
import Link from 'next/link'
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <nav className="flex item-center justify-between bg-red-400">
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className=" flex text-sm lg:flex-grow items-center space-x-4 p-2">
              <div>
                <Link href="/">
                  <a>
                    <Image
                      src="/pokebola.png"
                      height="40"
                      width="40"
                      alt="icone-pokebola"
                    />
                  </a>
                </Link>
              </div>
              <Link href="/pokemon">
                <a className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-red font-semibold text-lg text-white">
                  Pokemon
                </a>
              </Link>
              <Link href="/abilities">
                <a className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-red font-semibold text-lg text-white">
                  Habilidades
                </a>
              </Link>
              <Link href="/types">
                <a className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-red font-semibold text-lg text-white">
                  Tipos
                </a>
              </Link>
            </div>
          </div>
        </nav>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
export default MyApp;
