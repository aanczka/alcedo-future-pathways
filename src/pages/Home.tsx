
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Apple, Brain, ArrowRight, Users, Award, Globe } from 'lucide-react';

const Home = () => {
  const categories = [
    {
      icon: BookOpen,
      title: 'Education',
      description: 'Advanced teaching methodologies, AI integration, and modern educational approaches',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'Career Development',
      description: 'Leadership skills, communication, project management, and entrepreneurship',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
    },
    {
      icon: Apple,
      title: 'Nutrition',
      description: 'Healthy lifestyle choices, sports nutrition, and sustainable eating habits',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
    },
    {
      icon: Brain,
      title: 'Psychology',
      description: 'Mental health, stress management, family psychology, and personal development',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
    },
  ];

  const features = [
    {
      icon: Users,
      title: 'Expert Trainers',
      description: 'Learn from qualified professionals with extensive experience in their fields',
    },
    {
      icon: Award,
      title: 'University Partnerships',
      description: 'Collaborations with leading universities in Poland and Europe',
    },
    {
      icon: Globe,
      title: 'Modern Programs',
      description: 'Up-to-date training programs that meet evolving educational needs',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Future
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We offer comprehensive programs in four key areas to support your personal and professional growth
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 group"
          >
            Explore Courses
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Course Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our four specialized areas of expertise designed to enhance your skills and knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${category.color} text-white rounded-full mb-6`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {category.description}
                    </p>
                    <Link
                      to={`/courses?category=${category.title.toLowerCase().replace(' ', '-')}`}
                      className={`inline-flex items-center px-6 py-2 ${category.color} ${category.hoverColor} text-white rounded-lg font-medium transition-colors duration-200 group`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ALCEDO?
            </h2>
            <p className="text-xl text-gray-600">
              Experience excellence in adult education with our proven approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of learners who have transformed their careers and lives through our expert-led programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/courses"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Browse Courses
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
