import { useRouter } from "next/dist/client/router";
import { useQuery } from "react-query";
import Loading from "../../components/Loading";
import { getAbilitiesById } from "../../service/api";

export default function AbilitiesInfo() {
  const router = useRouter();
  const { id } = router.query;
  const render: boolean = router.isReady;

  const { data: abilities, isLoading } = useQuery(
    `${id}`,
    async () => getAbilitiesById(`${id}`),
    { enabled: render }
  );
  if (isLoading || !abilities) {
    return <Loading />;
  }

  const effect = abilities.effect_entries.find((effect) => effect.language.name === "en")
  console.log(effect)

  return (
    <>
      <div>{abilities.name}</div>
      <div>
        {effect?.effect}
      </div>
    </>
  );
}
