// import React from "react";
// import "./Footer.css"; 

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-section">
//           <h3>About Asare Animal Trust</h3>
//           <p>
//             Asare Animal Trust is dedicated to rescuing, rehabilitating, and
//             rehoming animals in need. We strive to create a safe environment for
//             all animals and educate the public about animal welfare.
//           </p>
//         </div>
//         <div className="footer-section">
//           <h3>Contact Us</h3>
//           <ul className="contactt">
//             <li>Email: asareanimaltrustsuratkal@gmail.com</li>
//             <li>Phone: +917975124932</li>
//             <li>Address: 1/194 Kulai Hosabettu Post Near Fathima Ice Cream,Kadambodi-575019</li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h3>Quick Links</h3>
//           <ul>
//             <li>
//               <a href="/about">About Us</a>
//             </li>
//             <li>
//               <a href="/adopt">Blog</a>
//             </li>
//             <li>
//               <a href="/donate">Donate</a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <div className="social-media">
//           <a href="https://www.facebook.com/profile.php?id=100064026545854&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
//             Facebook
//           </a>
//           <a href="https://www.instagram.com/asare_animal_trust_surathkal_/" target="_blank" rel="noopener noreferrer">
//             Instagram
//           </a>
//         </div>
//         <p>© {new Date().getFullYear()} Asare Animal Trust. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Facebook, Instagram, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white relative inline-block pb-2">
              About Asare Animal Trust
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500" />
            </h3>
            <p className="text-gray-400 leading-relaxed hover:text-gray-300 transition-colors duration-300">
              Asare Animal Trust is dedicated to rescuing, rehabilitating, and
              rehoming animals in need. We strive to create a safe environment for
              all animals and educate the public about animal welfare.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white relative inline-block pb-2">
              Contact Us
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500" />
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                <span className="hover:text-white transition-colors duration-300">
                  asareanimaltrustsuratkal@gmail.com
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                <span className="hover:text-white transition-colors duration-300">
                  +917975124932
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 mt-1" />
                <span className="hover:text-white transition-colors duration-300">
                  1/194 Kulai Hosabettu Post Near Fathima Ice Cream,Kadambodi-575019
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white relative inline-block pb-2">
              Quick Links
              <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500" />
            </h3>
            <ul className="space-y-2">
            <li>
              <Link
                to="about"
                spy={true}
                smooth ={true}
                className="hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
              >
              <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all duration-300" />
              <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
              >
                <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all duration-300" />
                <span>Blog</span>
              </Link>
            </li> 
              <li>
                <a 
                  href="/donate" 
                  className="hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full group-hover:w-2 transition-all duration-300" />
                  <span>Donate</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100064026545854&mibextid=LQQJ4d" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/asare_animal_trust_surathkal_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm flex items-center">
              © {new Date().getFullYear()} Asare Animal Trust. Made with 
              <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;