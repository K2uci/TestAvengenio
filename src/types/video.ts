export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  quality: string;
  views: number;
  uploadDate: string;
  author: string;
  categories: string[];
  description: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export type VideoFilters = {
  search: string;
  category: string;
  quality: string;
  author: string;
}