import React from "react";

const Card = ({ title, description, image }) => {

  return (
    <div className="bg-white shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 max-w-xl flex">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Add Patient
        </button>
      </div>
    </div>
  );
};

export default Card;