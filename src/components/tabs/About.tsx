import React from "react";

export default function About(){
  return (
    <section className="max-w-3xl bg-white p-6 rounded-xl shadow-sm">
      <h1 className="text-2xl font-bold mb-2">Easy AI Studio</h1>
      <p className="mb-4 text-gray-600">The ultimate AI-powered visual suite for modern creative professionals. Go from concept to final composite in seconds.</p>
      <div className="text-sm text-gray-500 mb-4">Created by you — localized prototype.</div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold">Image Generator</h4>
          <p className="text-sm text-gray-500">Generate images from prompts.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold">Product Studio</h4>
          <p className="text-sm text-gray-500">Upload product + reference for composites.</p>
        </div>
      </div>
    </section>
  );
}
