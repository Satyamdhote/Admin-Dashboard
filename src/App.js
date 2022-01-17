import "./App.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Schedule from "./components/Schedule";
import Transactions from "./components/Transactions";
import Recent from "./components/Recent";

function App() {
  return (
    <div className="App">
      <div class="flex flex-row justify-start bg-blue-800">
        <div class="flex">
          <Sidebar></Sidebar>
        </div>
        <div class="grow bg-gray-100 mt-5 ml-7 mr-10 mb-10 rounded-3xl">
          {" "}
          <Navbar></Navbar>
          <Content></Content>
          <Cards></Cards>
          <Product></Product>
          <div class="flex flex-row">
            <div>
              <Schedule></Schedule>
            </div>
            <div>
              <Transactions></Transactions>
            </div>
            <div>
              <Recent></Recent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
