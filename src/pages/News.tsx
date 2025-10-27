import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface NewsArticle {
  id: string;
  date: string;
  title: string;
  description: string;
  category: string;
  content: string;
}

const newsArticles: NewsArticle[] = [
  {
    id: 'ai-integration-workshop',
    date: '2025-10-15',
    title: 'New AI Integration in Education Workshop',
    description: 'Join us for an exciting workshop on integrating artificial intelligence tools into modern teaching methodologies. Learn practical applications and best practices.',
    category: 'Education',
    content: `
      <h2>Revolutionizing Education with AI</h2>
      <p>We are thrilled to announce our upcoming workshop on AI Integration in Education, scheduled for November 5-7, 2025. This comprehensive three-day event will bring together educators, technologists, and innovators to explore the transformative potential of artificial intelligence in modern teaching.</p>
      
      <h3>What You'll Learn</h3>
      <ul>
        <li><strong>AI-Powered Lesson Planning:</strong> Discover how to leverage AI tools to create more engaging and personalized lesson plans that adapt to individual student needs.</li>
        <li><strong>Automated Assessment Tools:</strong> Learn about the latest AI-driven assessment platforms that provide instant feedback and detailed analytics on student performance.</li>
        <li><strong>Natural Language Processing in Education:</strong> Explore how NLP can enhance language learning, provide writing assistance, and facilitate better communication between students and educators.</li>
        <li><strong>Ethics and Best Practices:</strong> Understand the ethical considerations of using AI in educational settings and learn best practices for responsible implementation.</li>
      </ul>
      
      <h3>Workshop Schedule</h3>
      <p><strong>Day 1:</strong> Introduction to AI in Education - Understanding the fundamentals and current landscape</p>
      <p><strong>Day 2:</strong> Hands-on Sessions - Practical implementation of AI tools in classroom settings</p>
      <p><strong>Day 3:</strong> Advanced Applications - Exploring cutting-edge AI technologies and future trends</p>
      
      <h3>Who Should Attend</h3>
      <p>This workshop is ideal for:</p>
      <ul>
        <li>K-12 and higher education teachers</li>
        <li>School administrators and educational technology coordinators</li>
        <li>Curriculum designers and instructional coaches</li>
        <li>EdTech professionals and developers</li>
      </ul>
      
      <h3>Registration Information</h3>
      <p>Early bird registration is now open with limited seats available. Register before October 25th to receive a 20% discount. The workshop includes all materials, lunch, and refreshments.</p>
      
      <p>For more information and to register, please contact us through our website or call our education department.</p>
    `
  },
  {
    id: 'career-development-summit',
    date: '2025-10-10',
    title: 'Career Development Summit 2025',
    description: 'Our annual career development summit brings together industry leaders and professionals to discuss the latest trends in leadership and entrepreneurship.',
    category: 'Career',
    content: `
      <h2>Shaping Tomorrow's Leaders Today</h2>
      <p>The Career Development Summit 2025 is set to be our most ambitious event yet, bringing together over 500 professionals, entrepreneurs, and industry leaders from across Europe. Taking place on December 10-12, 2025, this summit will focus on the evolving landscape of career development in an increasingly digital and interconnected world.</p>
      
      <h3>Featured Topics</h3>
      <ul>
        <li><strong>Leadership in the Digital Age:</strong> How modern leaders are adapting their management styles to remote and hybrid work environments.</li>
        <li><strong>Entrepreneurship and Innovation:</strong> Success stories and practical insights from startup founders and business innovators.</li>
        <li><strong>Personal Branding:</strong> Building and maintaining a professional presence in the digital world.</li>
        <li><strong>Networking Strategies:</strong> Effective techniques for building meaningful professional relationships that last.</li>
        <li><strong>Work-Life Integration:</strong> Strategies for achieving sustainable success without burnout.</li>
      </ul>
      
      <h3>Keynote Speakers</h3>
      <p>We're honored to feature renowned speakers including:</p>
      <ul>
        <li>Dr. Maria Kowalska - CEO of Tech Innovations Poland</li>
        <li>Jan Nowak - Best-selling author of "Leadership Reimagined"</li>
        <li>Prof. Anna Wiśniewska - Director of European Business School</li>
      </ul>
      
      <h3>Interactive Workshops</h3>
      <p>The summit includes over 20 hands-on workshops covering topics such as:</p>
      <ul>
        <li>Effective communication and public speaking</li>
        <li>Project management essentials</li>
        <li>Negotiation skills for career advancement</li>
        <li>Building and leading high-performance teams</li>
      </ul>
      
      <h3>Networking Opportunities</h3>
      <p>Dedicated networking sessions, a career fair with 50+ exhibitors, and evening social events will provide ample opportunities to connect with peers, mentors, and potential employers.</p>
      
      <h3>Registration Details</h3>
      <p>Three-day passes are available with special group discounts for organizations sending multiple attendees. Virtual attendance options are also available for those unable to join in person.</p>
    `
  },
  {
    id: 'nutrition-certification',
    date: '2025-10-05',
    title: 'Nutrition for Athletes Certification Program',
    description: 'New certification program launching next month. Designed for fitness professionals and nutritionists looking to specialize in sports nutrition.',
    category: 'Nutrition',
    content: `
      <h2>Elevate Your Nutrition Expertise</h2>
      <p>ALCEDO is proud to announce the launch of our comprehensive Nutrition for Athletes Certification Program, beginning January 15, 2026. This intensive program is specifically designed for fitness professionals, nutritionists, and health coaches who want to specialize in sports nutrition and help athletes achieve peak performance.</p>
      
      <h3>Program Overview</h3>
      <p>This 12-week certification program combines theoretical knowledge with practical application, covering all aspects of sports nutrition from basic principles to advanced performance optimization strategies.</p>
      
      <h3>Curriculum Highlights</h3>
      <ul>
        <li><strong>Macronutrient Optimization:</strong> Understanding how to balance proteins, carbohydrates, and fats for different sports and training phases.</li>
        <li><strong>Micronutrient Management:</strong> The role of vitamins, minerals, and supplements in athletic performance and recovery.</li>
        <li><strong>Hydration Strategies:</strong> Proper fluid and electrolyte balance for optimal performance in various conditions.</li>
        <li><strong>Pre and Post-Workout Nutrition:</strong> Timing and composition of meals to maximize training benefits and recovery.</li>
        <li><strong>Body Composition:</strong> Safe and effective approaches to weight management for athletes.</li>
        <li><strong>Special Populations:</strong> Nutritional considerations for youth athletes, endurance athletes, and strength athletes.</li>
      </ul>
      
      <h3>Learning Format</h3>
      <p>The program offers flexible learning options:</p>
      <ul>
        <li>Weekly live online lectures with Q&A sessions</li>
        <li>Self-paced study modules with video content</li>
        <li>Monthly in-person workshops for hands-on practice</li>
        <li>Case study analysis and peer collaboration</li>
        <li>One-on-one mentoring sessions with experienced sports nutritionists</li>
      </ul>
      
      <h3>Certification Requirements</h3>
      <p>To earn the ALCEDO Sports Nutrition Specialist certification, participants must:</p>
      <ul>
        <li>Complete all course modules and assignments</li>
        <li>Pass the comprehensive final examination</li>
        <li>Submit a detailed case study of working with an athlete</li>
        <li>Demonstrate practical skills in nutrition assessment and planning</li>
      </ul>
      
      <h3>Career Opportunities</h3>
      <p>Graduates of this program will be equipped to work with:</p>
      <ul>
        <li>Professional and amateur athletes</li>
        <li>Sports teams and athletic organizations</li>
        <li>Fitness centers and training facilities</li>
        <li>Health and wellness clinics</li>
      </ul>
      
      <h3>Prerequisites and Enrollment</h3>
      <p>Applicants should have a background in nutrition, fitness, or a related health field. A bachelor's degree is preferred but not required. Enrollment is limited to 30 participants per cohort to ensure personalized attention.</p>
      
      <p>Early enrollment discount available until November 30, 2025. Payment plans are available.</p>
    `
  }
];

const News = () => {
  const { id } = useParams<{ id?: string }>();

  // If no ID is provided, show all news articles
  if (!id) {
    return (
      <div className="min-h-screen py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Latest News & Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed about our latest programs, events, and educational insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <Tag className="h-4 w-4 text-primary" />
                    <CardDescription className="text-sm font-medium text-primary">
                      {article.category}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {article.description}
                  </p>
                  <Link
                    to={`/news/${article.id}`}
                    className="inline-flex items-center text-primary font-medium hover:underline group"
                  >
                    Read Full Article
                    <ArrowLeft className="ml-1 h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Find the specific article
  const article = newsArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/news"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  // Display the full article
  return (
    <div className="min-h-screen py-20 bg-background">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/news"
          className="inline-flex items-center text-primary font-medium hover:underline mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All News
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <span className="text-primary font-medium">{article.category}</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {article.title}
          </h1>
          
          <p className="text-xl text-muted-foreground">
            {article.description}
          </p>
        </div>

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            to="/contact"
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
          >
            Get More Information
          </Link>
        </div>
      </article>
    </div>
  );
};

export default News;
