import React, { useState } from 'react';
import { Heart, PawPrint, DollarSign } from 'lucide-react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const DonationComponent = () => {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState(null);

  const donationTiers = [
    { amount: 25, impact: 'Feeds a shelter dog for a week' },
    { amount: 50, impact: 'Provides medical care for a rescued animal' },
    { amount: 100, impact: 'Supports emergency veterinary treatment' },
    { amount: 250, impact: 'Funds a complete animal rescue operation' }
  ];

  const handleDonationSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  return (
    <>
      {/* <DonationBlogNavbar/> */}
      <section className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-16 px-4 flex items-center justify-center animate-fade-in">
        <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2">
          {/* Left Side - Donation Impact */}
          <div className="bg-gradient-to-br from-green-500 to-blue-600 p-12 text-white flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <PawPrint className="w-12 h-12 text-white animate-bounce" />
                <h2 className="text-4xl font-extrabold">Make a Difference</h2>
              </div>
              <p className="text-xl leading-relaxed">
                Your donation helps us rescue, rehabilitate, and rehome animals in need. 
                Every contribution brings hope and healing.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-yellow-300" />
                  <span>100% of funds go directly to animal care</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-yellow-300" />
                  <span>Transparent reporting and impact tracking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Donation Form */}
          <div className="p-12 space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 text-center">
              Your Donation Matters
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {donationTiers.map((tier) => (
                <button
                  key={tier.amount}
                  onClick={() => handleDonationSelect(tier.amount)}
                  className={`
                    p-4 rounded-xl border-2 transform transition-all duration-300
                    ${selectedAmount === tier.amount 
                      ? 'border-green-500 bg-green-50 scale-105' 
                      : 'border-gray-200 hover:border-green-300 hover:bg-green-50'}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <DollarSign className="w-6 h-6 text-green-600" />
                    <span className="font-bold text-xl">₹{tier.amount}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">{tier.impact}</p>
                </button>
              ))}
            </div>

            <div className="relative">
              <input 
                type="number" 
                placeholder="   Custom Amount" 
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-green-500 transition-all"
              />
              <span className="absolute left-3 top-3 text-gray-400">$</span>
            </div>

            <button 
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white 
                         py-4 rounded-xl hover:opacity-90 transition-all 
                         flex items-center justify-center space-x-3 
                         transform hover:scale-105 duration-300"
            >
              <Heart className="w-6 h-6" />
              <span className="font-bold text-lg">Donate Now</span>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DonationComponent;