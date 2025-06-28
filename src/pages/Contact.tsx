
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Clock, Users } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Get in touch with ALCEDO Adult Education Centre for inquiries about our courses and programs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@alcedo-education.com</p>
                    <p className="text-gray-600">contact@alcedo-education.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+48 123 456 789</p>
                    <p className="text-sm text-gray-500">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      ALCEDO Adult Education Centre<br />
                      Educational District<br />
                      Warsaw, Poland
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media and Info */}
            <div className="space-y-8">
              {/* Social Media */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h2>
                
                <div className="flex space-x-4 mb-6">
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-500 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-400 text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Response Time: Within 24 hours</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Expert Support Team</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="/courses" className="block hover:text-blue-200 transition-colors duration-200">
                    → Browse Our Courses
                  </a>
                  <a href="/about" className="block hover:text-blue-200 transition-colors duration-200">
                    → Learn About Us
                  </a>
                  <a href="/projects" className="block hover:text-blue-200 transition-colors duration-200">
                    → View Our Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
