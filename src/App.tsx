import "./style/input.css";
import "./App.css";
// components
import { Input, Status } from "./components";
function App() {
  return (
    <>
      <div
        id="container"
        className="m-auto w-[32rem] h-[41rem] py-10 flex flex-col items-center rounded-xl"
      >
        <Input />
        <Status />
      </div>
    </>
  );
}
export default App;
