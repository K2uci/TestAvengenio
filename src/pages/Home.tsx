import React, { useState } from 'react';
import { VideoCard } from '../components/VideoCard';
import { VideoModal } from '../components/VideoModal';
import { Sidebar } from '../components/Sidebar';
import { VideoFilters, Video } from '../types/video';
import { mockVideos } from '../data/mockData';

export const Home: React.FC = () => {
  const [filters, setFilters] = useState<VideoFilters>({
    search: '',
    category: '',
    quality: '',
    author: '',
  });

  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const filteredVideos = mockVideos.filter((video) => {
    const matchesSearch = video.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchesCategory =
      !filters.category || video.categories.includes(filters.category);
    const matchesQuality = !filters.quality || video.quality === filters.quality;
    const matchesAuthor = !filters.author || video.author === filters.author;

    return matchesSearch && matchesCategory && matchesQuality && matchesAuthor;
  });

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar filters={filters} onFilterChange={setFilters} />
      
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Available Videos
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onClick={() => setSelectedVideo(video)}
            />
          ))}
        </div>

        {selectedVideo && (
          <VideoModal
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </main>
    </div>
  );
};