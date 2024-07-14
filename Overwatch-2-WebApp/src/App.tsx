import Card from "./components/Card";
import Button from "./components/Button";
import RoleSelect from "./components/roleSelect";
function App() {
  return (
    <div className="w-full m-[10px] flex flex-col">
      <h1 className="text-center text-3xl ">Select Enemy Comp</h1>
      <div className="flex justify-center items-center w-full flex-wrap">
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
    </div>
  );
}
export default App;
