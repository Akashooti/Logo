import React from 'react';

function Features() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Features Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Our Features</h1>
          <p className="text-xl">Discover the powerful features that make our product stand out</p>
        </div>
      </section>

      {/* Features List */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              <h2 className="text-2xl font-semibold mb-2">Feature One</h2>
              <p className="text-gray-700">A brief description of this feature, explaining its benefits and how it enhances the user experience.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
              </svg>
              <h2 className="text-2xl font-semibold mb-2">Feature Two</h2>
              <p className="text-gray-700">A brief description of this feature, explaining its benefits and how it enhances the user experience.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16M4 12h16" />
              </svg>
              <h2 className="text-2xl font-semibold mb-2">Feature Three</h2>
              <p className="text-gray-700">A brief description of this feature, explaining its benefits and how it enhances the user experience.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m4-4H8" />
              </svg>
              <h2 className="text-2xl font-semibold mb-2">Feature Four</h2>
              <p className="text-gray-700">A brief description of this feature, explaining its benefits and how it enhances the user experience.</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l5 5L20 7" />
              </svg>
              <h2 className="text-2xl font-semibold mb-2">Feature Five</h2>
              <p className="text-gray-700">A brief description of this feature, explaining its benefits and how it enhances the user experience.</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12h9m-9-9v18M3 12h9" />
              </svg>
              <h2 className="text-2xl font-semibold mb-2">Feature Six</h2>
              <p className="text-gray-700">A brief description of this feature, explaining its benefits and how it enhances the user experience.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Features;
