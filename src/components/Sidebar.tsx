import React from 'react';
import { VideoFilters } from '../types/video';
import { Search, Filter, X } from 'lucide-react';

interface SidebarProps {
  filters: VideoFilters;
  onFilterChange: (filters: VideoFilters) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ filters, onFilterChange, isOpen, onClose }) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={onClose}
        />
      )}
      
      <div 
        className={`
          fixed md:sticky top-0 inset-y-0 left-0 z-40
          w-64 bg-white dark:bg-gray-800 p-4
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          h-[calc(100vh-4rem)] overflow-y-auto
          md:translate-x-0
        `}
      >
        <div className="md:hidden flex justify-end mb-4">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Search
            </h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search videos..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={filters.search}
                onChange={(e) =>
                  onFilterChange({ ...filters, search: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Categories
            </h3>
            <select
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={filters.category}
              onChange={(e) =>
                onFilterChange({ ...filters, category: e.target.value })
              }
            >
              <option value="">All Categories</option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="rpg">RPG</option>
              <option value="strategy">Strategy</option>
            </select>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Quality
            </h3>
            <select
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={filters.quality}
              onChange={(e) =>
                onFilterChange({ ...filters, quality: e.target.value })
              }
            >
              <option value="">All Qualities</option>
              <option value="4K">4K</option>
              <option value="1080p">1080p</option>
              <option value="720p">720p</option>
            </select>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Author
            </h3>
            <select
              className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              value={filters.author}
              onChange={(e) =>
                onFilterChange({ ...filters, author: e.target.value })
              }
            >
              <option value="">All Authors</option>
              <option value="GameMaster">GameMaster</option>
              <option value="ProGamer">ProGamer</option>
              <option value="SpeedRunner">SpeedRunner</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};