import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Clock, 
  DollarSign, 
  Award, 
  MapPin, 
  Settings,
  Users,
  CheckCircle
} from 'lucide-react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    experience: 0,
    jobs: 0,
    customers: 0,
    rating: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counter animations
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { experience: 15, jobs: 5000, customers: 2500, rating: 4.9 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        experience: Math.round(targets.experience * progress),
        jobs: Math.round(targets.jobs * progress),
        customers: Math.round(targets.customers * progress),
        rating: Math.round(targets.rating * progress * 10) / 10
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepTime);
  };

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Licensed & Insured",
      description: "Fully certified professionals with comprehensive insurance coverage for your peace of mind.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Emergency Response",
      description: "Round-the-clock availability for urgent plumbing issues with rapid response times.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Transparent Fixed Pricing",
      description: "No hidden costs or surprises. Clear, upfront pricing before any work begins.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Guarantee",
      description: "All our work is backed by our comprehensive quality guarantee for lasting results.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Local London Experts",
      description: "Deep knowledge of London properties and local regulations for efficient service.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Modern Equipment",
      description: "Latest tools and technology for efficient, precise, and minimal disruption repairs.",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const stats = [
    { 
      value: counters.experience, 
      suffix: "+", 
      label: "Years Experience",
      icon: <Award className="h-6 w-6" />
    },
    { 
      value: counters.jobs, 
      suffix: "+", 
      label: "Jobs Completed",
      icon: <CheckCircle className="h-6 w-6" />
    },
    { 
      value: counters.customers, 
      suffix: "+", 
      label: "Happy Customers",
      icon: <Users className="h-6 w-6" />
    },
    { 
      value: counters.rating, 
      suffix: "/5", 
      label: "Customer Rating",
      icon: <Shield className="h-6 w-6" />
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full -translate-x-36 opacity-30"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-green-100 to-blue-100 rounded-full translate-x-48 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Why Choose <span className="text-blue-600">Sanco Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 15 years of experience serving London, we've built our reputation on 
            reliability, quality, and exceptional customer service.
          </p>
        </div>

        {/* Statistics */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              {/* Feature Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Feature Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers across London who trust Sanco Services 
                for all their plumbing needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-bold text-lg transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Get Your Free Quote
                </button>
                <a
                  href="tel:+447946041983"
                  className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-400 transition-colors font-bold text-lg border-2 border-blue-400 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Call: +44 794 604 1983
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;