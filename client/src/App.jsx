import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div>
        <h1>shopWease</h1>
      </div>
      <p>shop with ease an ecommerce web application made using PERN stack!</p>
      <div id="button_wrapper" className="w-full">
        <button className="border rounded-lg bg-blue-500 hover:bg-blue-700 px-4 mx-auto text-white">
          &gt;
        </button>
      </div>
    </>
  );
}

export default App;
