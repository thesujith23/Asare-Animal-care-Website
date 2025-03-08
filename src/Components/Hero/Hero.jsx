// // import React from "react";
// // import './Hero.css';
// // import arrow from '../../assets/arrow_btn.png';


// // const Hero = ({setHeroCount,heroData,heroCount}) => {
// //   return (
// //     <div className="hero1">
// //       <div className="hero-text">
// //         <h3>{heroData.text1}</h3>
// //         <p>{heroData.text2}</p>
// //       </div>
// //     <div className="hero-explore">
// //         {/* <p>Explore the features</p>
// //         <img src={arrow} alt=""/> */}
// //     </div>
// //     <div className="hero-dot-play">
// //         <ul className="hero-dots">
// //             <li onClick={()=> setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
// //             <li onClick={()=> setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
// //             <li onClick={()=> setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
// //         </ul>
// //     </div>
// //     </div>
// //   );
// // };

// // export default Hero;
// import React from "react";

// const Hero = ({ setHeroCount, heroData, heroCount }) => {
//   return (
//     <div className="relative min-h-screen w-full bg-gray-900 flex items-center justify-start px-8 lg:px-20">
//       {/* Hero Text Section */}
//       <div className="text-white max-w-2xl mt-20">
//         <h3 className="text-5xl font-bold mb-6">
//           {heroData?.text1 || "Welcome to Our Site"}
//         </h3>
//         <p className="text-xl">
//           {heroData?.text2 || "This is a sample description text"}
//         </p>
//       </div>

//       {/* Navigation Dots */}
//       <div className="absolute bottom-8 left-0 w-full">
//         <ul className="flex justify-center gap-6">
//           {[0, 1, 2].map((index) => (
//             <li
//               key={index}
//               onClick={() => setHeroCount(index)}
//               className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
//                 heroCount === index ? "bg-red-500" : "bg-white"
//               }`}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Hero;
// import React, { useState, useEffect } from 'react';
// import { PawPrint, ChevronLeft, ChevronRight } from 'lucide-react';

// const Hero = ({ setHeroCount, heroData, heroCount }) => {
//   const [scrollY, setScrollY] = useState(0);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Sample hero data - replace with your actual data
//   const heroContent = [
//     {
//       image: 'src/imgs/bg1.jpg',
//       text1: 'Welcome to Animal Care',
//       text2: 'Providing loving homes for every pet'
//     },
//     {
//       image: 'src/imgs/bg2.jpg',
//       text1: 'Make a Difference',
//       text2: 'Join us in helping animals in need'
//     },
//     {
//       image: 'src/imgs/bg3.jpg',
//       text1: 'Creating Happy Tales',
//       text2: 'Every adoption is a story of love'
//     }
//   ];

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % heroContent.length);
//       setHeroCount((prev) => (prev + 1) % heroContent.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, [setHeroCount]);

//   const handleDotClick = (index) => {
//     setCurrentImageIndex(index);
//     setHeroCount(index);
//   };

//   const handlePrevSlide = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + heroContent.length) % heroContent.length);
//     setHeroCount((prev) => (prev - 1 + heroContent.length) % heroContent.length);
//   };

//   const handleNextSlide = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % heroContent.length);
//     setHeroCount((prev) => (prev + 1) % heroContent.length);
//   };

//   return (
//     <section className="relative h-screen overflow-hidden">
//       {/* Background Images */}
//       {heroContent.map((content, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 
//             ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
//           style={{
//             transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0002})`,
//             transition: 'transform 0.1s ease-out'
//           }}
//         >
//           <img
//             src={content.image}
//             alt={`Hero ${index + 1}`}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
//         </div>
//       ))}

//       {/* Content */}
//       <div className="relative flex flex-col items-center justify-center h-full text-white px-4">
//         {/* Animated Paw Print */}
//         <div className="animate-bounce mb-8">
//           <PawPrint className="w-20 h-20 text-white opacity-80 " />
//         </div>

//         {/* Text Content with Animation */}
//         <div className="text-center max-w-4xl mx-auto">
//           {heroContent.map((content, index) => (
//             <div
//               key={index}
//               className={`absolute w-full transition-all duration-1000 transform
//                 ${index === currentImageIndex 
//                   ? 'opacity-100 translate-y-0' 
//                   : 'opacity-0 translate-y-8'}`}
//             >
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
//                 {content.text1}
//               </h1>
//               <p className="text-xl md:text-2xl opacity-90">
//                 {content.text2}
//               </p>
//             </div>
//           ))}
//         </div>
//         {/* Navigation Dots */}
//         <div className="absolute bottom-8 left-0 w-full">
//           <ul className="flex justify-center gap-4">
//             {heroContent.map((_, index) => (
//               <li
//                 key={index}
//                 onClick={() => handleDotClick(index)}
//                 className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 
//                   transform hover:scale-125
//                   ${index === currentImageIndex 
//                     ? 'bg-white scale-110' 
//                     : 'bg-white/50 hover:bg-white/75'}`}
//               />
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-20px); }
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;
import React, { useState, useEffect } from 'react';
import { PawPrint, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Hero slides with imported or web-accessible images
  const heroSlides = [
    {
      image: 'src/imgs/bg3.jpg', // Update with your actual image paths
      text1: 'Welcome to Animal Care',
      text2: 'Making a difference in animal lives'
    },
    {
      image: 'src/imgs/bg2.jpg',
      text1: 'Join Our Mission',
      text2: 'Every life deserves a second chance'
    },
    {
      image: 'src/imgs/bg2.jpg',
      text1: 'Support Our Cause',
      text2: 'Together we can make a difference'
    }
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroSlides.length
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  // Manual slide change handler
  const handleSlideChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images with Transition */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: currentImageIndex === index ? 1 : 0,
            transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0002})`,
            transition: 'transform 0.1s ease-out, opacity 1s ease-in-out'
          }}
        >
          <img
            src={slide.image}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover"
            // Add loading and error handling
            loading="lazy"
            onError={(e) => {
              e.target.src = '/placeholder-image.jpg'; // Fallback image
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
      ))}

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white px-4">
        {/* Animated Paw Print */}
        <div className="animate-bounce mb-8">
          <PawPrint className="w-20 h-20 text-white opacity-80" />
        </div>

        {/* Hero Text with Animation */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 transform transition-all duration-700 text-white"
            style={{
              opacity: 1,
              transform: `translateY(${scrollY * -0.2}px)`
            }}
          >
            {heroSlides[currentImageIndex].text1}
          </h1>
          <p 
            className="text-xl md:text-2xl mb-12 transform transition-all duration-700 text-white"
            style={{
              opacity: 0.9,
              transform: `translateY(${scrollY * -0.1}px)`
            }}
          >
            {heroSlides[currentImageIndex].text2}
          </p>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-12 left-0 w-full">
          <ul className="flex justify-center items-center gap-4">
            {heroSlides.map((_, index) => (
              <li
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`group cursor-pointer transition-all duration-300 
                           ${index === currentImageIndex ? 'scale-125' : 'hover:scale-110'}`}
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 
                             ${currentImageIndex === index 
                               ? 'bg-white scale-125 shadow-lg shadow-white/50' 
                               : 'bg-white/50 hover:bg-white/80'}`}
                />
                <div
                  className={`w-full h-0.5 mt-1 transform scale-x-0 transition-transform duration-300
                             ${currentImageIndex === index ? ' scale-x-100' : 'group-hover:scale-x-75'}`}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <p className="text-sm text-white/70 mb-2">Scroll to explore</p>
          <ArrowRight className="w-6 h-6 text-white/70 animate-bounce rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default Hero;