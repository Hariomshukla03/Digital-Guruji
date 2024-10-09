import React from 'react';

const Consil = () => {
  return (
    <div className="flex justify-between items-center p-4">
      {/* Iframe Section */}
      <div className="w-[50%] rounded-lg overflow-hidden shadow-lg border-4">
        <iframe 
          src="https://www.nanavatimaxhospital.org/doctor/psychiatrist-in-mumbai" 
          frameBorder="0" 
          width="100%" 
          height="600" 
          className="rounded-lg"
        />
      </div>

      {/* Button Section */}
      <div className="ml-8">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg">
          Book Consultation
        </button>
      </div>
    </div>
  );
};

export default Consil;
