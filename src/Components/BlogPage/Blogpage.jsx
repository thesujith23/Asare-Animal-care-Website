
import React, { useState, useEffect } from 'react';
import { Heart, DollarSign, ArrowRight, PawPrint } from 'lucide-react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Gallery from '../Gallery/Gallery';
import DonationBlogNavbar from '../navbarnew/DonationBlogNavbar';

// Custom Animations CSS
const animationStyles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }

  @keyframes glow {
    0% { box-shadow: 0 0 5px rgba(147, 51, 234, 0.5); }
    50% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.8); }
    100% { box-shadow: 0 0 5px rgba(147, 51, 234, 0.5); }
  }

  @keyframes slideInLeft {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  @keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }

  .slide-in-left {
    animation: slideInLeft 1s ease-out forwards;
  }

  .slide-in-right {
    animation: slideInRight 1s ease-out forwards;
  }

  .hover-rotate {
    transition: transform 0.5s ease;
  }

  .hover-rotate:hover {
    transform: rotate(5deg) scale(1.05);
  }
`;

const BlogPage = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check which sections are visible
      document.querySelectorAll('section[id]').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
          setVisibleSections(prev => new Set([...prev, section.id]));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <PawPrint className="w-16 h-16 text-purple-600 animate-bounce mx-auto mb-4" />
          <div className="text-2xl font-bold text-purple-600">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page min-h-screen bg-gray-50">
      <style>{animationStyles}</style>

      {/* Hero Section */}
      <section id="hero" className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center bg-cover bg-center">
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0002})`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img
            src="src/imgs/bg3.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        <div className="relative flex flex-col items-center justify-center h-full text-white px-4">
          <div className="animate-float mb-8">
            <PawPrint className="w-20 h-20 text-white opacity-80" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-center 
                       bg-clip-text text-transparent bg-gradient-to-r from-white via-red-200 to-white
                       animate-pulse">
            Making a Difference in Animal Lives
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-center max-w-2xl mb-8 opacity-1 animate-fade-in text--600">
            Join us in our mission to rescue, rehabilitate, and rehome animals in need. 
            Every life matters, every story counts!
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold 
                           hover:bg-purple-600 hover:text-white transition-all duration-300
                           transform hover:scale-110 animate-glow">
            Donate Now
          </button>
        </div>
      </section>
        <Gallery/>
      {/* Mission Section */}
      <section id="mission" className={`py-20 px-4 bg-white relative ${
        visibleSections.has('mission') ? 'slide-in-left' : 'opacity-0'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 relative">
            Our Mission
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                           w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600"></span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At the Animal Care Trust, we believe in providing a safe and nurturing 
            environment for abandoned and rescued animals. Our mission is to 
            rehabilitate and rehome animals in need while promoting animal welfare 
            through education and awareness.
          </p>
        </div>
      </section>
      {/* <section id="adoption" className={`py-20 px-4 bg-gray-50 ${
  visibleSections.has('adoption') ? 'slide-in-right' : 'opacity-0'
}`}>
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12 relative">
      ADOPTION CAMP
      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
        w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600"></span>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        'src/imgs/camp1.jpg',
        'src/imgs/camp2.jpg',
        'src/imgs/camp3.jpg',
        'src/imgs/camp4.jpg'
      ].map((imageSrc, index) => (
        <div
          key={index}
          className="group relative rounded-xl overflow-hidden shadow-lg hover-rotate"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <img
            src={imageSrc}
            alt={`Adoption Camp Image ${index + 1}`}
            className="w-full h-64 object-cover transition-transform duration-500 
              group-hover:scale-110"
              style={{ width: '100%',height: '300px' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 
            flex items-end p-4">
            <p className="text-white text-sm">View Details</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section> */}
<section className={`py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative ${
        visibleSections.has('mission') ? 'slide-in-right' : 'opacity-0'
      }`}>
  <div className="max-w-7xl mx-auto">
    {/* Header Section */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        Find Your Perfect Companion
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
      </div>
      <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto">
        Every pet deserves a loving home. Browse our available animals and find your new family member today.
      </p>
    </div>

    {/* Image Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {/* Image Card 1 */}
      <div className="group relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src="src/imgs/camp1.jpg"
            alt="Loving Homes Needed"
            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                       opacity-0 group-hover:opacity-100 transition-all duration-500
                       flex flex-col justify-end p-6">
          <h3 className="text-white text-2xl font-bold transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
            Loving Homes Needed
          </h3>
          <p className="text-gray-200 mt-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
            Meet our adorable puppies waiting for their forever families
          </p>
          <button className="mt-4 px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full 
                           transform translate-y-8 group-hover:translate-y-0 transition-transform duration-900
                           hover:bg-white hover:text-gray-900">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Card 2 */}
      <div className="group relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src="src/imgs/camp2.jpg"
            alt="Second Chances"
            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                       opacity-0 group-hover:opacity-100 transition-all duration-500
                       flex flex-col justify-end p-6">
          <h3 className="text-white text-2xl font-bold transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
            Second Chances
          </h3>
          <p className="text-gray-200 mt-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
            Every pet deserves a loving home and caring family
          </p>
          <button className="mt-4 px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full 
                           transform translate-y-8 group-hover:translate-y-0 transition-transform duration-900
                           hover:bg-white hover:text-gray-900">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Card 3 */}
      <div className="group relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src="src/imgs/camp3.jpg"
            alt="Special Companions"
            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                       opacity-0 group-hover:opacity-100 transition-all duration-500
                       flex flex-col justify-end p-6">
          <h3 className="text-white text-2xl font-bold transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
            Special Companions
          </h3>
          <p className="text-gray-200 mt-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
            Our rescued animals make perfect lifelong companions
          </p>
          <button className="mt-4 px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full 
                           transform translate-y-8 group-hover:translate-y-0 transition-transform duration-900
                           hover:bg-white hover:text-gray-900">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Card 4 */}
      <div className="group relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src="src/imgs/camp4.jpg"
            alt="Happy Tails"
            className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                       opacity-0 group-hover:opacity-100 transition-all duration-500
                       flex flex-col justify-end p-6">
          <h3 className="text-white text-2xl font-bold transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
            Happy Tails
          </h3>
          <p className="text-gray-200 mt-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
            Success stories of pets finding their forever homes
          </p>
          <button className="mt-4 px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full 
                           transform translate-y-8 group-hover:translate-y-0 transition-transform duration-900
                           hover:bg-white hover:text-gray-900">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Certificates Section */}
      {/* <section id="certificates" className={`py-20 px-4 bg-white ${
        visibleSections.has('certificates') ? 'slide-in-left' : 'opacity-0'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 relative">
            Our Certificates and Awards
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                           w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
        'src/imgs/certi1.jpg',
        'src/imgs/certi2.jpg',
        'src/imgs/certi3.jpg',
      ].map((imageSrc1, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl 
                         transition-all duration-300 transform hover:scale-105
                         hover:rotate-2"
              >
                <img
                  src={imageSrc1}
                  alt={`Certificate ${index}`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-center font-semibold bg-gradient-to-r from-purple-600 
                             to-blue-600 bg-clip-text text-transparent">
                  Certificate Title {index}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Recognition & Excellence
      </h2>
      <div className="relative mb-8">
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 
                        w-32 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></span>
      </div>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Our commitment to quality and service excellence has earned us prestigious recognitions
      </p>
    </div>

    {/* Certificates Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Certificate 1 */}
      <div className="group relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 
                       rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-500"></div>
        <div className="relative bg-white rounded-xl shadow-lg p-6 transition-all duration-500
                       transform hover:-translate-y-2 hover:shadow-2xl">
          <div className="overflow-hidden rounded-lg mb-6">
            <img
              src="src/imgs/certi1.jpg"
              alt="Excellence Award"
              className="w-full h-56 object-cover transform transition duration-700
                         group-hover:scale-110"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 
                         bg-clip-text text-transparent">
            Excellence in Service
          </h3>
          <p className="text-gray-600 mb-4">
            Recognized for outstanding commitment to quality and customer satisfaction
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Awarded 2024</span>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 
                             text-white rounded-lg transform transition hover:scale-105">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Certificate 2 */}
      <div className="group relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 
                       rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-500"></div>
        <div className="relative bg-white rounded-xl shadow-lg p-6 transition-all duration-500
                       transform hover:-translate-y-2 hover:shadow-2xl">
          <div className="overflow-hidden rounded-lg mb-6">
            <img
              src="src/imgs/certi2.jpg"
              alt="Innovation Award"
              className="w-full h-56 object-cover transform transition duration-700
                         group-hover:scale-110"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 
                         bg-clip-text text-transparent">
            Innovation Leadership
          </h3>
          <p className="text-gray-600 mb-4">
            Leading the industry with groundbreaking solutions and technologies
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Awarded 2024</span>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 
                             text-white rounded-lg transform transition hover:scale-105">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Certificate 3 */}
      <div className="group relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 
                       rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-500"></div>
        <div className="relative bg-white rounded-xl shadow-lg p-6 transition-all duration-500
                       transform hover:-translate-y-2 hover:shadow-2xl">
          <div className="overflow-hidden rounded-lg mb-6">
            <img
              src="src/imgs/certi3.jpg"
              alt="Global Recognition"
              className="w-full h-56 object-cover transform transition duration-700
                         group-hover:scale-110"
            />
          </div>
          <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 
                         bg-clip-text text-transparent">
            Global Excellence
          </h3>
          <p className="text-gray-600 mb-4">
            Internationally recognized for exceptional standards and achievements
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Awarded 2024</span>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 
                             text-white rounded-lg transform transition hover:scale-105">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Anti-Rabies Section */}
      {/* <section id="vaccination" className={`py-20 px-4 bg-gray-50 ${
        visibleSections.has('vaccination') ? 'slide-in-right' : 'opacity-0'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 relative">
            ANTI RABIES VACCINATION CAMP
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                           w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
        'src/imgs/antirab1.jpg',
        'src/imgs/antirab2.jpg',
        'src/imgs/antirab3.jpg',
      ].map((imageSrc3, index) => (
              <div 
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-lg 
                         transform transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img
                  src={imageSrc3}
                  alt={`Anti-Rabies Image ${index}`}
                  className="w-full h-64 object-cover transition-transform duration-500 
                           group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/70 
                               to-transparent opacity-0 group-hover:opacity-100 
                               transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white">Learn More</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section id="vaccination" className={`py-24 px-6 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden ${
  visibleSections.has('vaccination') ? 'slide-in-right' : 'opacity-0'
}`}>
  {/* Background Decoration */}
  <div className="absolute inset-0 bg-grid-pattern opacity-5" />
  <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse" />
  <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse" />
  
  <div className="max-w-6xl mx-auto relative">
    {/* Header Section */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
        <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Anti-Rabies Vaccination Camp
        </span>
        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        Protecting our furry friends through comprehensive vaccination programs
      </p>
    </div>

    {/* Image Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          src: 'src/imgs/antirab1.jpg',
          title: 'Professional Care',
          desc: 'Expert veterinarians providing vaccination services'
        },
        {
          src: 'src/imgs/antirab2.jpg',
          title: 'Community Outreach',
          desc: 'Making vaccinations accessible to all'
        },
        {
          src: 'src/imgs/antirab3.jpg',
          title: 'Safe Environment',
          desc: 'Following all safety protocols and guidelines'
        }
      ].map((item, index) => (
        <div
          key={index}
          className="group relative rounded-2xl overflow-hidden shadow-lg 
                   transform transition-all duration-500 hover:scale-105 hover:-translate-y-2
                   hover:shadow-2xl"
          style={{ 
            animationDelay: `${index * 200}ms`,
            opacity: 0,
            animation: 'fadeSlideUp 0.8s ease-out forwards',
            animationDelay: `${index * 150}ms`
          }}
        >
          {/* Image Container */}
          <div className="aspect-w-16 aspect-h-12 overflow-hidden">
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-700 
                       group-hover:scale-110"
            />
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 
                       to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500
                       flex flex-col justify-end p-6">
            <h3 className="text-white text-xl font-bold mb-2 transform translate-y-8 
                         group-hover:translate-y-0 transition-transform duration-500">
              {item.title}
            </h3>
            <p className="text-white/90 transform translate-y-8 
                       group-hover:translate-y-0 transition-transform duration-700">
              {item.desc}
            </p>
            <button className="mt-4 w-fit px-6 py-2 bg-white/20 backdrop-blur-sm text-white 
                           rounded-full transform translate-y-8 group-hover:translate-y-0 
                           transition-all duration-900 hover:bg-white hover:text-purple-900
                           flex items-center gap-2 group/btn">
              Learn More 
              <span className="transform group-hover/btn:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>

          {/* Card Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 
                       rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity
                       duration-500 blur" />
        </div>
      ))}
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center">
      <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r 
                      from-purple-600 to-blue-600 text-white rounded-full
                      transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <span> Schedule a Vaccination</span>
        <span className="transform group-hover:translate-x-1 transition-transform">
          →
        </span>
      </button>
    </div>
  </div>

  <style jsx>{`
    @keyframes fadeSlideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
</section>

      {/* Donation Section */}
      <section id="donate" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 
                       animate-gradient-x"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] 
                         from-white via-transparent to-transparent animate-pulse"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-white">Support Our Cause</h2>
          <p className="text-xl mb-8 text-white/90">
            Your contribution helps us continue our mission of rescuing and caring for animals.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg 
                           font-semibold group hover:bg-purple-700 hover:text-white 
                           transition-all duration-300 transform hover:scale-110 
                           animate-glow">
            <span className="flex items-center">
              <DollarSign className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
              Donate Now
              <ArrowRight className="w-6 h-6 ml-2 transform group-hover:translate-x-2 
                                   transition-transform" />
            </span>
          </button>
        </div>
      </section>

      {/* Articles Section */}
      {/* <section id="articles" className={`py-20 px-4 bg-white ${
        visibleSections.has('articles') ? 'slide-in-left' : 'opacity-0'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 relative">
            ARTICLES
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                           w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
        'src/imgs/article1.jpg',
        'src/imgs/article2.jpg',
      ].map((imageSrc2, index) => (
              <div 
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-lg 
                         transform transition-all duration-300 hover:scale-105"
              >
                <img
                  src={imageSrc2}
                  alt={`Article Image ${index}`}
                  className="w-full h-72 object-cover transition-transform duration-500 
                           group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 
                               to-transparent opacity-0 group-hover:opacity-100 
                               transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      Article Title {index}
                    </h3>
                    <p className="text-white/90">Click to read more...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    <section className={`py-24 px-6 bg-gradient-to-b from-white to-gray-50 relative ${
        visibleSections.has('mission') ? 'slide-in-right' : 'opacity-1'
      } `}>
      <div className="max-w-6xl mx-auto">
        {/* Animated Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-gray-800 mb-4 relative inline-block">
            ARTICLES
            <div className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 
                          transform origin-left animate-expand"></div>
          </h2>
          <p className="text-gray-600 text-lg mt-4">Discover our latest insights and stories</p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {[
            {
              title: "The Future of Technology",
              description: "Exploring emerging trends and innovations shaping our digital world",
              image: "src/imgs/article1.jpg"
            },
            {
              title: "Design Evolution",
              description: "Understanding the impact of modern design principles",
              image: "src/imgs/article2.jpg"
            }
          ].map((article, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-2xl 
                         transform transition-all duration-500 hover:scale-102 hover:shadow-3xl
                         opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image Container */}
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-96 object-cover transition-transform duration-700 
                           group-hover:scale-110 group-hover:rotate-1"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-all duration-500
                            flex flex-col justify-end p-8 transform translate-y-4 
                            group-hover:translate-y-0">
                <h3 className="text-white text-2xl font-bold mb-3 
                             transform -translate-y-4 opacity-0 transition-all duration-500 
                             group-hover:translate-y-0 group-hover:opacity-100">
                  {article.title}
                </h3>
                <p className="text-gray-200 transform -translate-y-4 opacity-0 transition-all duration-500 
                             group-hover:translate-y-0 group-hover:opacity-100 delay-100">
                  {article.description}
                </p>
                <button className="mt-4 px-6 py-2 bg-white/10 backdrop-blur-sm text-white 
                                 rounded-full border border-white/30 transition-all duration-300
                                 hover:bg-white hover:text-gray-900 transform -translate-y-4 
                                 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                                 delay-200">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes expand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-expand {
          animation: expand 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
      <Footer/>
    </div>
  );
};

export default BlogPage;