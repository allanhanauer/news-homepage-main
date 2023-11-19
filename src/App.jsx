import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <Main />
      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a
            rel="noopener noreferrer"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">AllanHanauer</a>.
        </div>
      </footer>
    </>
  );
}

export default App;
