import { Button } from "./ui/button";

const OfferSection = () => {
  const modules = [
    {
      title: "Python for AI",
      description: "Master Python programming fundamentals and AI-specific libraries",
      duration: "2 months"
    },
    {
      title: "Mathematics for AI",
      description: "Learn essential mathematical concepts for AI development",
      duration: "2 months"
    },
    {
      title: "Machine Learning",
      description: "Understand ML algorithms, models, and implementations",
      duration: "2 months"
    },
    {
      title: "Deep Learning",
      description: "Explore neural networks and deep learning architectures",
      duration: "2 months"
    },
    {
      title: "NLP",
      description: "Natural Language Processing techniques and applications",
      duration: "1 month"
    },
    {
      title: "Generative AI",
      description: "Latest developments in generative AI and practical applications",
      duration: "1 month"
    }
  ];

  return (
    <section className="py-20 bg-gray-10" id="offer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">CAI 3.0 Curriculum</h2>
          <p className="text-secondary-light text-lg">
            A comprehensive 10-month journey into the world of Artificial Intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {modules.map((module, index) => (
            
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow ">
              <h3 className="text-xl font-semibold text-secondary mb-2">{module.title}</h3>
              <p className="text-secondary-light mb-4">{module.description}</p>
              <div className="text-primary text-sm font-medium">
                Duration: {module.duration}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-accent/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-secondary mb-4">Ready to Begin?</h3>
          <p className="text-secondary-light mb-6">
            Join our next batch and start your journey in AI
          </p>
          <Button 
            className="bg-primary hover:bg-primary-dark text-white"
            size="lg"
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
