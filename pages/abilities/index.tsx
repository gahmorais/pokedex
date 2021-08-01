import Link from "next/link";
import { useState } from "react";
import { useQuery } from "react-query";
import Ability from "../../components/Ability";
import Loading from "../../components/Loading";
import PaginationButton from "../../components/PaginationButton";
import { capitalFirstLetter } from "../../helpers/formatString";
import { getAbilities } from "../../service/api";

export default function Index() {
  const [pagination, setPagination] = useState<string>(
    "https://pokeapi.co/api/v2/ability/?offset=0&limit=20"
  );
  const { data: abilities, isLoading } = useQuery(pagination, async () =>
    getAbilities(pagination)
  );

  if (isLoading || !abilities) {
    return <Loading />;
  }

  function handleClick(url: string) {
    if (url !== null) {
      setPagination(url);
    }
  }
  return (
    <div>
      <div className="flex flex-col">
        {abilities.results.map((abilities, index) => (
          <Ability key={index}>{abilities.url}</Ability>
        ))}
      </div>

      <PaginationButton onButtonClick={handleClick} url={abilities.previous}>
        Previous
      </PaginationButton>
      <PaginationButton onButtonClick={handleClick} url={abilities.next}>
        Next
      </PaginationButton>
    </div>
  );
}
