import {BrowserRouter, Link, Route, Routes, useParams} from "react-router-dom";

function Info() {
  const { firstName } = useParams();
  return <h1>Hello, {firstName}!</h1>
}

export default function DynamicLinkInfo() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/info/Alice">Alice</Link> | {" "}
        <Link to="/info/Bob">Bob</Link> | {" "}
        <Link to="/info/Charlie">Charlie</Link>
      </nav>

      <Routes>
        <Route path="/info/:firstName" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
};