import React from 'react';

function Pricing() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Pricing Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Logo Design Pricing</h1>
          <p className="text-xl">Choose the perfect logo design package for your brand</p>
        </div>
      </section>

      {/* Pricing Table */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-semibold mb-4">Basic Logo</h2>
              <p className="text-xl font-bold mb-4">$199</p>
              <ul className="mb-6">
                <li className="mb-2">1 Logo Concept</li>
                <li className="mb-2">2 Revisions</li>
                <li className="mb-2">High-Resolution Files</li>
              </ul>
              <button
                className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
              >
                Get Started
              </button>
            </div>
            {/* Standard Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border-2 border-yellow-500">
              <h2 className="text-2xl font-semibold mb-4">Standard Logo</h2>
              <p className="text-xl font-bold mb-4">$349</p>
              <ul className="mb-6">
                <li className="mb-2">3 Logo Concepts</li>
                <li className="mb-2">5 Revisions</li>
                <li className="mb-2">High-Resolution Files</li>
                <li className="mb-2">Vector Files</li>
              </ul>
              <button
                className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
              >
                Get Started
              </button>
            </div>
            {/* Premium Plan */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-semibold mb-4">Premium Logo</h2>
              <p className="text-xl font-bold mb-4">$499</p>
              <ul className="mb-6">
                <li className="mb-2">5 Logo Concepts</li>
                <li className="mb-2">Unlimited Revisions</li>
                <li className="mb-2">High-Resolution Files</li>
                <li className="mb-2">Vector Files</li>
                <li className="mb-2">Brand Style Guide</li>
              </ul>
              <button
                className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Logo Design Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Pricing;
