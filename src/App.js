import Header from "./component/Header";
import Body from "./component/Body";

function App() {
  return (
    <div className="w-full h-screen bg-white overflow-auto flex flex-col">
      <Header />
      <Body />
    </div>
  );
}

export default App;
