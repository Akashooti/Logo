import React from 'react';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Our Website</h1>
          <p className="text-xl mb-6">Your gateway to an amazing experience</p>
          <a href="/Wheater" className="bg-yellow-500 animate-pulse text-gray-800 py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">Wheater check</a>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center ">Home</h2>
          <p className="text-lg mb-8 text-center">Welcome to the home page! Explore the features and services we offer.</p>

          {/* Features Section */}
          <section id="features" className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-center">Our Features</h3>
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
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="bg-gray-200 py-12">
            <h3 className="text-3xl font-bold mb-6 text-center">What Our Clients Say</h3>
            <div className="container mx-auto px-6">
              <div className="flex flex-wrap justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-4 mb-6">
                  <p className="text-lg mb-4">“Great experience! The team was professional and the results exceeded our expectations.”</p>
                  <p className="font-semibold">John Doe</p>
                  <p>CEO, Company A</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-4 mb-6">
                  <p className="text-lg mb-4">“Fantastic service and amazing quality. Highly recommend to anyone looking for top-notch work.”</p>
                  <p className="font-semibold">Jane Smith</p>
                  <p>Marketing Director, Company B</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-4 mb-6">
                  <p className="text-lg mb-4">“The team delivered on time and their attention to detail was remarkable. Will definitely use again.”</p>
                  <p className="font-semibold">Michael Johnson</p>
                  <p>Product Manager, Company C</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section id="cta" className="bg-blue-600 text-white py-12">
            <div className="container mx-auto px-6 text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg mb-6">Join us today and start enjoying the benefits of our services.</p>
              <a href="/contact" className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">Contact Us</a>
            </div>
          </section>

          {/* Featured Blog Section */}
          <section id="blog" className="py-12">
            <h3 className="text-3xl font-bold mb-6 text-center">From Our Blog</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">Blog Post 1</h4>
                <p>Summary of Blog Post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">Blog Post 2</h4>
                <p>Summary of Blog Post 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-4">Blog Post 3</h4>
                <p>Summary of Blog Post 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="text-blue-500 hover:underline">Read More</a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Company</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
