import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageSquare,
  Wrench,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', serviceType: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const serviceTypes = [
    "Emergency Plumbing",
    "Bathroom Installation",
    "Central Heating",
    "Kitchen Plumbing", 
    "Leak Detection",
    "Drain Cleaning",
    "General Maintenance",
    "Other"
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      primary: "+44 794 604 1983",
      secondary: "24/7 Emergency Line",
      action: "tel:+447946041983",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      primary: "info@sancoservices.co.uk",
      secondary: "Quick Response Guaranteed",
      action: "mailto:info@sancoservices.co.uk",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      primary: "Hilliard House, Prusom St",
      secondary: "London E1W 3NN, UK",
      action: "https://maps.google.com/?q=Hilliard+House+Prusom+St+London+E1W+3NN",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      primary: "24/7 Emergency Service",
      secondary: "Mon-Sun: Always Available",
      action: null,
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100 to-purple-100 rounded-full -translate-y-48 translate-x-48 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full translate-y-40 -translate-x-40 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to solve your plumbing problems? Contact us today for a free quote 
            or emergency service. We're here to help 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <div 
                  key={contact.title}
                  className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {contact.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-gray-800 text-lg mb-1 group-hover:text-blue-600 transition-colors">
                        {contact.title}
                      </h3>
                      <p className="text-gray-900 font-medium mb-1">
                        {contact.primary}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {contact.secondary}
                      </p>
                    </div>
                    {contact.action && (
                      <a
                        href={contact.action}
                        target={contact.action.startsWith('http') ? '_blank' : undefined}
                        rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-blue-600 hover:text-blue-700 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Send className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Notice */}
            <div className={`bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-6 text-white transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
              <div className="flex items-center space-x-3 mb-3">
                <AlertCircle className="h-6 w-6 text-red-200 animate-pulse" />
                <h3 className="text-xl font-bold">Emergency Service</h3>
              </div>
              <p className="text-red-100 mb-4">
                For urgent plumbing emergencies, call us immediately. We're available 24/7 
                with rapid response times across London.
              </p>
              <a
                href="tel:+447946041983"
                className="inline-flex items-center space-x-2 bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors"
              >
                <Phone className="h-5 w-5 animate-pulse" />
                <span>Call Emergency Line</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Send us a Message</h3>
                  <p className="text-gray-600">We'll get back to you within 2 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="inline h-4 w-4 mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="inline h-4 w-4 mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone and Service Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="inline h-4 w-4 mr-1" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Wrench className="inline h-4 w-4 mr-1" />
                      Service Type
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      {serviceTypes.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="inline h-4 w-4 mr-1" />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Describe your plumbing issue or service requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 transform hover:-translate-y-1 hover:shadow-lg'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5" />
                    <span>Message sent successfully! We'll contact you within 2 hours.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                    <span>Failed to send message. Please try again or call us directly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;