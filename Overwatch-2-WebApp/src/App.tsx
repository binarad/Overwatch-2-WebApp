import Card from "./components/Card";
import Button from "./components/Button";
import RoleSelect from "./components/roleSelect";
// import DataFetcher from "./components/DataFetcher";

import { useEffect } from "react";
import useFetch from "./hooks/useFetch";

function App() {
	const data = useFetch('http://localhost:5173/public/counterpicks.json')

	useEffect(() => {
		console.log(data)
	}, [data])
  return (
		<div className="w-full m-[10px] flex flex-col">
			<h1 className="text-center text-3xl ">Select Enemy Comp</h1>
			<div className='flex justify-center items-center w-full'>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<div className="flex justify-center m-5">
				<Button />
				<RoleSelect />
			</div>
			{/* <DataFetcher /> */}
		</div>
	)
}
export default App;
