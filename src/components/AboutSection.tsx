import { Award, Users, Globe, BookOpen, Laptop, ArrowUpRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Excellence in AI Education Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary mb-6">Excellence in AI Education</h1>
          <p className="text-lg text-secondary-light max-w-4xl mx-auto">
            NeuraTech is dedicated to empowering individuals with cutting-edge AI skills through comprehensive online education.
          </p>
        </div>

        {/* About NeuraTech Box */}
        <div className="bg-accent rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-4">About NeuraTech</h2>
          <div className="space-y-4 text-lg text-secondary-light">
            <p>
            At NeuraTech, we believe education is the foundation of innovation. Our mission is to make high-quality, industry-relevant AI education accessible to all, equipping students with the skills needed to excel in a rapidly evolving technological landscape.
            </p>
            <p>
            In collaboration with Pak AI Vision Group, Silicon Valley, USA, we offer cutting-edge courses that prepare students for the future of AI and technology.
            </p>
          </div>
        </div>

        <div className="mb-16 ">
          <h2 className="text-3xl font-bold text-secondary text-center mb-12">Our Mission</h2>
          <div className="space-y-12">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="glass-card p-6 rounded-xl">
                <p className="text-secondary-light">
                Delivering comprehensive AI programs like CAI 3.0, covering essential tools and techniques.
                </p>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="/lovable-uploads/im1.png" 
                  alt="Mission 1" 
                  className="w-[450px] h-auto rounded-xl shadow-lg mx-auto"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="hidden lg:block order-2 lg:order-1 ">
                <img 
                  src="/lovable-uploads/im2.png" 
                  alt="Mission 2" 
                  className="w-[450px] h-auto rounded-xl shadow-lg mx-auto"
                />
              </div>
              <div className="glass-card p-6 rounded-xl order-1 lg:order-2">
                <p className="text-secondary-light">
                Partnering with leading institutions to align our curriculum with global industry standards.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="glass-card p-6 rounded-xl">
                <p className="text-secondary-light">
                Fostering a thriving community of learners, experts, and AI innovators.
                </p>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="/lovable-uploads/im3.png" 
                  alt="Mission 3" 
                  className="w-[450px] h-auto rounded-xl shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

       {/* <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary mb-12">Why Choose NeuraTech?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Comprehensive Curriculum</h3>
              <p className="text-secondary-light">
                Our courses cover foundations and advanced concepts of AI, including Probability, Linear Algebra, Calculus, Python, ML, DL, NLP, and Generative AI.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Laptop className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Flexible Learning</h3>
              <p className="text-secondary-light">
                Learn anytime, anywhere through online platforms like Canvas, Moodle, and live Zoom sessions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Expert Guidance</h3>
              <p className="text-secondary-light">
                Learn from experienced AI professionals passionate about teaching and innovation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Hands-On Projects</h3>
              <p className="text-secondary-light">
                Apply learning through real-world projects and case studies for practical experience.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Community Support</h3>
              <p className="text-secondary-light">
                Join a vibrant community of learners, collaborate on projects, and build meaningful connections.
              </p>
            </div>
          </div>
        </div> */}
        <div className="bg-gray-100 p-8 rounded-2xl shadow-xl border border-gray-300 mb-16">
  <h2 className="text-4xl font-bold text-secondary text-center mb-10">
    Why Choose NeuraTech?
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
        <BookOpen className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-secondary mb-3">Comprehensive Curriculum</h3>
      <p className="text-secondary-light">
        Our courses cover AI foundations & advanced topics: Probability, Linear Algebra, Python, ML, DL, NLP, and Generative AI.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
        <Laptop className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-secondary mb-3">Flexible Learning</h3>
      <p className="text-secondary-light">
        Learn anytime, anywhere via <span className="text-primary font-medium">Canvas, Moodle, Zoom</span>.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
        <Users className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-secondary mb-3">Expert Guidance</h3>
      <p className="text-secondary-light">
        Learn from experienced AI professionals passionate about innovation.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
        <Award className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-secondary mb-3">Hands-On Projects</h3>
      <p className="text-secondary-light">
        Gain real-world AI skills through practical projects and case studies.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
        <Globe className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-secondary mb-3">Community Support</h3>
      <p className="text-secondary-light">
        Join a vibrant AI community, collaborate, and grow together.
      </p>
    </div>
    
  </div>
</div>


        <div className="bg-[#1A1F2C] text-white rounded-3xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-center text-[#4A90E2] mb-6">Our Vision for the Future</h2>
          <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-16">
            We envision NeuraTech as a catalyst for change, equipping students with the tools 
            to solve complex problems, create innovative solutions, and lead in the AI-driven era.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <ArrowUpRight className="w-6 h-6 text-[#4A90E2] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation in Education</h3>
                  <p className="text-gray-400">
                    Continuously evolving our curriculum to stay ahead of industry trends and technological advancements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ArrowUpRight className="w-6 h-6 text-[#4A90E2] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                  <p className="text-gray-400">
                    Building a worldwide community of AI professionals who drive innovation and positive change.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <ArrowUpRight className="w-6 h-6 text-[#4A90E2] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industry Partnership</h3>
                  <p className="text-gray-400">
                    Strengthening connections with leading tech companies to provide real-world opportunities.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ArrowUpRight className="w-6 h-6 text-[#4A90E2] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Student Success</h3>
                  <p className="text-gray-400">
                    Empowering students with the skills and confidence to become leaders in AI innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-secondary text-center mb-6">Meet Our Experts</h2>
          <p className="text-secondary-light text-center mb-12">
          
          At NeuraTech, we bring together some of the most sought-after AI educators and industry professionals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Dr. Abbas Abbasi",
                role: "Head of Program & Assistant Professor, The Islamia University Bahawalpur",
                image: "/pro1.avif",
                bio: "Leading AI education initiatives with extensive experience in academic research and industry collaborations."
              },
              {
                name: "Engr. Abid Javed",
                role: "Assistant Professor, The Islamia University Bahawalpur",
                image: "/pro2.avif",
                bio: "Bringing expertise in machine learning and AI model development to help students excel."
              }
            ].map((staff, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-accent to-accent/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8"
              >
                <Avatar className="w-32 h-32">
                  <AvatarImage src={staff.image} alt={staff.name} />
                  <AvatarFallback>{staff.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">{staff.name}</h3>
                  <p className="text-primary font-medium mb-4">{staff.role}</p>
                  <p className="text-secondary-light">{staff.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
