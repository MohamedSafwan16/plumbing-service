import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  Wrench, 
  Thermometer, 
  ChefHat, 
  Search, 
  Trash2,
  Phone,
  Calendar,
  Shield,
  Clock
} from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Emergency Plumbing",
      description: "24/7 callouts, burst pipes, blocked drains, and urgent repairs with rapid response times.",
      features: ["24/7 Availability", "30-Min Response", "Fixed Pricing"],
      color: "from-red-500 to-red-600",
      image: "https://images.pexels.com/photos/8486932/pexels-photo-8486932.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Bathroom Installation",
      description: "Complete renovations, modern designs, and premium fixtures installed by certified professionals.",
      features: ["Full Renovation", "Modern Design", "Quality Fixtures"],
      color: "from-blue-500 to-blue-600",
      image: "https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Central Heating",
      description: "Boiler installation, repairs, maintenance, and system upgrades for optimal efficiency.",
      features: ["Boiler Service", "System Upgrades", "Maintenance"],
      color: "from-orange-500 to-orange-600",
      image: "https://images.pexels.com/photos/8486928/pexels-photo-8486928.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      icon: <ChefHat className="h-8 w-8" />,
      title: "Kitchen Plumbing",
      description: "Sink installation, dishwasher connections, and complete kitchen plumbing solutions.",
      features: ["Sink Installation", "Appliance Setup", "Pipe Routing"],
      color: "from-green-500 to-green-600",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Leak Detection",
      description: "Advanced equipment and techniques for precise leak location with minimal disruption.",
      features: ["Advanced Equipment", "Minimal Disruption", "Accurate Results"],
      color: "from-purple-500 to-purple-600",
      image: "https://images.pexels.com/photos/8486946/pexels-photo-8486946.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      icon: <Trash2 className="h-8 w-8" />,
      title: "Drain Cleaning",
      description: "CCTV surveys, high-pressure jetting, and comprehensive drain maintenance services.",
      features: ["CCTV Surveys", "Pressure Jetting", "Maintenance Plans"],
      color: "from-indigo-500 to-indigo-600",
      image: "https://images.pexels.com/photos/8486933/pexels-photo-8486933.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-48 translate-x-48 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full translate-y-32 -translate-x-32 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-blue-600">Professional Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From emergency repairs to complete installations, we provide comprehensive plumbing solutions 
            with the highest standards of quality and professionalism.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Service Image */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Service Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Service Actions */}
              <div className="flex space-x-2">
                <button
                  onClick={scrollToContact}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center space-x-1"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Service</span>
                </button>
                <a
                  href="tel:+447946041983"
                  className="bg-gray-100 text-gray-600 hover:bg-gray-200 py-2 px-3 rounded-lg transition-colors"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Need Emergency Service?
              </h3>
              <p className="text-blue-100 mb-6 text-lg">
                Our certified plumbers are available 24/7 for urgent repairs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+447946041983"
                  className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5 animate-pulse" />
                  <span>Call Now: +44 794 604 1983</span>
                </a>
                <div className="flex items-center justify-center space-x-4 text-blue-100">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">24/7 Service</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Shield className="h-4 w-4" />
                    <span className="text-sm">Fully Insured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;