
import React from 'react';
import { Target, Users, BookOpen, Award, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  const objectives = [
    {
      icon: Award,
      title: 'High-Quality Training',
      description: 'To provide high-quality and up-to-date training that meets current industry standards',
    },
    {
      icon: TrendingUp,
      title: 'Personal & Professional Development',
      description: 'To contribute to our participants\' personal and professional development journey',
    },
    {
      icon: BookOpen,
      title: 'Practical Knowledge',
      description: 'To deliver practical and applicable knowledge that can be immediately implemented',
    },
  ];

  const values = [
    {
      icon: Users,
      title: 'Expert Collaboration',
      description: 'Working with leading universities in Poland and Europe to ensure academic excellence',
    },
    {
      icon: Globe,
      title: 'Modern Approach',
      description: 'Delivering training programs that respond to rapidly evolving educational needs',
    },
    {
      icon: Target,
      title: 'Diverse Offerings',
      description: 'Comprehensive courses in education, career development, nutrition, and psychology',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About ALCEDO Adult Education Centre
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              An institution dedicated to education and personal development through expert-led programs
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Mission
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                ALCEDO Adult Education Centre is an institution dedicated to education and personal development. 
                Through our collaborations with leading universities in both Poland and Europe, and with our expert trainers, 
                we provide high-quality courses in education, career development, nutrition, and psychology.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Our mission is to deliver modern training programs that respond to rapidly evolving educational needs 
                while meeting the requirements of individuals, groups, and institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Objectives
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are committed to achieving excellence through these core objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => {
              const IconComponent = objective.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {objective.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values & Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our commitment to educational excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:from-blue-100 hover:to-blue-150 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Commitment to Excellence
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                At ALCEDO Adult Education Centre, we believe in the power of continuous learning and development. 
                Our commitment to excellence is reflected in our diverse course offerings and expert-led programs.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                We strive to create an environment where learners can thrive, grow, and achieve their personal 
                and professional aspirations through high-quality education and practical skill development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
