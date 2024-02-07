import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ProcductsList from "./component/ProcductsList";
import Pagination from "./component/Pagination";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

function App() {
  const API_URL = "https://dummyjson.com/products?limit=100";
  const [productsList, setProductsList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error("Data Not Received");
      const products = await response.json();
      setProductsList(products.products);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const selectedPage = (selectedPageValue) => {
    console.log(selectedPageValue);
    if (selectedPageValue >= 1 && selectedPageValue <= productsList.length / 10)
      setPage(selectedPageValue);
  };
  return (
    // <div className="App">
    //   {productsList.length > 0 ? (
    //     <ProcductsList
    //       productsList={productsList.slice(page * 10 - 10, page * 10)}
    //     />
    //   ) : (
    //     <p>Loading...</p>
    //   )}
    //   {productsList.length > 0 && (
    //     <Pagination
    //       productsList={productsList}
    //       page={page}
    //       selectedPage={(selectedPageValue) => selectedPage(selectedPageValue)}
    //     />
    //   )}
    // </div>
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
