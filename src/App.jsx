import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from "./components/HomeScreen/main/HomeScreen";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import MentorPage from './components/MentorPage/MentorPage';
import AboutPage from './components/AboutPage/AboutPage';
import DockNavbar from './components/DockNavbar/DockNavbar';
import Footer from './components/Footer/Footer';
import "./index.css";

export default function App() {
  return (
    <Router basename="">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/Mentor" element={<MentorPage />} />
      </Routes>
      <DockNavbar />
      <Footer />
    </Router>
  );
}