import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import GamePage from "../pages/GamePage";
import HomePage from "../pages/HomePage";
import RankingPage from "../pages/RankingPage";
import ResultPage from "../pages/ResultPage";
import LoginPage from "../pages/auth/LoginPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/juego" element={<GamePage />} />
        <Route path="/resultado" element={<ResultPage />} />
        <Route path="/ranking" element={<RankingPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}




export default AppRoutes;
