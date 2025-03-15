import { UserRound } from 'lucide-react';
import { useState } from 'react';

const SuccessStories = () => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);

  const toggleExpand = (index) => {
    setExpandedIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter(i => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  const stories = [
    {
      name: "M Talal Tariq",
      role: "AI Engineer",
      description: "I’m Talal Tariq, currently in my final semester of a BS in AI and recently hired as an AI Intern at Engro Corp Karachi. I am a proud graduate of CAI 1.0, a program offered by the Electronic Engineering Department at IUB. This achievement comes after going through a tough interview, where I pushed my limits and proved my skills. It has been made possible through the unwavering dedication of the faculty, my relentless hard work, and the invaluable support and guidance of AI Vision. Their mentorship has played a crucial role in shaping my abilities and opening doors to exciting opportunities in the AI industry. As part of my internship, I am actively working on cutting-edge AI solutions, gaining hands-on experience, and further honing my expertise in the field.",
      imageUrl: "/talal.jpg" // Local image path
    },
    {
      name: "M Usman",
      role: "ML Researcher",
      description: "I’m M Usman, specializing in deep learning and predictive modeling. I contribute to cutting-edge research projects at a leading tech company. My journey in AI began with the AI Vision program, where I gained foundational knowledge and practical skills. The mentorship and support from the faculty have been instrumental in shaping my career path and helping me excel in the field.",
      imageUrl: "/images/usman.jpg"
    },
    {
      name: "Ahmad",
      role: "AI Consultant",
      description: "I’m Ahmad, an AI Consultant helping businesses integrate AI solutions to improve efficiency and automation. I completed the AI Vision program and have since worked on various projects that leverage AI technologies. The program provided me with a strong foundation and the confidence to tackle real-world challenges in the AI industry.",
      imageUrl: "/images/ahmad.jpg"
    },
    {
      name: "Samsaam",
      role: "NLP Specialist",
      description: "I’m Samsaam, a NLP Specialist developing state-of-the-art natural language processing solutions for global AI-driven platforms. I am a graduate of the AI Vision program, where I learned the intricacies of NLP and its applications. The support and guidance from the faculty have been invaluable in advancing my career and contributing to innovative projects.",
      imageUrl: "/images/samsaam.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Our Success Stories</h2>
          <p className="text-secondary-light text-lg">
            See how our graduates are making an impact in the AI industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stories.map((story, index) => {
            const isExpanded = expandedIndexes.includes(index);
            const truncatedDescription = isExpanded ? story.description : story.description.split('. ').slice(0, 2).join('. ') + '.';

            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div 
                  className="aspect-video bg-accent/10 relative"
                >
                  <img 
                    src={story.imageUrl} 
                    alt={`${story.name} Story`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <UserRound className="w-6 h-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-secondary">{story.name}</h3>
                      <p className="text-primary font-medium">{story.role}</p>
                    </div>
                  </div>
                  <p className="text-secondary-light text-sm leading-relaxed">
                    {truncatedDescription}
                  </p>
                  {!isExpanded && (
                    <p className="mt-2 text-secondary-light text-sm leading-relaxed">
                      <span className="cursor-pointer text-primary hover:underline">Read More</span>
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;