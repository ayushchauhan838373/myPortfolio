import React from 'react';
import ImageSlider from './ImageSlider';

const Certificates: React.FC = () => {
  // Your actual certificates - now 9 total
  const certificates = [
    {
      id: 1,
      title: 'Data Science & Analytics',
      issuer: 'HP LIFE Foundation',
      date: 'March 31, 2025',
      image: '/certificates/Screenshot 2025-06-28 014154.png',
      description: 'Comprehensive course covering data science and analytics practices, methodologies, and tools. Gained knowledge about essential skills needed to pursue a career in the field.',
    },
    {
      id: 2,
      title: 'AI for Beginners',
      issuer: 'HP LIFE Foundation',
      date: 'March 30, 2025',
      image: '/certificates/Screenshot 2025-06-28 014217.png',
      description: 'Gained basic understanding of artificial intelligence (AI) impact on technological landscape. Learned about key AI concepts and applications, ethical implications.',
    },
    {
      id: 3,
      title: 'Python for Data Science and AI',
      issuer: 'IBM via Coursera',
      date: 'June 17, 2025',
      image: '/certificates/Screenshot 2025-06-28 014234.png',
      description: 'Professional certification in Python programming for data science and artificial intelligence applications. Comprehensive training in data analysis and machine learning.',
    },
    {
      id: 4,
      title: 'Introduction to Digital Business Skills',
      issuer: 'HP LIFE Foundation',
      date: 'May 8, 2025',
      image: '/certificates/Screenshot 2025-06-28 014252.png',
      description: 'Gained knowledge about fundamentals and key drivers of digital economy. Learned about digital practices, tools, and skills needed to succeed in the Digital Era.',
    },
    {
      id: 5,
      title: 'Introduction to Generative AI for Data Analysis',
      issuer: 'Microsoft via Coursera',
      date: 'May 29, 2025',
      image: '/certificates/Screenshot 2025-06-28 014311.png',
      description: 'Comprehensive course on generative AI applications in data analysis. Learned advanced techniques for leveraging AI in data science workflows.',
    },
    {
      id: 6,
      title: 'Agile Project Management',
      issuer: 'HP LIFE Foundation',
      date: 'April 16, 2025',
      image: '/certificates/Screenshot 2025-06-28 014345.png',
      description: 'Learned agile project management methodologies including Scrum and Kanban. Gained skills in iterative development, team collaboration, and product management.',
    },
    {
      id: 7,
      title: 'Data Science Orientation',
      issuer: 'IBM via Coursera',
      date: 'May 28, 2025',
      image: '/certificates/Screenshot 2025-06-28 014408.png',
      description: 'Foundational course providing comprehensive orientation to data science field. Covered essential concepts, methodologies, and career pathways in data science.',
    },
    {
      id: 8,
      title: 'Git Training',
      issuer: 'Simplilearn SkillUp',
      date: 'June 24, 2025',
      image: '/certificates/Screenshot 2025-06-28 014428.png',
      description: 'Professional training in Git version control system. Mastered repository management, branching strategies, collaboration workflows, and best practices.',
    },
    {
      id: 9,
      title: 'OOPs in Java',
      issuer: 'Simplilearn SkillUp',
      date: 'May 21, 2025',
      image: '/certificates/Screenshot 2025-06-28 015107.png',
      description: 'Comprehensive training in Object-Oriented Programming concepts using Java. Covered inheritance, polymorphism, encapsulation, and advanced Java programming techniques.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My Certificates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive collection of my professional certifications showcasing expertise in 
            Data Science, AI, Programming, Project Management, and Digital Technologies from leading institutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ImageSlider certificates={certificates} />
        </div>

        {/* Certificate Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">
              {certificates.length}
            </h3>
            <p className="text-gray-700 font-medium">Certificates Earned</p>
          </div>
          <div className="text-center p-6 bg-teal-50 rounded-xl">
            <h3 className="text-3xl font-bold text-teal-600 mb-2">4</h3>
            <p className="text-gray-700 font-medium">Leading Institutions</p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <h3 className="text-3xl font-bold text-purple-600 mb-2">6</h3>
            <p className="text-gray-700 font-medium">Months of Learning</p>
          </div>
          <div className="text-center p-6 bg-gold-50 rounded-xl">
            <h3 className="text-3xl font-bold text-gold-600 mb-2">2025</h3>
            <p className="text-gray-700 font-medium">Achievement Year</p>
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Skills & Technologies Mastered
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-blue-600 font-semibold">Data Science</span>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-teal-600 font-semibold">Python</span>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-purple-600 font-semibold">AI & ML</span>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-gold-600 font-semibold">Analytics</span>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-green-600 font-semibold">Digital Business</span>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-red-600 font-semibold">Generative AI</span>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-indigo-600 font-semibold">Agile/Scrum</span>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-orange-600 font-semibold">Git/Version Control</span>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-cyan-600 font-semibold">Java/OOP</span>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-pink-600 font-semibold">Project Management</span>
            </div>
          </div>
        </div>

        {/* Certification Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            2025 Certification Journey
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <div className="w-5/12 text-right">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-semibold text-gray-900">March 2025</h4>
                      <p className="text-sm text-gray-600">AI for Beginners & Data Science Analytics</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                  <div className="w-5/12">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-semibold text-gray-900">April 2025</h4>
                      <p className="text-sm text-gray-600">Agile Project Management</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-5/12 text-right">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-semibold text-gray-900">May 2025</h4>
                      <p className="text-sm text-gray-600">Digital Business Skills, OOPs Java, Data Science Orientation, Generative AI</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-teal-600 rounded-full"></div>
                  </div>
                  <div className="w-5/12">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <h4 className="font-semibold text-gray-900">June 2025</h4>
                      <p className="text-sm text-gray-600">Python for Data Science & AI, Git Training</p>
                    </div>
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

export default Certificates;