import React, { useEffect, useState } from 'react';
import { Phone, MessageSquare, Shield, Clock, Star, Award } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://i.imgur.com/ovkrVJh.jpeg" 
          alt="Professional plumbing services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-blue-600/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        {/* Animated water drops */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute top-60 right-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-ping delay-300"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              London's
              <span className="block text-blue-30">Premier Plumbing</span>
              <span className="block bg-gradient-to-r from-white to-blue-50 bg-clip-text text-transparent">
                Experts
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              24/7 emergency services with professional solutions you can trust. 
              Licensed, insured, and delivering excellence across London.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
              <div className="flex items-center space-x-2 text-white/90">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <Clock className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium">24/7 Emergency</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">5-Star Reviews</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <Award className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-medium">Quality Guarantee</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToContact}
                className="group bg-white text-blue-50 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center space-x-3 min-w-[200px]"
              >
                <MessageSquare className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Get Free Quote</span>
              </button>
              <a
                href="tel:+447946041983"
                className="group bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center space-x-3 min-w-[200px]"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform animate-pulse" />
                <span>Emergency Call</span>
              </a>
            </div>
          </div>

          {/* Phone Number Display */}
          <div className={`transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="mt-8">
              <p className="text-blue-50 text-sm mb-2">Call us now:</p>
              <a 
                href="tel:+447946041983" 
                className="text-2xl md:text-3xl font-bold text-white hover:text-blue-50 transition-colors"
              >
                +44 794 604 1983
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-white/50 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;