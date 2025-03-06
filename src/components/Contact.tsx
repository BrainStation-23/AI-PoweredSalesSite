import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-[#0a0b0f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#12141c] p-6 rounded-xl border border-gray-800">
            <div className="flex items-center mb-4">
              <Mail className="text-purple-500 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-white">Email</h3>
            </div>
            <p className="text-gray-400">sales@brainstation-23.com</p>
          </div>
          <div className="bg-[#12141c] p-6 rounded-xl border border-gray-800">
            <div className="flex items-center mb-4">
              <MapPin className="text-purple-500 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-white">Address</h3>
            </div>
            <p className="text-gray-400">7426 Alban Station Blvd, Suite A101, Springfield,VA 22150</p>
          </div>
          <div className="bg-[#12141c] p-6 rounded-xl border border-gray-800">
            <div className="flex items-center mb-4">
              <Phone className="text-purple-500 mr-3" size={24} />
              <h3 className="text-xl font-semibold text-white">Phone</h3>
            </div>
            <p className="text-gray-400">+1 201 534 7200</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;