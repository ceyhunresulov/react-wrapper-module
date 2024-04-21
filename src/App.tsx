import "./App.css";
import Wrapper from "./components/Wrapper";
import { useClickButton } from "./hooks/useClickButton";

function App() {
  const { handleClick, value } = useClickButton();

  console.log(value);
  return (
    <div>
      {value && (
        <Wrapper>
          <h1>Elements</h1>
        </Wrapper>
      )}
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default App;
