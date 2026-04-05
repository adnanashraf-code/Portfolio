import React, { useState, useEffect, useRef } from 'react';
import { Mail, Briefcase, GraduationCap, Github, Linkedin, Code2, MonitorPlay, Database, FileJson, Layout, Palette, Zap, PenTool, LayoutTemplate, Cpu } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import avatarImgRaw from './assets/hero-portrait.jpg';

// --- Custom Cursor ---
// Adjusting the green dot to the new neon color.
const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  
  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-[#cfff04]/30 rounded-[45%] pointer-events-none z-[9990] blur-xl hidden lg:block"
        animate={{ x: mousePos.x - 128, y: mousePos.y - 128 }}
        transition={{ type: 'spring', damping: 30, stiffness: 100, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block"
        style={{ left: mousePos.x, top: mousePos.y }}
      >
        <div className="relative -top-[3px] -left-[3px] scale-150">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M5.5 3.5L19 10.5L12 13L9.5 20.5L5.5 3.5Z" stroke="white" strokeWidth="2" fill="black" strokeLinejoin="round"/>
             <circle cx="10" cy="11" r="3" fill="#cfff04" />
          </svg>
        </div>
      </motion.div>
    </>
  );
};

// --- Mouse Parallax Wrapper ---
const MouseParallax = ({ children, factor = 1, className = "" }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 50 * factor;
      const y = (e.clientY / window.innerHeight - 0.5) * 50 * factor;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [factor]);

  return (
    <motion.div
      animate={{ x: mousePos.x, y: mousePos.y }}
      transition={{ type: 'spring', damping: 15, stiffness: 100 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Phone Mockup Component ---
const PhoneMockup = () => {
  return (
    <div className="w-[240px] h-[480px] bg-black rounded-[3rem] border-[8px] border-[#1a1a1a] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative group cursor-pointer transition-transform hover:scale-[1.02]">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#1a1a1a] rounded-b-xl z-20"></div>
      
      {/* Scrolling Inner Screen */}
      <div className="w-full h-full bg-[#0a0a0a] overflow-hidden relative">
        <div className="w-full absolute top-0 flex flex-col group-hover:-translate-y-[60%] transition-transform duration-[10s] ease-linear">
          
          <div className="h-[350px] relative">
            <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=400" className="w-full h-full object-cover opacity-60" alt="Background" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>
            
            <div className="absolute bottom-4 left-3 right-3 flex flex-col items-center">
               <h3 className="text-white text-3xl font-black mb-1 tracking-tighter drop-shadow-lg">NETFLIX</h3>
               <p className="text-gray-300 text-[10px] mb-3 uppercase tracking-widest font-bold">Start Watching</p>
               <button className="w-full bg-[#E50914] text-white py-2.5 rounded text-xs font-bold tracking-wide">OPEN</button>
            </div>
          </div>
          
          <div className="px-3 py-4 space-y-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i}>
                 <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
                 <div className="flex gap-2">
                   <div className="w-20 h-28 bg-white/10 rounded shrink-0 flex items-center justify-center text-white/20"><MonitorPlay size={24} /></div>
                   <div className="w-20 h-28 bg-white/5 rounded shrink-0"></div>
                   <div className="w-20 h-28 bg-white/5 rounded shrink-0"></div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


// --- MAIN APP COMPONENT ---
export default function App() {
  const avatarImg = avatarImgRaw;

  return (
    <div className="font-sans bg-brand-cream text-brand-dark overflow-x-hidden selection:bg-[#cfff04] selection:text-black">
      <CustomCursor />

      {/* NEW DARK NEON HERO SECTION */}
      <section className="bg-[#070707] pt-10 pb-32 px-4 md:px-12 relative overflow-hidden flex flex-col min-h-screen text-white">
        
        {/* Navigation Overridden for Hero */}
        <header className="flex justify-between items-center relative z-50 mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-white font-sans text-xl font-bold tracking-widest uppercase">
            Adnan.
          </motion.div>
          <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-gray-300">
            <a href="#about" className="hover:text-[#cfff04] transition-colors uppercase">About</a>
            <a href="#work" className="hover:text-[#cfff04] transition-colors uppercase">Work</a>
            <a href="#contact" className="border border-white/20 px-6 py-2 rounded-full hover:border-[#cfff04] hover:text-[#cfff04] transition-all uppercase">
              Let's Talk
            </a>
          </motion.nav>
        </header>

        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 flex-1 items-center">
          
          {/* LEFT: Typography & Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center lg:col-span-7 z-20 relative pt-10"
          >
            {/* Massive Typography */}
            <h1 className="text-[12vw] lg:text-[7rem] font-sans font-black leading-[0.85] tracking-tighter uppercase mb-2">
              <span className="block text-white">ADNAN</span>
              <span className="block text-[#cfff04]">ASHRAF</span>
            </h1>
            
            <p className="text-gray-400 text-sm md:text-base max-w-md font-bold tracking-widest leading-relaxed uppercase mt-8 mb-8 border-l-2 border-[#cfff04] pl-4">
              Creative Developer & Interaction Designer. 
              Crafting digital experiences that defy gravity.
            </p>
            
            {/* Animated small neon dot equivalent */}
            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-4 h-4 rounded-full bg-[#cfff04] shadow-[0_0_20px_#cfff04] ml-2 mb-16"></motion.div>

            {/* Gap and Phone Mockup Area */}
            {/* The user requested a gap between the image and the screen playing the video */}
            <div className="mt-8 ml-4 lg:absolute lg:bottom-[-80px] lg:left-[500px]">
              <MouseParallax factor={-0.6}>
                 <PhoneMockup />
              </MouseParallax>
            </div>
            
            <div className="absolute bottom-[-100px] left-0 text-[10px] text-gray-600 tracking-[0.5em] writing-vertical transform -rotate-90">
              SCROLL // EXPLORE
            </div>
          </motion.div>

          {/* RIGHT: Image Structure & Parallax Pills */}
          <div className="relative w-full h-[600px] flex justify-center items-center lg:col-span-5">
            
            {/* Round animated neon blob background */}
            <div className="absolute inset-0 flex items-center justify-center">
               <motion.div 
                 animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }} 
                 className="w-[450px] h-[450px] lg:w-[550px] lg:h-[550px] bg-[#cfff04] rounded-full blur-[100px] opacity-15"
               />
               <motion.div 
                 animate={{ rotate: -360, scale: [1, 1.1, 1] }} 
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }} 
                 className="absolute w-[350px] h-[350px] bg-[#cfff04] rounded-[40%] blur-[80px] opacity-20"
               />
            </div>

            {/* The Portrait Image */}
            <MouseParallax factor={0.8} className="relative z-10 w-full max-w-[400px]">
               <div className="w-full aspect-[4/5] overflow-hidden rounded-2xl bg-[#111] relative shadow-[0_0_40px_rgba(207,255,4,0.1)] border border-[#ffffff10] group">
                 <img 
                   src={avatarImg} 
                   onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" }} 
                   alt="Adnan Ashraf" 
                   className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
               </div>
            </MouseParallax>

            {/* Floating SVGs / Tags (Parallax Effect) */}
            
            {/* Vibe Coder Chip */}
            <MouseParallax factor={2.5} className="absolute z-30 top-[10%] left-[-10%] md:left-[-20%]">
               <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full shadow-2xl">
                 <Zap size={18} className="text-[#cfff04]" fill="currentColor" />
                 <span className="text-white text-xs font-bold tracking-widest uppercase">Vibe Coder</span>
               </div>
            </MouseParallax>

            {/* Creative Mind Chip */}
            <MouseParallax factor={-1.5} className="absolute z-30 top-[40%] right-[-10%] md:right-[-25%]">
               <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full shadow-2xl">
                 <PenTool size={18} className="text-white" />
                 <span className="text-white text-xs font-bold tracking-widest uppercase">Creative Mind</span>
               </div>
            </MouseParallax>

            {/* Frontend Design Chip */}
            <MouseParallax factor={3} className="absolute z-30 bottom-[25%] left-[-5%] md:left-[-15%]">
               <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 px-5 py-3 rounded-full shadow-2xl">
                 <LayoutTemplate size={18} className="text-white" />
                 <span className="text-white text-xs font-bold tracking-widest uppercase">Frontend Design</span>
               </div>
            </MouseParallax>

            {/* AI Learner Chip */}
            <MouseParallax factor={-2} className="absolute z-30 bottom-[5%] right-[-5%] md:right-[-10%]">
               <div className="flex items-center gap-3 bg-[#cfff04] px-6 py-3.5 rounded-full shadow-[0_10px_30px_rgba(207,255,4,0.3)]">
                 <Cpu size={18} className="text-black" />
                 <span className="text-black text-xs font-extrabold tracking-widest uppercase">AI Learner</span>
               </div>
            </MouseParallax>

          </div>
        </div>
      </section>

      {/* REST OF THE WEBSITE (Cream/Yellow Brutalist kept below line break to not lose existing content) */}
      
      {/* ABOUT SECTION */}
      <section id="about" className="pt-40 pb-24 px-4 md:px-8 bg-brand-cream relative z-10 border-t-8 border-[#cfff04]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-brand-dark">About Me</h2>
            <div className="space-y-6 text-brand-dark/80 font-medium text-lg leading-relaxed">
              <p>
                Storytelling is sometimes developed to turn particular scenarios involving interactions in extreme imagine yet it has a wicked awareness total directed efforts.
              </p>
              <p>
                I'm eager to help navigate and shape them at the present front end development environment to create more impactful and memorable user experiences.
              </p>
            </div>
            
            <h3 className="text-2xl font-bold mt-12 mb-6 text-brand-green">Mindset & Growth</h3>
            <ul className="space-y-4 font-medium text-brand-dark/80 list-none pl-0">
              {['Comprehensive audit and technical structural integrity', 'Product and skills interviewing and profiling', 'Emphasizing the lengths with how to enhance and growth'].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-brand-yellow text-xl mt-1">✦</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <MouseParallax factor={0.5} className="relative flex justify-center items-center h-full">
             <div className="absolute -right-8 top-0 w-8 h-8 text-brand-yellow star-icon animate-bounce"></div>
             {/* Offset bg shape */}
             <div className="absolute inset-4 bg-brand-yellow rounded-xl shadow-solid transform rotate-3 transition-transform hover:rotate-6 duration-500"></div>
             {/* Image container */}
             <div className="relative z-10 w-full max-w-sm h-96 rounded-xl overflow-hidden border-4 border-brand-dark bg-white">
                <img src={avatarImg} onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" }} alt="Adnan Working" className="w-full h-full object-cover filter contrast-125" />
             </div>
             
             <motion.div 
               whileHover={{ scale: 1.05, rotate: -2 }}
               className="absolute top-16 -left-10 bg-brand-yellow text-brand-dark px-5 py-3 font-bold text-sm border-2 border-brand-dark shadow-solid rounded-lg hidden md:block"
             >
               Write code out<br/>for better experiences
             </motion.div>
             <motion.div 
               whileHover={{ scale: 1.05, rotate: 2 }}
               className="absolute bottom-12 -right-8 bg-brand-yellow text-brand-dark px-5 py-3 font-bold text-sm border-2 border-brand-dark shadow-solid rounded-lg hidden md:block"
             >
               ...Not a natural formula<br/>am a developer
             </motion.div>
          </MouseParallax>
        </div>
      </section>

      {/* TECHNICAL ARSENAL SECTION */}
      <section id="stack" className="py-32 px-4 md:px-8 bg-brand-yellow relative overflow-hidden">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-10 left-10 w-12 h-12 text-white star-icon"></motion.div>
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute bottom-16 right-20 w-16 h-16 text-white star-icon opacity-80"></motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif font-bold text-brand-dark mb-16"
          >
            Technical Arsenal
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "HTML5", icon: Layout },
              { name: "CSS3", icon: Palette },
              { name: "JavaScript ES6", icon: FileJson },
              { name: "Responsive Design", icon: MonitorPlay },
              { name: "DOM Manipulation", icon: Code2 },
              { name: "Event Handling", icon: Zap },
              { name: "LocalStorage", icon: Database },
              { name: "REST API Integration", icon: Code2 },
              { name: "Git", icon: Github },
              { name: "GitHub", icon: Github },
              { name: "VS Code", icon: MonitorPlay }
            ].map((tech, i) => (
              <motion.div 
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring" }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-2 bg-brand-green text-brand-cream px-6 py-3 rounded-full font-bold text-sm border-2 border-brand-green shadow-solid transition-colors hover:shadow-[2px_2px_0px_rgba(26,54,41,1)] cursor-default select-none"
              >
                <tech.icon size={18} className="text-brand-yellow" />
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="work" className="py-32 px-4 md:px-8 bg-brand-cream border-b-4 border-brand-dark">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-serif font-bold mb-16 text-brand-green"
          >
            Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "SaaS Dashboard Prototype",
                desc: "SaaS Dashboard prototypes with dashboard entering and component prototypes.",
                tags: ["Javascript", "CSS Grid", "LocalStorage"],
                ui: (
                  <div className="w-full h-full bg-slate-100 flex flex-col p-3 gap-2">
                     <div className="h-3 w-1/3 bg-brand-yellow rounded mb-2"></div>
                     <div className="flex-1 flex gap-3">
                       <div className="w-1/4 h-full bg-brand-green/20 rounded"></div>
                       <div className="w-3/4 h-full bg-brand-green/10 rounded flex flex-col gap-2 p-2">
                          <div className="w-full h-3 bg-white rounded"></div>
                          <div className="w-full h-3 bg-white rounded"></div>
                          <div className="w-1/2 h-3 bg-white rounded"></div>
                       </div>
                     </div>
                  </div>
                )
              },
              {
                title: "Prediction of Absenteeism",
                desc: "Absenteeism prediction model in environment, and developer tools.",
                tags: ["Python", "Scikit-Learn", "Pandas"],
                ui: (
                  <div className="w-full h-full bg-[#1E3050] relative overflow-hidden">
                     <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="absolute -left-4 -bottom-4 w-20 h-24 bg-brand-yellow rounded-full"></motion.div>
                     <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-4 right-8 w-16 h-20 bg-[#D85E4E] rounded-full transform rotate-45"></motion.div>
                  </div>
                )
              }
            ].map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-brand-cream border-[4px] border-brand-dark rounded-3xl p-8 shadow-solid flex flex-col sm:flex-row gap-8 relative overflow-hidden transition-all group lg:-rotate-1 lg:hover:rotate-0"
              >
                <div className="w-full sm:w-2/5 border-2 border-brand-dark rounded-xl h-40 flex-shrink-0 overflow-hidden relative flex items-center justify-center bg-white group-hover:scale-105 transition-transform duration-500">
                  {p.ui}
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold font-serif mb-4 leading-tight text-brand-dark">{p.title}</h3>
                    <p className="text-base text-brand-dark/70 font-medium mb-6 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => (
                      <span key={t} className="bg-brand-yellow text-brand-dark px-3 py-1.5 rounded-md border-2 border-brand-dark text-xs font-bold shadow-[2px_2px_0px_0px_rgba(35,35,35,1)] tracking-wide">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT SECTION */}
      <section id="contact" className="grid grid-cols-1 md:grid-cols-2 relative z-10 border-t-0 border-brand-dark">
        {/* Left Side: Professional Journey */}
        <div className="bg-brand-cream py-32 px-4 md:pl-24 md:pr-16">
          <motion.h2 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-5xl md:text-6xl font-serif font-bold mb-20 text-brand-green leading-tight"
          >
            Professional<br/>Journey
          </motion.h2>
          
          <div className="relative border-l-4 border-brand-dark/20 ml-4 pb-4">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
             className="mb-16 relative pl-10"
            >
              <div className="absolute -left-[19px] top-0 w-8 h-8 text-brand-yellow star-icon bg-brand-cream"></div>
              <span className="text-sm font-black text-brand-dark/60 uppercase tracking-widest">Present-2024</span>
              <h3 className="text-2xl font-bold mt-3 mb-2 text-brand-dark leading-tight">Customer IT Support Executive</h3>
              <p className="text-base text-brand-dark/80 font-medium leading-relaxed max-w-sm">Customer IT Support Executive in Automotid and pragmatic rendering across web problems and tracking channels.</p>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
             className="relative pl-10"
            >
              <div className="absolute -left-[19px] top-0 w-8 h-8 text-brand-yellow star-icon bg-brand-cream"></div>
              <span className="text-sm font-black text-brand-dark/60 uppercase tracking-widest">2022-2025</span>
              <h3 className="text-2xl font-bold mt-3 mb-2 text-brand-dark leading-tight">Bachelor of Computer Applications</h3>
              <p className="text-base text-brand-dark/80 font-medium">Sambalpur University</p>
            </motion.div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-brand-green py-32 px-4 md:pl-16 md:pr-24 text-brand-cream flex flex-col justify-between border-t-4 md:border-t-0 md:border-l-4 border-brand-dark">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-serif font-bold mb-6 text-brand-cream"
            >
              Let's talk about<br/>the next big thing.
            </motion.h2>
            <p className="mb-12 text-brand-cream/80 font-medium text-lg">Let's talk about the next big thing.</p>

            <motion.form 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 max-w-md"
            >
              <div className="flex gap-4">
                <input type="text" placeholder="First" className="w-1/2 bg-brand-green border-2 border-brand-cream/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#cfff04] placeholder-brand-cream/40 transition-colors font-medium" />
                <input type="text" placeholder="Last" className="w-1/2 bg-brand-green border-2 border-brand-cream/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#cfff04] placeholder-brand-cream/40 transition-colors font-medium" />
              </div>
              <input type="email" placeholder="Email" className="w-full bg-brand-green border-2 border-brand-cream/30 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#cfff04] placeholder-brand-cream/40 transition-colors font-medium" />
              <button className="w-full bg-brand-yellow text-brand-dark font-black py-5 rounded-2xl mt-4 hover:translate-y-1 transition-all shadow-solid-yellow hover:shadow-none text-lg">
                Send Message
              </button>
            </motion.form>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20"
          >
            <h3 className="text-3xl font-serif font-bold mb-8 text-brand-cream">Contact Info</h3>
            <ul className="space-y-5 font-medium opacity-90 text-lg">
              <li className="flex items-center gap-4 hover:text-brand-yellow cursor-pointer transition-colors w-fit">
                <span className="text-brand-yellow text-2xl">✦</span> adnanashraf7205@gmail.com
              </li>
              <li className="flex items-center gap-4 hover:text-brand-yellow cursor-pointer transition-colors w-fit">
                <span className="text-brand-yellow text-2xl">✦</span> +91 7847827969
              </li>
              <li className="flex items-center gap-4 hover:text-brand-yellow cursor-pointer transition-colors w-fit">
                <span className="text-brand-yellow text-2xl">✦</span> Sambalpur, Odisha, India
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
