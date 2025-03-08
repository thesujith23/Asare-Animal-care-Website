import React from 'react';

const Thought = () => {
  const quotes = [
    {
      text: "The greatness of a nation and its moral progress can be judged by the way its animals are treated.",
      author: "Mahatma Gandhi",
      role: "Leader & Humanitarian",
      image: "src/imgs/animals/dog-rescue.jpg"
    },
    {
      text: "Until one has loved an animal, a part of one's soul remains unawakened.",
      author: "Anatole France",
      role: "Nobel Prize Winner",
      image: "src/imgs/animals/cat-care.jpg" 
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Words That Inspire
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-600"></div>
          </div>
        </div>

        {/* Quotes Container */}
        <div className="grid md:grid-cols-2 gap-12">
          {quotes.map((quote, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={quote.image} 
                  alt="Background" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/95 group-hover:via-black/70 transition-colors duration-300"></div>
              </div>

              {/* Quote Content */}
              <div className="relative p-8 md:p-12 h-full flex flex-col justify-end">
                {/* Decorative Quote Mark */}
                <div className="absolute top-4 left-4 text-6xl font-serif text-amber-400/20 select-none">
                  "
                </div>

                {/* Quote Text */}
                <blockquote className="mb-6">
                  <p className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-6 
                               transform group-hover:-translate-y-2 transition-transform duration-300">
                    {quote.text}
                  </p>
                  <footer className="flex items-center space-x-4 transform group-hover:-translate-y-2 transition-transform duration-300 delay-100">
                    <div className="w-12 h-0.5 bg-amber-400"></div>
                    <div>
                      <cite className="not-italic">
                        <span className="block text-lg font-semibold text-amber-400">
                          {quote.author}
                        </span>
                        <span className="text-sm text-gray-300">
                          {quote.role}
                        </span>
                      </cite>
                    </div>
                  </footer>
                </blockquote>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-600 
                              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in making a difference. Every small act of kindness towards animals creates ripples of positive change in our world.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white 
                           rounded-full font-medium transform hover:scale-105 hover:shadow-lg 
                           transition-all duration-300">
            Make a Difference Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Thought;