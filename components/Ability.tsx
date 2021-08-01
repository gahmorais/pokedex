import Link from "next/link";
import { useQuery } from "react-query";
import { getAbilitiesByUrl } from "../service/api";
import Loading from "./Loading";

interface IAbilityProps {
  children: string;
}

export default function Ability({ children: url }: IAbilityProps) {
  const { data: ability, isLoading } = useQuery(url, async () =>
    getAbilitiesByUrl(url)
  );
  if (isLoading || !ability) {
    return <Loading />;
  }
  return (
    <Link href={`/abilities/${ability.id}`}>
      <a>{ability.name}</a>
    </Link>
  );
}
