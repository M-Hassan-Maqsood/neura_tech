import { Award, Users, Globe } from 'lucide-react';

const JourneySection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary">Our Journey</h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-secondary-light text-lg">
              Since our inception, we have successfully launched our first batch of CAI 3.0, and our second batch is already underway. Our commitment to excellence is evident in the success of our students and our continuous efforts to refine and expand our educational offerings.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Users,
              title: "CAI 1.0",
              description: "Conducted physically with 25 graduates, many of whom are now working in leading AI and IT companies.",
              url: "https://aicohort.tech/story-category/success-stories/" // Replace with actual URL
            },
            {
              icon: Users,
              title: "CAI 2.0",
              description: "Currently running with 60 students in our physical classes, equipping them with cutting-edge AI skills.",
              url: "https://your-actual-url-for-cai2.com" // Replace with actual URL
            },
            {
              icon: Users,
              title: "CAI 3.0",
              description: "Now launching nationwide as an online program, breaking physical barriers to make AI education accessible to everyone.",
              url: "https://your-actual-url-for-cai3.com" // Replace with actual URL
            },
            {
              icon: Award,
              title: "Excellence in Education",
              description: "Delivering top-tier AI training through our structured CAI program, aligned with Stanford’s curriculum."
            },
            {
              icon: Users,
              title: "Expert Instructors",
              description: "Learn from industry professionals in collaboration with the Pak AI Vision Group."
            },
            {
              icon: Globe,
              title: "Online Accessibility",
              description: "Break geographical barriers with our accessible and interactive online platform."
            }
          ].map((item, index) => {
            const isCAI = item.title.startsWith("CAI");

            return (
              <div
                key={index}
                className="relative group p-8 rounded-2xl bg-gradient-to-b from-white to-accent/20 border border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {isCAI ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 block w-full h-full"
                  ></a>
                ) : null}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-dark opacity-0 group-hover:opacity-5 rounded-2xl transition duration-300" />
                <div className="relative z-20">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-3">{item.title}</h3>
                  <p className="text-secondary-light">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;