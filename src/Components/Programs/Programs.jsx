import React, { useState } from 'react';
const AnimalCarePrograms = () => {
  const [hoveredProgram, setHoveredProgram] = useState(null);

  const programData = [
    {
      id: 1,
      icon: "🐾",
      title: "Rescue & Rehabilitation",
      description: "Dedicated to saving and healing vulnerable animals, providing them with medical care, nutrition, and loving homes.",
      image: "src/imgs/img2.jpg",
      details: [
        "Emergency Medical Care",
        "Nutritional Support",
        "Rehabilitation Programs"
      ]
    },
    {
      id: 2,
      icon: "❤️",
      title: "Adoption Support",
      description: "Connecting compassionate families with animals in need, ensuring lifelong bonds and second chances.",
      image: "src/imgs/img1.jpg",
      details: [
        "Careful Matchmaking",
        "Home Check Process",
        "Post-Adoption Support"
      ]
    },
    {
      id: 3,
      icon: "🛡️",
      title: "Wildlife Conservation",
      description: "Protecting endangered species through habitat preservation, research, and community education initiatives.",
      image: "src/imgs/image.png",
      details: [
        "Habitat Protection",
        "Species Monitoring",
        "Research Initiatives"
      ]
    },
    {
      id: 4,
      icon: "🔔",
      title: "Community Outreach",
      description: "Educating communities about animal welfare, responsible pet ownership, and compassionate care.",
      image: "src/imgs/img2.jpg",
      details: [
        "Educational Workshops",
        "School Programs",
        "Public Awareness"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
            Our Animal Care Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Committed to compassion, protection, and healing for animals in need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programData.map((program) => (
            <div 
              key={program.id}
              onMouseEnter={() => setHoveredProgram(program.id)}
              onMouseLeave={() => setHoveredProgram(null)}
              className="relative w-full h-96 perspective-500 group"
            >
              <div 
                className={`
                  absolute inset-0 w-full h-full 
                  transition-transform duration-700 
                  transform-style-3d
                  ${hoveredProgram === program.id ? 'rotate-y-180' : ''}
                `}
              >
                {/* Front of Card (Image Side) */}
                <div className={`
                  absolute inset-0 backface-hidden rounded-2xl shadow-xl
                  ${hoveredProgram === program.id ? 'rotate-y-180' : ''}
                `}>
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl flex items-end p-4">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-4xl mr-2">{program.icon}</span>
                      <h3 className="text-white text-xl font-bold">
                        {program.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Back of Card (Details Side) */}
                <div className={`
                  absolute inset-0 bg-white rounded-2xl shadow-xl p-6
                  rotate-y-180 backface-hidden flex flex-col justify-center
                  ${hoveredProgram === program.id ? '' : 'hidden'}
                `}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {program.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {program.details.map((detail, index) => (
                      <li 
                        key={index} 
                        className="flex items-center text-gray-700"
                      >
                        <svg 
                          className="w-5 h-5 text-blue-500 mr-2" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for 3D transformations */}
      <style jsx>{`
        .perspective-500 {
          perspective: 500px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default AnimalCarePrograms;