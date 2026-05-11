import {BrowserRouter, Link, Outlet, Route, Routes} from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function Products() {
  return (
    <>
      <h1>Products Page</h1>
      <nav>
        <Link to="/products/cars">Cars</Link> |{" "}
        <Link to="/products/bikes">Bikes</Link>
      </nav>
      <Outlet />
    </>
  );
}

function CarsProducts() {
  return (
    <>
      <h2>Cars</h2>
      <ul>
        <li>Tesla</li>
        <li>Audi</li>
        <li>BMW</li>
      </ul>
    </>
  );
}

function BikesProducts() {
  return (
    <>
      <h2>Bikes</h2>
      <ul>
        <li>Yamaha</li>
        <li>Honda</li>
        <li>Suzuki</li>
      </ul>
    </>
  );
}

function NestedLink() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} >
          <Route path="cars" element={<CarsProducts />} />
          <Route path="bikes" element={<BikesProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default NestedLink;