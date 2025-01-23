import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
