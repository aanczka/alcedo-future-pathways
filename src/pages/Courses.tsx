
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BookOpen, TrendingUp, Apple, Brain, ArrowLeft, Clock, Users, Award } from 'lucide-react';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const categories = [
    {
      id: 'education',
      title: 'Education',
      icon: BookOpen,
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      description: 'Advanced teaching methodologies and modern educational approaches',
    },
    {
      id: 'career-development',
      title: 'Career Development',
      icon: TrendingUp,
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      description: 'Leadership skills, communication, and professional growth',
    },
    {
      id: 'nutrition',
      title: 'Nutrition',
      icon: Apple,
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
      description: 'Healthy lifestyle choices and specialized nutrition programs',
    },
    {
      id: 'psychology',
      title: 'Psychology',
      icon: Brain,
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
      description: 'Mental health, personal development, and psychological wellness',
    },
  ];

  const courseData = {
    education: [
      {
        title: 'Artificial Intelligence (AI): Basics of AI Technologies and Their Application in Education',
        content: [
          'Fundamentals of AI: Concepts, definitions, and key terms.',
          'AI Applications in Education: Examples of adaptive learning tools and intelligent tutoring systems.',
          'Data-Driven Decisions: How AI can analyze data to support teaching strategies.',
          'Ethical Considerations: Responsible use of AI in educational settings.',
          'Hands-on Activities: Exploring AI tools and platforms for classroom use.'
        ],
        outcomes: [
          'Participants will understand AI\'s role in education and its benefits for personalized learning.',
          'Participants will learn to integrate basic AI tools into their teaching practices.'
        ]
      },
      {
        title: 'E-Learning and Distance Education: Effective Use of Digital Platforms for Remote Learning',
        content: [
          'Basics of E-Learning: Understanding digital education tools and platforms.',
          'Online Course Design: Structuring engaging and interactive remote lessons.',
          'Assessments in E-Learning: Evaluating student progress through digital tools.',
          'Digital Collaboration: Tools for fostering interaction and communication in virtual classrooms.',
          'Practical Demonstrations: Implementing e-learning strategies in real-world scenarios.'
        ],
        outcomes: [
          'Participants will be able to design and deliver effective remote learning courses.',
          'Teachers will gain confidence in using digital platforms to enhance student engagement.'
        ]
      },
      {
        title: 'Gamification: Making Learning More Engaging with Game-Based Techniques',
        content: [
          'Introduction to Gamification: Key principles and benefits of game-based learning.',
          'Designing Gamified Lessons: Incorporating badges, points, and challenges in the curriculum.',
          'Tools and Platforms: Exploring software to support gamified learning.',
          'Measuring Impact: Assessing the effectiveness of gamified approaches.',
          'Practical Exercises: Creating gamified lesson plans.'
        ],
        outcomes: [
          'Teachers will learn how to motivate students through interactive and engaging activities.',
          'Participants will develop practical skills to incorporate gamification into their classrooms.'
        ]
      },
      {
        title: 'Inclusive Education: Ensuring Equal Opportunities for All Learners',
        content: [
          'Introduction to Inclusion: Understanding diversity in the classroom.',
          'Teaching Strategies: Adapting lessons for students with varied abilities.',
          'Supporting Students: Identifying and addressing barriers to learning.',
          'Building Inclusive Classrooms: Tools and practices for equity in education.',
          'Collaboration: Working with families and specialists for student success.'
        ],
        outcomes: [
          'Participants will learn strategies to create inclusive and supportive learning environments.',
          'Participants will develop skills to address diverse learner needs effectively.'
        ]
      },
      {
        title: 'STEM Education: Programs Focusing on Science, Technology, Engineering, and Mathematics',
        content: [
          'Fundamentals of STEM Education: Importance and relevance.',
          'Interdisciplinary Learning: Combining science, technology, engineering, and mathematics.',
          'Project-Based Learning: Designing hands-on STEM activities.',
          'Integrating STEM Tools: Using apps, robotics, and experiments in teaching.',
          'Inspiring Creativity: Strategies to encourage innovation and critical thinking.'
        ],
        outcomes: [
          'Teachers will gain practical skills to implement STEM activities in their curriculum.',
          'Participants will understand how to foster innovation and analytical thinking among students.'
        ]
      },
      {
        title: 'Integrating Technology into Classrooms: Using Technology to Enhance Learning Environments',
        content: [
          'Technology in Education: Trends and best practices.',
          'Tools for Digital Learning: Exploring platforms like Google Classroom and Microsoft Teams.',
          'Interactive Learning: Using smartboards, AR/VR, and other advanced tools.',
          'Cybersecurity: Ensuring safe and responsible use of technology in classrooms.',
          'Case Studies: Successful technology integration examples.'
        ],
        outcomes: [
          'Participants will be able to effectively use technology to improve learning outcomes.',
          'Participants will learn strategies to create dynamic and engaging digital classrooms.'
        ]
      },
      {
        title: 'Robotic Coding: Teaching Skills in Robotics and Coding',
        content: [
          'Basics of Robotics: Introduction to hardware and programming concepts.',
          'Coding for Beginners: Block-based coding (Scratch) and text-based coding (Python).',
          'Robotics Kits: Hands-on exploration of tools like LEGO Mindstorms or Arduino.',
          'Integrating Robotics in Education: Lesson plan examples and project ideas.',
          'Competitions and Challenges: Preparing students for robotics contests.'
        ],
        outcomes: [
          'Teachers will understand the basics of robotics and coding.',
          'Participants will develop lesson plans to introduce robotics to students.'
        ]
      },
      {
        title: 'Flipped Classroom: Making Lessons More Effective with Flipped Learning Techniques',
        content: [
          'Introduction to the Flipped Classroom: Concepts and benefits.',
          'Content Creation: Developing videos, readings, and resources for pre-class activities.',
          'Active Learning: Strategies for maximizing in-class time.',
          'Technology for Flipping: Tools for video creation and resource sharing.',
          'Case Studies: Success stories of flipped classrooms.'
        ],
        outcomes: [
          'Participants will understand the flipped learning model and its benefits.',
          'Participants will create lesson plans to apply flipped classroom techniques.'
        ]
      },
      {
        title: 'Diversity Management in Schools: Creating Inclusive Learning Environments',
        content: [
          'Understanding Diversity: Cultural, linguistic, and ability-based differences.',
          'Addressing Bias: Strategies to challenge stereotypes and foster respect.',
          'Conflict Resolution: Techniques for resolving issues in diverse classrooms.',
          'Promoting Equity: Tools for creating fair learning opportunities.',
          'Building Community: Activities to strengthen classroom relationships.'
        ],
        outcomes: [
          'Participants will develop skills to manage diversity effectively in their classrooms.',
          'Participants will promote inclusivity and respect in their schools.'
        ]
      },
      {
        title: 'Individualized Education Plans (IEP): Developing Personalized Plans for Students with Special Needs',
        content: [
          'Basics of IEPs: Understanding legal frameworks and principles.',
          'Assessment and Goal Setting: Identifying student strengths and needs.',
          'Designing IEPs: Creating clear, measurable, and achievable objectives.',
          'Collaboration: Working with families and specialists to implement IEPs.',
          'Monitoring Progress: Tools for tracking and adjusting plans.'
        ],
        outcomes: [
          'Teachers will develop practical skills to create and implement IEPs.',
          'Participants will learn to support the unique needs of students with special requirements.'
        ]
      }
    ],
    'career-development': [
      {
        title: 'Leadership and Team Management: Developing Leadership and Teamwork Skills',
        content: [
          'Leadership Styles: Understanding different approaches to leadership and identifying your style.',
          'Building Team Cohesion: Strategies to foster collaboration and trust within teams.',
          'Conflict Resolution: Techniques for managing disputes and creating win-win solutions.',
          'Motivation and Empowerment: How to inspire and empower team members to achieve goals.',
          'Case Studies: Analyzing real-world examples of successful team management.'
        ],
        outcomes: [
          'Participants will learn to lead effectively, manage diverse teams, and resolve conflicts.',
          'They will gain practical tools to foster collaboration and improve team performance.'
        ]
      },
      {
        title: 'Effective Communication and Presentation Skills: Techniques for Public Speaking and Workplace Communication',
        content: [
          'Basics of Communication: Verbal, non-verbal, and written communication strategies.',
          'Public Speaking Skills: Overcoming stage fright and delivering engaging presentations.',
          'Storytelling Techniques: Crafting compelling narratives to captivate audiences.',
          'Workplace Communication: Effective listening, negotiation, and assertiveness techniques.',
          'Interactive Workshops: Practicing presentation skills and receiving peer feedback.'
        ],
        outcomes: [
          'Participants will enhance their ability to communicate clearly and effectively in professional settings.',
          'They will build confidence in public speaking and workplace interactions.'
        ]
      },
      {
        title: 'Project Management and Strategic Planning: Managing Project Cycles and Creating Strategic Plans',
        content: [
          'Project Lifecycle: Planning, execution, monitoring, and closure phases.',
          'SMART Goals: Setting clear and measurable objectives for projects.',
          'Resource Management: Allocating time, budget, and personnel efficiently.',
          'Risk Management: Identifying potential risks and creating mitigation strategies.',
          'Strategic Planning: Crafting long-term plans to align with organizational goals.'
        ],
        outcomes: [
          'Participants will gain practical knowledge of project management tools and techniques.',
          'They will be able to design and execute strategic plans effectively in their roles.'
        ]
      },
      {
        title: 'Customer Relations and Career Strategies: Building Strong Customer Relationships and Planning Career Goals',
        content: [
          'Customer Service Excellence: Principles of building and maintaining strong customer relationships.',
          'Effective Communication: Adapting communication styles to meet customer needs.',
          'Career Development Planning: Setting personal career goals and creating actionable plans.',
          'Personal Branding: Building a professional identity and networking effectively.',
          'Workshop: Creating a personalized career roadmap and customer service strategy.'
        ],
        outcomes: [
          'Participants will learn to enhance customer relationships and achieve career growth.',
          'They will gain insights into career planning and strategies to build a strong professional network.'
        ]
      },
      {
        title: 'Entrepreneurship Training: Developing Business Ideas, Creating Business Plans, and Building Entrepreneurial Skills',
        content: [
          'Introduction to Entrepreneurship: Characteristics of successful entrepreneurs.',
          'Generating Business Ideas: Identifying market gaps and brainstorming innovative solutions.',
          'Business Plan Development: Creating effective and realistic business plans.',
          'Funding and Resources: Understanding financial options and managing budgets.',
          'Marketing and Branding: Promoting your business through innovative strategies.',
          'Pitching Skills: How to present your business ideas to investors and stakeholders.'
        ],
        outcomes: [
          'Participants will gain the knowledge and tools to start and manage their own businesses.',
          'They will learn to create comprehensive business plans and effectively pitch their ideas.'
        ]
      },
      {
        title: 'Soft Skills Development: Building Essential Interpersonal and Professional Skills',
        content: [
          'Emotional Intelligence: Understanding and managing emotions for better interpersonal relationships.',
          'Time Management: Techniques to prioritize tasks and improve productivity.',
          'Adaptability and Problem-Solving: Strategies to navigate challenges and embrace change.',
          'Teamwork and Collaboration: Fostering a positive and effective team environment.',
          'Conflict Resolution: Handling disagreements constructively in professional settings.',
          'Decision-Making Skills: Approaches to make informed and confident decisions.',
          'Building Confidence: Enhancing self-awareness and professional presence.'
        ],
        outcomes: [
          'Participants will strengthen their interpersonal and workplace skills for better collaboration and communication.',
          'They will gain practical tools to improve productivity, adaptability, and emotional resilience in their professional lives.'
        ]
      }
    ],
    nutrition: [
      {
        title: 'Healthy Nutrition and Diet Plans: Promoting Healthy Lifestyle Choices',
        content: [
          'Fundamentals of Nutrition: Understanding macronutrients and micronutrients.',
          'Balanced Diets: Principles of meal planning for general health.',
          'Nutrition Myths: Debunking common misconceptions about healthy eating.',
          'Lifestyle Changes: Strategies to maintain long-term healthy eating habits.',
          'Workshop: Creating personalized diet plans.'
        ],
        outcomes: [
          'Participants will gain a strong foundation in nutrition science and practical skills to plan balanced diets.',
          'They will be able to promote healthy eating habits in their communities or workplaces.'
        ]
      },
      {
        title: 'Sports Nutrition and Performance: Diets to Enhance Physical Performance',
        content: [
          'Energy Systems: Understanding how the body uses energy during exercise.',
          'Macronutrient Timing: Planning meals around training schedules.',
          'Hydration and Electrolytes: Importance of fluids in performance and recovery.',
          'Supplements: Overview of commonly used supplements for athletes.',
          'Practical Exercises: Designing performance-focused nutrition plans for different sports.'
        ],
        outcomes: [
          'Participants will learn how to optimize nutrition to enhance athletic performance.',
          'They will be equipped to advise athletes or active individuals on fueling and recovery strategies.'
        ]
      },
      {
        title: 'Nutrition for Chronic Diseases: Diet Plans for Diabetes, Obesity, and Other Lifestyle-Related Conditions',
        content: [
          'Introduction to Chronic Diseases: Understanding the role of nutrition in disease management.',
          'Special Diets: Low-glycemic index diets, DASH diets, and other therapeutic approaches.',
          'Meal Planning: Creating practical, disease-specific diet plans.',
          'Monitoring and Adherence: Strategies to encourage sustainable dietary changes.',
          'Case Studies: Real-life examples of successful nutrition interventions.'
        ],
        outcomes: [
          'Participants will gain the skills to create tailored dietary plans for managing chronic diseases.',
          'They will understand the critical role of nutrition in disease prevention and treatment.'
        ]
      },
      {
        title: 'Sustainable Nutrition: Building a Healthy and Eco-Friendly Diet',
        content: [
          'Principles of Sustainable Nutrition: What makes a diet sustainable for individuals and the planet?',
          'Plant-Based Eating: Benefits of incorporating more plant-based foods into diets.',
          'Local and Seasonal Foods: Reducing environmental impact through local and seasonal choices.',
          'Food Waste Reduction: Strategies to minimize food waste at home and in institutions.',
          'Eco-Friendly Meal Planning: Designing meals that are nutritious and environmentally conscious.',
          'The Role of Food Systems: Understanding how food production, transportation, and packaging affect sustainability.',
          'Workshops and Practical Activities: Creating sustainable meal plans and trying eco-friendly recipes.'
        ],
        outcomes: [
          'Participants will understand the core concepts of sustainable nutrition and its impact on health and the environment.',
          'They will be equipped to create and promote eco-friendly diets in their communities or professional settings.',
          'Participants will gain hands-on experience in preparing sustainable meals and implementing waste reduction strategies.'
        ]
      }
    ],
    psychology: [
      {
        title: 'Mental Health and Stress Management',
        content: [
          'Stress Fundamentals: Understanding types and sources of stress',
          'Coping Mechanisms: Healthy vs. unhealthy stress management techniques',
          'Mindfulness and Meditation: Practical relaxation techniques',
          'Work-Life Balance: Strategies for maintaining mental wellness',
          'Anxiety Management: Tools and techniques for anxiety reduction',
          'Depression Awareness: Recognition and management strategies',
          'Crisis Intervention: Basic principles and techniques'
        ],
        outcomes: [
          'Participants will develop effective stress management techniques',
          'They will learn to identify and address mental health challenges',
          'Participants will gain practical tools for maintaining emotional balance'
        ]
      },
      {
        title: 'Personal Development and Self-Awareness',
        content: [
          'Self-Discovery: Understanding personality types and traits',
          'Emotional Intelligence: Developing emotional awareness and regulation',
          'Goal Setting: Creating and achieving personal objectives',
          'Time Management: Organizing life priorities effectively',
          'Personal Boundaries: Setting and maintaining healthy boundaries',
          'Growth Mindset: Developing resilience and adaptability',
          'Values Clarification: Identifying core personal values'
        ],
        outcomes: [
          'Participants will gain deeper self-understanding',
          'They will develop practical skills for personal growth',
          'Participants will learn to set and achieve meaningful goals'
        ]
      },
      {
        title: 'Family and Child Psychology',
        content: [
          'Child Development: Understanding developmental stages',
          'Parenting Styles: Impact on child behavior and development',
          'Family Dynamics: Understanding family systems and relationships',
          'Communication Skills: Effective parent-child communication',
          'Behavioral Management: Positive discipline techniques',
          'Special Needs: Understanding and supporting children with special needs',
          'Attachment Theory: Building secure relationships'
        ],
        outcomes: [
          'Participants will understand child development principles',
          'They will develop effective parenting strategies',
          'Participants will learn to foster healthy family relationships'
        ]
      },
      {
        title: 'Psychological Resilience and Trauma Management',
        content: [
          'Trauma Understanding: Types and impacts of trauma',
          'Resilience Building: Developing psychological strength',
          'Post-Traumatic Growth: Finding meaning after adversity',
          'Crisis Management: Handling acute psychological situations',
          'Support Systems: Building and maintaining support networks',
          'Recovery Techniques: Evidence-based trauma recovery methods',
          'Self-Care Strategies: Maintaining personal wellbeing'
        ],
        outcomes: [
          'Participants will develop skills for managing trauma',
          'They will learn to build psychological resilience',
          'Participants will understand trauma recovery principles'
        ]
      }
    ]
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedCourse(null);
    setSearchParams({ category: categoryId });
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedCourse(null);
    setSearchParams({});
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
  };

  if (selectedCourse) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={handleBackToCourses}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Courses
          </button>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                {selectedCourse.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-blue-100">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Self-paced</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Expert-led</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  <span>Certificate</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Content</h2>
                <ul className="space-y-3">
                  {selectedCourse.content.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Outcomes</h2>
                <ul className="space-y-3">
                  {selectedCourse.outcomes.map((outcome: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedCategory) {
    const categoryInfo = categories.find(cat => cat.id === selectedCategory);
    const courses = courseData[selectedCategory as keyof typeof courseData] || [];

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={handleBackToCategories}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-8 font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Categories
          </button>

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {categoryInfo?.title} Courses
            </h1>
            <p className="text-xl text-gray-600">
              {categoryInfo?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedCourse(course)}
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {course.content.slice(0, 2).map((item: string, idx: number) => (
                      <span key={idx} className="block mb-1">• {item}</span>
                    ))}
                    {course.content.length > 2 && (
                      <span className="text-blue-600 font-medium">
                        +{course.content.length - 2} more topics...
                      </span>
                    )}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      <span>Expert-led</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Course Categories
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Choose from our four specialized areas of expertise to enhance your skills and knowledge
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
                >
                  <div className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 ${category.color} text-white rounded-full mb-6`}>
                      <IconComponent className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {category.description}
                    </p>
                    <button
                      className={`inline-flex items-center px-6 py-3 ${category.color} ${category.hoverColor} text-white rounded-lg font-medium transition-colors duration-200 group`}
                    >
                      Explore Courses
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
