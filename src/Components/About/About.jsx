// import React from "react";
// import './About.css';

// const About = () => {
//     return (
//         <div className="about">
//             <h3>WHAT WE DO</h3>
//             <hr />
//             <p className="p1">
//                 Asare Animal Trust, founded in 2015 with official recognition in 2019 and subsequent registration in 2021, 
//                 stands as a beacon of hope for abandoned and stray animals in our community. 
//                 Our mission is rooted in compassion and dedication, aiming to rescue these vulnerable creatures 
//                 and provide them with the love and care they deserve.
//             </p>
//             <div className="para">
//                 <strong>Our Mission</strong>
//                 <p>
//                     To rescue, rehabilitate, and rehome stray and abandoned animals, ensuring they receive shelter, 
//                     love, and an opportunity for a fulfilling life.
//                 </p>
//             </div>
//             <div className="para">
//                 <strong>Commitment</strong>
//                 <p>
//                     Asare Animal Trust remains dedicated to making a tangible difference, embodying the belief 
//                     that every creature deserves a safe haven and a chance to thrive.
//                 </p>
//             </div>
//             <div className="para">
//                 <strong>Vision</strong>
//                 <p>
//                     To inspire a compassionate community where every animal is treated with dignity and care, 
//                     fostering a culture of animal welfare and advocacy.
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default About;


// const About = () => {
//   const content = [
//     {
//       title: "Our Mission",
//       text: "To rescue, rehabilitate, and rehome stray and abandoned animals, ensuring they receive shelter, love, and an opportunity for a fulfilling life."
//     },
//     {
//       title: "Commitment",
//       text: "Asare Animal Trust remains dedicated to making a tangible difference, embodying the belief that every creature deserves a safe haven and a chance to thrive."
//     },
//     {
//       title: "Vision",
//       text: "To inspire a compassionate community where every animal is treated with dignity and care, fostering a culture of animal welfare and advocacy."
//     }
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-16 overflow-hidden">
//       {/* Header Section */}
//       <div className="text-center mb-16">
//         <h3 className="text-3xl font-bold uppercase tracking-wider mb-4 transform hover:scale-105 transition-transform duration-300">
//           What We Do
//         </h3>
//         <div className="relative">
//           <hr className="w-1/2 mx-auto border-2 border-red-500" />
//           <div className="absolute -top-2 left-1/2 w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2 animate-pulse" />
//         </div>
//       </div>

//       {/* Main Text Section */}
//       <div className="mb-16 text-center">
//         <p className="text-lg font-semibold text-gray-800 max-w-4xl mx-auto px-4 md:px-10 animate-fade-in">
//           Asare Animal Trust, founded in 2015 with official recognition in 2019 and subsequent registration in 2021,
//           stands as a beacon of hope for abandoned and stray animals in our community.
//           Our mission is rooted in compassion and dedication, aiming to rescue these vulnerable creatures
//           and provide them with the love and care they deserve.
//         </p>
//       </div>

//       {/* Cards Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
//         {content.map((item, index) => (
//           <div
//             key={index}
//             className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
//             style={{
//               animation: `slideUp 0.6s ease-out forwards ${index * 0.2}s`
//             }}
//           >
//             {/* Decorative Elements */}
//             <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 transition duration-500 blur-xl" />
            
//             <div className="relative space-y-4">
//               <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
//                 {item.title}
//               </h4>
//               <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
//                 {item.text}
//               </p>
//             </div>

//             {/* Hover Indicator */}
//             <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-500 group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2" />
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fade-in {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         .animate-fade-in {
//           animation: fade-in 1s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };
import React from 'react';

const About = () => {
  const content = [
    {
      title: "Our Mission",
      text: "To rescue, rehabilitate, and rehome stray and abandoned animals, ensuring they receive shelter, love, and an opportunity for a fulfilling life."
    },
    {
      title: "Commitment",
      text: "Asare Animal Trust remains dedicated to making a tangible difference, embodying the belief that every creature deserves a safe haven and a chance to thrive."
    },
    {
      title: "Vision",
      text: "To inspire a compassionate community where every animal is treated with dignity and care, fostering a culture of animal welfare and advocacy."
    }
  ];

  return (
    <div className="about max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold uppercase tracking-wider mb-4 transform hover:scale-105 transition-transform duration-300">
          What We Do
        </h3>
        <div className="relative">
          <hr className="w-1/2 mx-auto border-2 border-red-500" />
          <div className="absolute -top-2 left-1/2 w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2 animate-pulse" />
        </div>
      </div>

      {/* Main Content Section with Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Text Content */}
        <div className="space-y-6 animate-slide-right">
          <p className="text-lg font-semibold text-gray-800 animate-fade-in leading-relaxed">
            Asare Animal Trust, founded in 2015 with official recognition in 2019 and subsequent registration in 2021,
            stands as a beacon of hope for abandoned and stray animals in our community.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our mission is rooted in compassion and dedication, aiming to rescue these vulnerable creatures
            and provide them with the love and care they deserve.
          </p>
          <div className="flex gap-4 mt-6">
            <div className="px-4 py-2 bg-red-100 rounded-lg">
              <span className="text-2xl font-bold text-red-600">500+</span>
              <p className="text-sm text-red-800">Animals Rescued</p>
            </div>
            <div className="px-4 py-2 bg-orange-100 rounded-lg">
              <span className="text-2xl font-bold text-orange-600">300+</span>
              <p className="text-sm text-orange-800">Happy Adoptions</p>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative group animate-slide-left">
          <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-300"></div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition duration-300">
            <img
              src="src/Components/imgs/bg1.jpg"
              alt="Animal Care"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-lg font-medium">Making a difference, one life at a time</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {content.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            style={{
              animation: `slideUp 0.6s ease-out forwards ${index * 0.2}s`
            }}
          >
            {/* Decorative Elements */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 transition duration-500 blur-xl" />
            
            <div className="relative space-y-4">
              <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                {item.text}
              </p>
            </div>

            {/* Hover Indicator */}
            <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-red-500 group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2" />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-right {
          animation: slide-right 1s ease-out forwards;
        }

        .animate-slide-left {
          animation: slide-left 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default About;