import React from 'react';
import { Video } from '../types/video';
import { X, Clock, Eye, Calendar, User, Tag, Video as VideoIcon } from 'lucide-react';

interface VideoModalProps {
  video: Video;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-6 h-6" />
          </button>
          
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-[400px] object-cover rounded-t-lg"
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {video.title}
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Clock className="w-5 h-5 mr-2" />
              <span>Duration: {video.duration}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Eye className="w-5 h-5 mr-2" />
              <span>{video.views.toLocaleString()} views</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Upload Date: {video.uploadDate}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <User className="w-5 h-5 mr-2" />
              <span>Author: {video.author}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <VideoIcon className="w-5 h-5 mr-2" />
              <span>Quality: {video.quality}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Tag className="w-5 h-5 mr-2" />
              <span>Categories: {video.categories.join(', ')}</span>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Description
            </h3>
            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
              {video.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};