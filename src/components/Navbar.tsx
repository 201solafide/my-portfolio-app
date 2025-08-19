// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { useTheme } from "next-themes";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const { theme, setTheme } = useTheme();

//   return (
//     <motion.nav
//       initial={{ y: -40, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur border-b border-border z-50"
//     >
//       <div className="container flex justify-between items-center py-4">
//         {/* Logo */}
//         <Link
//           href="/"
//           className="text-lg font-extrabold text-foreground hover:text-blue-500 transition-colors"
//         >
//           Solafide Zamili<span className="text-blue-500">.</span>
//         </Link>

//         {/* Desktop menu */}
//         <div className="hidden md:flex gap-6 text-sm font-medium">
//           <Link
//             href="#about"
//             className="text-foreground/90 hover:text-blue-500 transition-colors"
//           >
//             About
//           </Link>
//           <Link
//             href="#projects"
//             className="text-foreground/90 hover:text-blue-500 transition-colors"
//           >
//             Projects
//           </Link>
//           <Link
//             href="#contact"
//             className="text-foreground/90 hover:text-blue-500 transition-colors"
//           >
//             Contact
//           </Link>
//           <button
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//             className="ml-2 text-foreground/90 hover:text-blue-500 transition-colors"
//           >
//             {theme === "dark" ? "☀️" : "🌙"}
//           </button>
//         </div>

//         {/* Mobile button */}
//         <button
//           className="md:hidden text-foreground text-xl"
//           onClick={() => setOpen(!open)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {open && (
//         <motion.div
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//           className="md:hidden flex flex-col px-6 pb-6 pt-2 space-y-3 text-sm font-medium bg-background/95 border-t border-border"
//         >
//           <Link
//             href="#about"
//             className="text-foreground/90 hover:text-blue-500 transition-colors"
//             onClick={() => setOpen(false)}
//           >
//             About
//           </Link>
//           <Link
//             href="#projects"
//             className="text-foreground/90 hover:text-blue-500 transition-colors"
//             onClick={() => setOpen(false)}
//           >
//             Projects
//           </Link>
//           <Link
//             href="#contact"
//             className="text-foreground/90 hover:text-blue-500 transition-colors"
//             onClick={() => setOpen(false)}
//           >
//             Contact
//           </Link>
//           {/* Dark mode toggle in mobile */}
//           <button
//             onClick={() => {
//               setTheme(theme === "dark" ? "light" : "dark");
//               setOpen(false);
//             }}
//             className="text-foreground/90 hover:text-blue-500 transition-colors text-left"
//           >
//             {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
//           </button>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// }

"use client";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur border-b border-border z-50">
      <div className="container flex justify-between items-center py-4">
        <a href="#hero" className="font-bold text-lg">MyPortfolio</a>
        <div className="hidden md:flex gap-6 items-center">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-3 py-1 border rounded-lg text-sm"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden">☰</button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t p-4 space-y-3">
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
              setOpen(false);
            }}
            className="px-3 py-1 border rounded-lg text-sm"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      )}
    </nav>
  );
}
