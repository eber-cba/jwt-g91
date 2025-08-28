import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import RegisterWithCustomHooks from "./pages/RegisterWithCustomHooks";

import NavSup from "./Components/NavSup";

const App = () => {
  let user = true;
  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterWithCustomHooks />} />
        <Route
          path="/profile"
          element={user ? <ProfilePage /> : <LoginPage />}
        />
      </Routes>
      <NavSup />
    </div>
  );
};
export default App;
