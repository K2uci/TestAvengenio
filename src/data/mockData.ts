import { Video } from '../types/video';

const authors = ['GameMaster', 'ProGamer', 'SpeedRunner', 'RetroGamer', 'ESportsPlayer', 'GameReviewer'];
const categories = ['action', 'adventure', 'rpg', 'strategy', 'sports', 'racing', 'puzzle', 'shooter'];
const qualities = ['4K', '1080p', '720p'];

const generateMockVideo = (id: number): Video => {
  const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
  const randomCategories = Array.from({ length: 2 }, () => categories[Math.floor(Math.random() * categories.length)]);
  const randomQuality = qualities[Math.floor(Math.random() * qualities.length)];
  const randomViews = Math.floor(Math.random() * 1000000) + 10000;
  
  const thumbnails = [
    'https://images.unsplash.com/photo-1511512578047-dfb367046420',
    'https://images.unsplash.com/photo-1542751371-adc38448a05e',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
    'https://images.unsplash.com/photo-1552820728-8b83bb6b773f',
    'https://images.unsplash.com/photo-1547394765-185e1e68f34e',
  ];
  
  const randomThumbnail = `${thumbnails[Math.floor(Math.random() * thumbnails.length)]}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`;

  return {
    id: id.toString(),
    title: `${randomCategories[0].charAt(0).toUpperCase() + randomCategories[0].slice(1)} Adventure`,
    thumbnail: randomThumbnail,
    duration: `${Math.floor(Math.random() * 30) + 5}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    quality: randomQuality,
    views: randomViews,
    uploadDate: new Date(Date.now() - Math.floor(Math.random() * 90) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    author: randomAuthor,
    categories: randomCategories,
    description: `Experience an amazing ${randomCategories.join(' and ')} gameplay session with professional commentary and advanced strategies. Learn the best techniques for mastering this game style and improving your skills.

Key Highlights:
- Advanced gameplay mechanics
- Professional strategies
- Tips and tricks
- Community challenges
- Special guest appearances

Join us in this exciting gaming adventure and take your skills to the next level!`,
  };
};

export const mockVideos: Video[] = Array.from({ length: 50 }, (_, i) => generateMockVideo(i + 1));