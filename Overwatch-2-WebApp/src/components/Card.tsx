import HeroSelect from "./HeroSelect";
import { useEffect, useState } from "react";
import { SelectOptions } from "./heroSelectData";
import useFetch from "../hooks/useFetch";
import UnknownHeroIcon from "../assets/unknown.png";

type HeroType = {
  key: string;
  name: string;
  portrait: string;
  role: string;
};

function Card() {
  const [imgSrc, setImgSrc] = useState("");
  const [heroOption, setHeroOption] = useState<SelectOptions | undefined>(
    undefined,
  );
  const data: HeroType[] | null = useFetch<HeroType[]>(
    "https://overfast-api.tekrop.fr/heroes",
  );
  useEffect(() => {
    if (heroOption && data) {
      const selectedHero = data.find((hero) => hero.name === heroOption.value);
      if (selectedHero) {
        setImgSrc(selectedHero.portrait);
      }
    }
  }, [heroOption, data]);
  if (data === null) return null;

  return (
    <div className="flex flex-col w-[350px] h-[600px] bg-amber-500 m-[10px] items-center rounded-3xl">
      <img
        src={imgSrc || UnknownHeroIcon}
        className="h-[200px] w-[200px] mt-[20px] rounded-3xl border border-black"
        alt="Hero icon"
      />
      <HeroSelect value={heroOption} setValue={setHeroOption} />
    </div>
  );
}

export default Card;
