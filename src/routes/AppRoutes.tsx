import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";


import HomePage from "../pages/HomePage";
import RankingPage from "../pages/RankingPage";
import ResultPage from "../pages/ResultPage";
import LoginPage from "../pages/auth/LoginPage";
import TriviaPage from "../pages/TriviaPage";
import GamePage from "../pages/GamePage";
import Model3DPage from "../pages/Model3DPage";
import UploadStudyPage from "../pages/UploadStudyPage";
import StudyLibraryPage from "../pages/StudyLibraryPage";
import RegisterPage from "../pages/auth/RegisterPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/juego" element={<GamePage />} />
        <Route path="/trivia/:tema" element={<TriviaPage />} />
       
        <Route path="/resultado" element={<ResultPage />} />
        <Route path="/ranking" element={<RankingPage />} />

        <Route path="/modelo-3d" element={<Model3DPage />} />
        <Route path="/subir-archivos" element={<UploadStudyPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/biblioteca" element={<StudyLibraryPage />} />
        <Route path="/registro" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}




export default AppRoutes;
