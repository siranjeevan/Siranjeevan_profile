import { useNavigate } from 'react-router-dom';
import Jeevith from "../../../assets/Jeevith2.png"
import Portfolio from "../../../assets/portfolio1.png"
import TargetCursor from "../../Animations/TargetCursor/TargetCursor";
import Dock from "../../Animations/Dock/Dock";
import MovingBackground from "../../Animations/MovingBackground";
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from "react-icons/vsc";
import HomeMap from "../HomeMap"
import LeetCard from "../LeetCard"
import TypingResultCard from "../Typing";
import Github from "../Github"
import LogoLoop from "../LogoLoopLayout";
import SpotifyCard from "../SpotifyCard";
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';
import { SiX } from 'react-icons/si';





export default function HomeScreen() {
  const navigate = useNavigate();
  
  const items = [
    { icon: <VscHome size={18} color="white" />, label: 'Home', onClick: () => navigate('/') },
    { icon: <VscArchive size={18} color="white"/>, label: 'Projects', onClick: () => navigate('/projects') },
    { icon: <VscAccount size={18} color="white" />, label: 'Mentor', onClick: () => navigate('Mentor') },
    { icon: <VscSettingsGear size={18} color="white" />, label: 'Settings', onClick: () => alert('Settings!') },
  ];
  
  return (
    <div className="min-h-screen cursor-none relative overflow-hidden">
      <MovingBackground />
      
      {/* Hero Section - Mobile First Design */}
      <div className="relative min-h-screen flex flex-col justify-center items-center px-3 sm:px-4 mt-10 sm:mt-0">
        
        {/* Mobile Full-Screen Image Design */}
        <div className="flex flex-col items-center justify-center w-full mx-auto sm:hidden relative min-h-screen">
          
          {/* Dynamic Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-4 w-40 h-40 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-6 w-32 h-32 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-2 w-24 h-24 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-xl animate-ping" style={{animationDelay: '2s'}}></div>
          </div>
          
          {/* Main Profile Image - Full Screen Focus */}
          <div className="relative mb-8">
            {/* Outer glow effect */}
            <div className="absolute -inset-8 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
            
            {/* Triple rotating rings */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 animate-spin" style={{animationDuration: '6s'}}></div>
            <div className="absolute -inset-2 rounded-full bg-gradient-to-l from-emerald-500 via-blue-500 to-purple-500 animate-spin" style={{animationDuration: '4s', animationDirection: 'reverse'}}></div>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 animate-spin" style={{animationDuration: '3s'}}></div>
            
            {/* Main image container */}
            <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 p-1 shadow-2xl">
              <img 
                src={Jeevith} 
                className="w-full h-full rounded-full object-cover shadow-inner" 
                alt="Siranjeevan"
              />
            </div>
            
            {/* Floating status indicators */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-violet-400 to-fuchsia-500 rounded-full animate-ping"></div>
          </div>
          
          {/* Name & Title with Dramatic Typography */}
          <div className="text-center mb-8 px-4">
            <h1 className="text-5xl font-black mb-4 leading-tight">
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                Siranjeevan
              </span>
            </h1>
            
            {/* Animated separator */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-violet-400 to-transparent animate-pulse"></div>
              <div className="w-3 h-3 bg-fuchsia-400 rounded-full animate-bounce"></div>
              <div className="h-0.5 w-12 bg-gradient-to-l from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            </div>
            
            <div className="space-y-3">
              <p className="text-slate-800 text-xl font-bold tracking-wide">
                Full Stack Developer
              </p>
              <p className="text-slate-700 text-base font-medium">
                Crafting Digital Masterpieces
              </p>
              <p className="text-slate-600 text-sm italic">
                "Code is poetry in motion"
              </p>
            </div>
          </div>
          
          {/* Floating Stats */}
          <div className="flex gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-black text-violet-600 mb-1 animate-pulse">3+</div>
              <div className="text-xs text-slate-700 uppercase tracking-widest">Years</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-400 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-fuchsia-600 mb-1 animate-pulse" style={{animationDelay: '0.5s'}}>50+</div>
              <div className="text-xs text-slate-700 uppercase tracking-widest">Projects</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-400 to-transparent"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-cyan-600 mb-1 animate-pulse" style={{animationDelay: '1s'}}>∞</div>
              <div className="text-xs text-slate-700 uppercase tracking-widest">Ideas</div>
            </div>
          </div>
          
          {/* Social Links - Horizontal Layout */}
          <div className="flex gap-6 mb-10">
            <a href="https://github.com/siranjeevan" className="group relative w-14 h-14 bg-gradient-to-br from-slate-200/80 to-slate-300/60 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-slate-400/50 hover:border-slate-600/70 transition-all duration-500 hover:scale-125 hover:-translate-y-2 shadow-xl hover:shadow-2xl">
              <FaGithub size={22} className="text-slate-700 group-hover:text-slate-900 transition-all duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="https://linkedin.com/in/siranjeevan" className="group relative w-14 h-14 bg-gradient-to-br from-blue-100/80 to-blue-200/60 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-blue-400/50 hover:border-blue-600/70 transition-all duration-500 hover:scale-125 hover:-translate-y-2 shadow-xl hover:shadow-blue-500/30">
              <FaLinkedin size={22} className="text-blue-600 group-hover:text-blue-800 transition-all duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="https://x.com/siranjeevan" className="group relative w-14 h-14 bg-gradient-to-br from-slate-200/80 to-slate-300/60 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-slate-400/50 hover:border-slate-600/70 transition-all duration-500 hover:scale-125 hover:-translate-y-2 shadow-xl hover:shadow-2xl">
              <SiX size={20} className="text-slate-700 group-hover:text-slate-900 transition-all duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="mailto:siranjeevan@example.com" className="group relative w-14 h-14 bg-gradient-to-br from-red-100/80 to-red-200/60 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-red-400/50 hover:border-red-600/70 transition-all duration-500 hover:scale-125 hover:-translate-y-2 shadow-xl hover:shadow-red-500/30">
              <FaEnvelope size={20} className="text-red-600 group-hover:text-red-800 transition-all duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
          
          {/* CTA Button */}
          <button className="group relative px-10 py-4 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-110 hover:-translate-y-2 overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              Let's Create Together
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-cyan-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
        
        {/* Desktop/Tablet Layout (Hidden on Mobile) */}
        <div className="hidden sm:block w-full">
          {/* Portfolio Image */}
          <div className="relative z-10 -mt-20 sm:-ml-33 xl:ml-0">
            <img src={Portfolio} className="w-auto h-auto xl:max-w-full lg:max-w-300 md:max-w-250 sm:max-w-250 lg:scale-80 md:scale-80" />
          </div>
          
          {/* Name Title */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 xl:-ml-90 xl:mt-20 lg:-ml-80 lg:mt-10 md:-ml-60 md:mt-10 sm:-ml-60 sm:mt-10">
            <h2 className="text-[#baa794] font-black text-center xl:text-4xl md:text-3xl sm:text-2xl lg:tracking-[8px] md:tracking-[6px] sm:tracking-[4px] whitespace-nowrap">
              Siranjeevan
            </h2>
          </div>
          
          {/* Profile Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 sm:mt-8">
            <img src={Jeevith} className="xl:h-174 lg:h-179 md:h-170 sm:h-179 object-contain"/>
          </div>
          
          {/* Social Links - Desktop Vertical */}
          <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30 flex flex-col gap-3">
            <a href="https://github.com/siranjeevan" className="w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-[#baa794]/30 transition-all duration-300 hover:scale-110 shadow-lg">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/siranjeevan" className="w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-[#0077b5]/30 transition-all duration-300 hover:scale-110 shadow-lg">
              <FaLinkedin size={20} />
            </a>
            <a href="https://x.com/siranjeevan" className="w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 shadow-lg">
              <SiX size={18} />
            </a>
            <a href="mailto:siranjeevan@example.com" className="w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-red-500/30 transition-all duration-300 hover:scale-110 shadow-lg">
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative z-20 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-800/30 backdrop-blur-sm">
        <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-8">
          {/* Mobile Cards Layout */}
          <div className="sm:hidden space-y-6">
            {/* Section Title */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-2">
                My Work & Skills
              </h2>
              <div className="h-0.5 w-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 mx-auto"></div>
            </div>
            
            {/* Cards with Animation */}
            <div className="space-y-4">
              <HomeMap />
              <LeetCard />
              <TypingResultCard wpm={174} time={60} accuracy={98} lang="EN" />
              <Github />
              <LogoLoop />
              <SpotifyCard />
            </div>
          </div>
          
          {/* Desktop/Tablet Cards Layout */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" data-aos="fade-up" data-aos-duration="1000">
              <HomeMap />
              <LeetCard />
              <div className="md:block lg:hidden">
                <TypingResultCard wpm={174} time={60} accuracy={98} lang="EN" />
              </div>
              <div className="md:block lg:hidden">
                <Github />
              </div>
              <div className="hidden lg:block">
                <TypingResultCard wpm={174} time={60} accuracy={98} lang="EN" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="hidden lg:block">
                <Github />
              </div>
              <LogoLoop />
              <SpotifyCard />
            </div>
          </div>
        </div>
      </div>
      
      <Dock 
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 hidden sm:flex"
        items={items}
        panelHeight={60}
        baseItemSize={45}
        magnification={65}
      />
      
      {/* Floating Mobile Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 sm:hidden">
        <div className="bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-2xl rounded-2xl border border-slate-600/50 shadow-2xl px-2 py-2">
          <div className="flex gap-1">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className="group relative w-12 h-12 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative text-slate-400 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <TargetCursor />
    </div>
  );
}
