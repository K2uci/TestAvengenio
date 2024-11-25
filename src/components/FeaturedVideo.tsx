import React from 'react';
import { Play, Volume2 } from 'lucide-react';

export const FeaturedVideo: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
      <img
        src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        alt="Featured Video"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="flex items-center space-x-4 mb-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Play className="w-5 h-5" />
            <span>Watch Now</span>
          </button>
          <button className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors">
            <Volume2 className="w-5 h-5" />
          </button>
        </div>
        <h2 className="text-white text-3xl font-bold mb-2">Featured: Epic Gaming Marathon</h2>
        <p className="text-gray-200 text-lg max-w-2xl">
          Join us for an incredible gaming session featuring the latest releases and expert gameplay techniques.
        </p>
      </div>
      <div className="absolute top-4 right-4 z-20">
        <span className="bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
          LIVE
        </span>
      </div>
    </div>
  );
};