import React from 'react';

export default function Kartu() {
  return (
    <div className="flex justify-center py-2 mx-5">
      <div className="block p-6 rounded-lg shadow-lg bg-slate-100 hover:bg-slate-300 max-w-xxl ">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
        <p className="text-gray-700 text-base mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  );
}
