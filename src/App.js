import "./App.css";
import LoginPage from "./Pages/LoginPage";
import SignUp from "./Login/SignUp"; // Import your SignUp component
import HomePage from "./Pages/HomePage"; // Import your HomePage component
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUp />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/HomePage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
