import { useEffect, useState } from "react";

type Counterpick = {
  hero: string;
  type: string;
  counteredby: [];
};
("https://overfast-api.tekrop.fr/heroes");

export default function Button() {
  const [data, setData] = useState<Counterpick[] | undefined>(undefined);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5173/counterpicks.json");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(`Error ${error}`);
      }
    };
    fetchData();
  }, []);

  const handleClick = () => {
    console.log(data);
  };

  return (
    <button
      onClick={handleClick}
      className="w-[150px] h-[35px] mx-[5px] border border-black self-center rounded-[4px] bg-blue-500 hover:bg-blue-400"
    >
      Find Counter
    </button>
  );
}
