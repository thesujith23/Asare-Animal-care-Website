import React, { useState, useEffect } from 'react';

// import image2 from '../assets/images/image2.jpg';
// import image3 from '../assets/images/image3.jpg';
// import image4 from '../assets/images/image4.jpg';
// import image5 from '../assets/images/image5.jpg';
// import image6 from '../assets/images/image6.jpg';
// import image7 from '../assets/images/image7.jpg';
// import image8 from '../assets/images/image8.jpg';
// import image9 from '../assets/images/image9.jpg';
// import image10 from '../assets/images/image10.jpg';
// import image11 from '../assets/images/image11.jpg';
// import image12 from '../assets/images/image12.jpg';
// import image13 from '../assets/images/image13.jpg';
// import image14 from '../assets/images/image14.jpg';
// import image15 from '../assets/images/image15.jpg';
// import image16 from '../assets/images/image16.jpg';

const Gallery = () => {
  // Create an array of image objects with local imported images
  const images = [
    { id: 1, src: 'https://images.unsplash.com/photo-1552519507-7ab5dff66a20', span: 'col-span-1' },
    { id: 2, src: 'https://images.unsplash.com/photo-1561948955-570b270e7c36', span: 'col-span-2 row-span-2' },
    { id: 3, src: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1', span: 'col-span-1' },
    { id: 4, src: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017', span: 'col-span-1' },
    { id: 5, src: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e', span: 'col-span-2 row-span-2' },
    { id: 6, src: 'https://images.unsplash.com/photo-1516320497487-e288fb19713f', span: 'col-span-1' },
    { id: 7, src: 'https://images.unsplash.com/photo-1453227588522-5a57f6e688d4', span: 'col-span-1' },
    { id: 8, src: 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131', span: 'col-span-2 row-span-2' },
    { id: 9, src: 'https://images.unsplash.com/photo-1537151608828-ea7b81c4e63', span: 'col-span-1' },
    { id: 10, src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee', span: 'col-span-1' },
    { id: 11, src: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f', span: 'col-span-2 row-span-2' },
    { id: 12, src: 'https://images.unsplash.com/photo-1560807707-bf0f481c40d6', span: 'col-span-1' },
    { id: 13, src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131', span: 'col-span-1' },
    { id: 14, src: 'https://images.unsplash.com/photo-1596854407846-e625576f552e', span: 'col-span-2 row-span-2' },
    { id: 15, src: 'https://images.unsplash.com/photo-1612178991541-b48cc8d92b4f', span: 'col-span-1' },
    { id: 16, src: 'https://images.unsplash.com/photo-1605001011156-f7252ba6a61b', span: 'col-span-1' }
  ];


  const [selectedImage, setSelectedImage] = useState(null);
  const [layout, setLayout] = useState(images);

  // Change layout every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLayout((prevLayout) =>
        prevLayout
          .map((image) => ({
            ...image,
            span: ['col-span-1', 'col-span-2 row-span-2'][Math.floor(Math.random() * 2)],
          }))
          .sort(() => Math.random() - 0.5)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
            Gallery
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600"></div>
          </h2>
        </div>

        {/* Image Collage */}
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 auto-rows-[100px]">
          {layout.map((image) => (
            <div
              key={image.id}
              className={`${image.span} relative overflow-hidden rounded-xl 
                          transform transition-all duration-500 hover:scale-105 cursor-pointer group`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={`Animal ${image.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-4">
                <span className="text-white text-sm font-medium transform translate-y-4 
                                 transition-transform duration-300 group-hover:translate-y-0">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Enlarged View */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 
                            transition-colors duration-300 text-xl"
              >
                ✕
              </button>
              <img
                src={selectedImage.src}
                alt={`Selected Animal ${selectedImage.id}`}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg animate-scale-in shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Gallery;