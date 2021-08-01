import { useQuery } from "react-query";
import Image from "next/image";
import { getPokemonDataByUrl } from "../service/api";
import Loading from "./Loading";
import { capitalFirstLetter } from "../helpers/formatString";
import Link from "next/link";

interface IPokemonProps {
  children: string;
}

export default function Pokemon({ children: url }: IPokemonProps) {
  const { data, isLoading } = useQuery(url, async () => getPokemonDataByUrl(url));

  if (isLoading || !data) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col m-2 shadow-lg p-4 rounded-lg">
      <Link href={`/pokemon/${data.id}`}>
        <a>
          <Image
            src={data.sprites.other["official-artwork"].front_default}
            width="120"
            height="120"
            alt={data.name}
          />
        </a>
      </Link>
      <span className="text-center font-semibold">
        {capitalFirstLetter(data.name)}
      </span>
    </div>
  );
}
