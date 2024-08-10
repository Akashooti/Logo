import React from 'react';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Our Website</h1>
          <p className="text-xl mb-6">Your gateway to an amazing experience</p>
          <a href="#features" className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">Explore More</a>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">Home</h2>
          <p className="text-lg mb-8 text-center">Welcome to the home page! Explore the features and services we offer.</p>
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
              <p>Details about Feature 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
              <p>Details about Feature 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
              <p>Details about Feature 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
