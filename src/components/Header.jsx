import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import icon1 from "../assets/icon-menu.svg";
import icon2 from "../assets/icon-menu-close.svg";
import "./Header.css";
const Header = () => {
  const [resp, setResp] = useState(window.innerWidth < 790);
  const [activate, setActivate] = useState(true);
  useEffect(() => {
    console.log(resp);
    const handleResize = () => {
      setResp(window.innerWidth < 790);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header>
      <section className="logo">
        <img src={logo} alt="W." />
      </section>
      {resp ? (
        <nav>
          <img src={icon1} alt="Icon" onClick={() => setActivate(!activate)} />
          {!activate ? (
            <div id="nav-resp">
              <img
                src={icon2}
                width="40px"
                alt="Icon"
                onClick={() => setActivate(!activate)}
              />
              <ul>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trendig</li>
                <li>Categories</li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </nav>
      ) : (
        <nav className="NavBar-logo">
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trendig</li>
            <li>Categories</li>
          </ul>
        </nav>
      )}
    </header>
  );
};
export default Header;
