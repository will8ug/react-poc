import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";

const navLinkStyles = ({ isActive }: {isActive: boolean}) => ({
  color: isActive ? "#007bff" : "#333",
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
  padding: '5px 10px',
});

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

export default function Starter() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" style={navLinkStyles}>Home</NavLink> |{" "}
        <NavLink to="/about" style={navLinkStyles}>About</NavLink> |{" "}
        <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};