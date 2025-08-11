import React from 'react';
import { 
  Wrench, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Shield,
  Clock,
  Award,
  CheckCircle
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Emergency Plumbing",
    "Bathroom Installation", 
    "Central Heating",
    "Kitchen Plumbing",
    "Leak Detection",
    "Drain Cleaning"
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Service Areas", href: "#areas" },
    { name: "Contact Us", href: "#contact" },
    { name: "Emergency Service", href: "tel:+447946041983" },
    { name: "Get Quote", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600/10 rounded-full translate-y-24 -translate-x-24"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sanco Services Ltd</h3>
                  <p className="text-sm text-gray-400">Premium Plumbing</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                London's premier plumbing experts providing professional, reliable, 
                and efficient plumbing services across East and Central London since 2009.
              </p>
              
              {/* Trust Indicators */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>Licensed & Fully Insured</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Clock className="h-4 w-4 text-yellow-400" />
                  <span>24/7 Emergency Service</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Award className="h-4 w-4 text-purple-400" />
                  <span>Quality Guarantee</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400" />
                  <span>15+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 transform transition-transform duration-200 block"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 transform transition-transform duration-200 block"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 transform transition-transform duration-200 block"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <a
                  href="tel:+447946041983"
                  className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Phone className="h-5 w-5 mt-0.5 text-green-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">+44 794 604 1983</p>
                    <p className="text-xs text-gray-500">24/7 Emergency Line</p>
                  </div>
                </a>
                
                <a
                  href="mailto:info@sancoservices.co.uk"
                  className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Mail className="h-5 w-5 mt-0.5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium">info@sancoservices.co.uk</p>
                    <p className="text-xs text-gray-500">Quick response guaranteed</p>
                  </div>
                </a>
                
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="h-5 w-5 mt-0.5 text-red-400" />
                  <div>
                    <p className="font-medium">Hilliard House, Prusom St</p>
                    <p className="text-sm">London E1W 3NN, UK</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6">
                <h5 className="font-medium mb-3">Follow Us</h5>
                <div className="flex space-x-3">
                  {[
                    { icon: <Facebook className="h-5 w-5" />, href: "#", name: "Facebook" },
                    { icon: <Twitter className="h-5 w-5" />, href: "#", name: "Twitter" },
                    { icon: <Instagram className="h-5 w-5" />, href: "#", name: "Instagram" },
                    { icon: <Linkedin className="h-5 w-5" />, href: "#", name: "LinkedIn" }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="bg-red-600 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-2">Emergency Plumbing Service</h3>
              <p className="text-red-100">Available 24/7 for urgent plumbing issues across London</p>
            </div>
            <a
              href="tel:+447946041983"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors flex items-center space-x-2 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Phone className="h-5 w-5 animate-pulse" />
              <span>Call Emergency Line</span>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Sanco Services Ltd. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Licensed Plumbing Contractors | Company Registration: 12345678
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;