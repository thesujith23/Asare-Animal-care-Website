// import React, { useState } from "react";
// import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";

// const DonationBlogNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleNavigation = (path) => {
//     // Close mobile menu
//     setIsOpen(false);
    
//     // Navigate to the specified path
//     navigate(path);
//   };

//   return (
//     <nav className="fixed w-full top-0 left-0 z-50 bg-red-600 shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <RouterLink to="/">
//               <img 
//                 src="src/assets/logoc.png" 
//                 alt="Logo" 
//                 className="h-14 w-17 transform hover:scale-105 transition-transform duration-200"
//               />
//             </RouterLink>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-center space-x-4">
//               <div 
//                 onClick={() => handleNavigation('/')}
//                 className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
//               >
//                 Home
//               </div>
//               <RouterLink 
//                 to="/blog"
//                 className={`text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${
//                   location.pathname === '/blog' ? 'bg-red-700' : ''
//                 }`}
//               >
//                 Blog
//               </RouterLink>
//               <RouterLink 
//                 to="/donate"
//                 className={`text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${
//                   location.pathname === '/donate' ? 'bg-red-700' : ''
//                 }`}
//               >
//                 Donate
//               </RouterLink>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none"
//             >
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-red-600">
//           <div
//             onClick={() => handleNavigation('/')}
//             className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors"
//           >
//             Home
//           </div>
//           <RouterLink
//             to="/blog"
//             className={`text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors ${
//               location.pathname === '/blog' ? 'bg-red-700' : ''
//             }`}
//             onClick={() => setIsOpen(false)}
//           >
//             Blog
//           </RouterLink>
//           <RouterLink
//             to="/donate"
//             className={`block w-full text-left text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors ${
//               location.pathname === '/donate' ? 'bg-red-700' : ''
//             }`}
//             onClick={() => setIsOpen(false)}
//           >
//             Donate
//           </RouterLink>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default DonationBlogNavbar;
