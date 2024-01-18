import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import AuthPage from "./AuthPage/AuthPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
