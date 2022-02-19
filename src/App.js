import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="w-full h-screen bg-white overflow-auto flex flex-col">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
