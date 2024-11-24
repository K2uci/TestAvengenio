import React from 'react';
import { Video } from '../types/video';
import { Clock, Eye, Calendar, User } from 'lucide-react';

interface VideoCardProps {
  video: Video;
  onClick: () => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {video.title}
        </h3>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Clock className="w-4 h-4 mr-2" />
            <span>{video.duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Eye className="w-4 h-4 mr-2" />
            <span>{video.views.toLocaleString()} views</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{video.uploadDate}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
            <User className="w-4 h-4 mr-2" />
            <span>{video.author}</span>
          </div>
        </div>
        <div className="mt-3">
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded">
            {video.quality}
          </span>
        </div>
      </div>
    </div>
  );
};