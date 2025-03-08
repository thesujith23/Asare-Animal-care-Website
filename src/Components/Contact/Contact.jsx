
// import React, { useState } from "react";
// import { Mail, Phone, MapPin, Facebook, Instagram, Send } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log(formData);
//   };

//   const send=()=>{

//   }

//   return (
//     <div className="contact max-w-4xl mx-auto px-4 py-16">
//       {/* Header Section */}
//       <div className="text-center mb-12">
//         <h3 className="text-3xl font-bold mb-4 relative inline-block">
//           Contact Us
//           <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
//         </h3>
//         <p className="text-gray-600 mb-8">
//           If you have any questions or want to help, feel free to reach out to us!
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Contact Information */}
//         <div className="space-y-8">
//           <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300">
//             <div className="space-y-4">
//               {/* Email */}
//               <div className="flex items-center space-x-4 group">
//                 <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
//                   <Mail className="w-6 h-6 text-blue-600" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Email</p>
//                   <p className="text-gray-800">asareanimaltrustsuratkal@gmail.com</p>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-center space-x-4 group">
//                 <div className="p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors duration-300">
//                   <Phone className="w-6 h-6 text-green-600" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Phone</p>
//                   <p className="text-gray-800">+917975124932</p>
//                 </div>
//               </div>

//               {/* Address */}
//               <div className="flex items-center space-x-4 group">
//                 <div className="p-3 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors duration-300">
//                   <MapPin className="w-6 h-6 text-purple-600" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Address</p>
//                   <p className="text-gray-800">
//                     Asare Animal Trust(R)<br />
//                     1/194 Kulai Hosabettu Post<br />
//                     Near Fathima Ice Cream,<br />
//                     Kadambodi-575019
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="mt-8 flex justify-center space-x-4">
//               <a 
//                 href="https://facebook.com" 
//                 target="_blank" 
//                 rel="noreferrer"
//                 className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300"
//               >
//                 <Facebook className="w-6 h-6 text-blue-600" />
//               </a>
//               <a 
//                 href="https://instagram.com" 
//                 target="_blank" 
//                 rel="noreferrer"
//                 className="p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors duration-300"
//               >
//                 <Instagram className="w-6 h-6 text-pink-600" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 required
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
//                 onChange={(e) => setFormData({...formData, name: e.target.value})}
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 required
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
//                 onChange={(e) => setFormData({...formData, email: e.target.value})}
//               />
//             </div>
//             <div>
//               <textarea
//                 placeholder="Your Message"
//                 rows="4"
//                 required
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none resize-none"
//                 onChange={(e) => setFormData({...formData, message: e.target.value})}
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
//               onClick={send()}>
//               <span>Send Message</span>
//               <Send className="w-5 h-5" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        'YOUR_SERVICE_ID',     // Email service ID
        'YOUR_TEMPLATE_ID',    // Email template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        'YOUR_PUBLIC_KEY'      // EmailJS public key
      );

      // Optional: Add alert or console log for success
      alert('Message sent successfully!');

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      // Optional: Add error handling
      alert('Failed to send message. Please try again.');
      console.error('Email send error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="contact max-w-4xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4 relative inline-block">
          Contact Us
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </h3>
        <p className="text-gray-600 mb-8">
          If you have any questions or want to help, feel free to reach out to us!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300">
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-800">asareanimaltrustsuratkal@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-800">+917975124932</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-gray-800">
                    Asare Animal Trust(R)<br />
                    1/194 Kulai Hosabettu Post<br />
                    Near Fathima Ice Cream,<br />
                    Kadambodi-575019
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex justify-center space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300"
              >
                <Facebook className="w-6 h-6 text-blue-600" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors duration-300"
              >
                <Instagram className="w-6 h-6 text-pink-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;