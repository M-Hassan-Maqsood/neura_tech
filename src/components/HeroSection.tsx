
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-accent via-accent/10 to-white/10">
      <div className="absolute inset-0 w-full h-full">
  <video
    className="bg-cover bg-center opacity-20"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/video/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

      {/*<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />*/}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            
            <div>
              <span className="text-indigo-600  font-bold text-2xl  uppercase tracking-wider ">Welcome to</span>
              <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary">
                NeuraTech
              </h1>
            </div>
            <p className="text-lg text-gray-800 leading-relaxed">
            Unlock a world of opportunities with our comprehensive courses, workshops, and resources. Whether you're just beginning your AI journey, looking to upskill, or seeking inspiration, NeuraTech provides everything you need to succeed.
            </p>
            
            <div className="pt-4 flex gap-4">
  <Link
    to="/offer"
    className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-xl text-white bg-indigo-500 hover:bg-indigo-700 shadow-lg transition-all duration-300 transform hover:scale-105"
  >
    <GraduationCap className="w-5 h-5 mr-2" />
    Explore Courses
  </Link>
</div>

          </div>
          
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-video rounded-2xl overflow-hidden glass-card">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                poster=""
              >
                <source src="/video/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
