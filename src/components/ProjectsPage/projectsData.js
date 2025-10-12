// src/components/ProjectsPage/projectsData.js
import Newton from "../../assets/Newton.jpg"
import Connect4 from "../../assets/Connect4.jpg"
import DataBase from "../../assets/DataBase.png"
import QuizGame from "../../assets/QuizGame.png"
import Html from "../../assets/Html.png"
import Saree from "../../assets/Saree.png"

export const projectsData = [
  {
    id: 1,
    title: "Physics App",
    description: "An iOS learning app built with Swift and SwiftUI. It uses Swift animations and motion effects to visualize real-time physics concepts with a clean, interactive UI.",
    image: Newton, // Use a real image or local asset like: require('../assets/newton.png')
    tech: ["Swift", "SwiftUI", "Xcode", "Swift Animation"],
    liveLink: "", // optional (TestFlight or App Store)
    githubLink: "https://github.com/your-username/physics-app"
  },
  {
    id: 2,
    title: "Connect Three Game",
    description: "An iOS game built with Swift and SwiftUI. Features drag-and-drop moves, smooth animations, and instant win detection.",
    image: Connect4, // Use your actual image or local asset like: require('../assets/connect3.png')
    tech: ["Swift", "SwiftUI", "Xcode"],
    liveLink: "https://your-live-link.com", // optional (App Store or TestFlight)
    githubLink: "https://github.com/your-username/connect-three-game"
  },
  {
    id: 3,
    title: "Travel Rental Database System",
    description: "A MySQL-based project to manage travel rentals and user bookings. Includes payment tracking and efficient data handling.",
    image: DataBase, // Use a real image or local asset like: require('../assets/database.png')
    tech: ["MySQL"],
    liveLink: "https://your-live-link.com", // optional, if you have a demo
    githubLink: "https://github.com/your-username/travel-rental-db"
  },
  {   
    id: 4,
    title: "Quiz Game",
    description: "A React-based quiz game with dynamic questions and real-time score updates. Styled using Tailwind CSS for a clean UI.",
    image: QuizGame, // Use a real image or local asset like: require('../assets/quizGame.png')
    tech: ["React", "Tailwind CSS", "JavaScript"],
    liveLink: "https://siranjeevan.github.io/quizGame/",
    githubLink: "https://github.com/siranjeevan/quizGame"
  },
  {
    id: 5,
    title: "My Portfolio Website",
    description: "My first personal portfolio built using HTML, CSS, and JavaScript. Showcases my projects and web development skills.",
    image: Html, // Use a real image or local asset like: require('../assets/portfolio.png')
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://siranjeevan.github.io/PROJECT_HTML/",
    githubLink: "https://github.com/siranjeevan/PROJECT_HTML"
  },
  {
    id: 6,
    title: "Saree Shopping App",
    description: "A modern e-commerce web app for saree collections built with React. Features smooth Tailwind CSS and motion animations for an interactive experience.",
    image: Saree, // Use a real image or local asset like: require('../assets/sareeApp.png')
    tech: ["React", "Tailwind CSS", " Motion", "JavaScript"],
    liveLink: "https://siranjeevan.github.io/saree/", // update if you have a new live link
    githubLink: "https://github.com/siranjeevan/saree"
  },
];