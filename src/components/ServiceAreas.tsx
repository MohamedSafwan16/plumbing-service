import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Clock, Car, CheckCircle } from 'lucide-react';

const ServiceAreas = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const primaryAreas = [
    "Tower Hamlets", "City of London", "Hackney", "Newham", 
    "Southwark", "Greenwich", "Lewisham", "Islington"
  ];

  const allAreas = [
    "Aldgate", "Bethnal Green", "Bow", "Brick Lane", "Canary Wharf",
    "Crossharbour", "Docklands", "Isle of Dogs", "Limehouse", 
    "Mile End", "Poplar", "Shadwell", "Shoreditch", "Spitalfields",
    "St Katharine Docks", "Stepney", "Stratford", "Wapping",
    "Whitechapel", "London Bridge", "Borough", "Bermondsey"
  ];

  return (
    <section id="areas" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-200 rounded-full -translate-y-40 -translate-x-40 opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full translate-y-48 translate-x-48 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Service <span className="text-blue-600">Areas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proudly serving London with fast, reliable plumbing services. 
            Our local expertise means we know your area and can respond quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coverage Information */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Coverage</h3>
                  <p className="text-gray-600">Fast response across London</p>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Average 30-minute response time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Fully equipped mobile workshops</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span className="text-gray-700">Local knowledge and expertise</span>
                </div>
              </div>

              {/* Primary Areas */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Primary Service Areas</h4>
                <div className="grid grid-cols-2 gap-3">
                  {primaryAreas.map((area, index) => (
                    <div 
                      key={area}
                      className={`bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium border border-blue-100 transform transition-all duration-300 hover:bg-blue-100 hover:scale-105 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                      }`}
                      style={{ transitionDelay: `${600 + index * 50}ms` }}
                    >
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder and Additional Areas */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* Map Visualization */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-6">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 h-64 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20"></div>
                <div className="text-center relative z-10">
                  <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-800 mb-2">London Coverage</h4>
                  <p className="text-gray-600">East London & Central London</p>
                  <div className="mt-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                    <span className="text-sm font-semibold text-gray-700">Based in E1W</span>
                  </div>
                </div>
                {/* Animated pins */}
                <div className="absolute top-8 left-8 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                <div className="absolute top-12 right-12 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-16 w-1 h-1 bg-green-500 rounded-full animate-bounce"></div>
              </div>
            </div>

            {/* Additional Areas */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">We Also Serve</h4>
              <div className="flex flex-wrap gap-2">
                {allAreas.map((area, index) => (
                  <span 
                    key={area}
                    className={`bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                    }`}
                    style={{ transitionDelay: `${800 + index * 25}ms` }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Don't See Your Area Listed?
              </h3>
              <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
                We're expanding our coverage across London. Call us to check if we serve your location 
                - we might be closer than you think!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+447946041983"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-bold flex items-center justify-center space-x-2"
                >
                  <MapPin className="h-5 w-5" />
                  <span>Check Coverage: +44 794 604 1983</span>
                </a>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-400 transition-colors font-bold border-2 border-blue-400"
                >
                  Request Service Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;