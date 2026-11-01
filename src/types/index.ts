export type MenuCategoryType = 
  | 'all'
  | 'starters'
  | 'soups-salads'
  | 'main-courses'
  | 'seafood'
  | 'steaks'
  | 'desserts'
  | 'beverages';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategoryType;
  description: string;
  price: number;
  dietary?: ('GF' | 'V' | 'VG' | 'Chef Signature')[];
  image?: string;
  winePairing?: string;
  featured?: boolean;
}

export interface Reservation {
  id: string;
  referenceNumber: string;
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'main-dining' | 'wine-cellar' | 'chefs-counter' | 'terrace';
  occasion?: string;
  specialRequests?: string;
  createdAt: string;
  status: 'confirmed' | 'cancelled';
}

export interface EventSpace {
  id: string;
  name: string;
  capacity: {
    seated: number;
    cocktail: number;
  };
  squareFeet: number;
  description: string;
  features: string[];
  image: string;
}

export interface CateringPackage {
  id: string;
  name: string;
  tagline: string;
  pricePerPerson: number;
  minimumGuests: number;
  courses: {
    title: string;
    items: string[];
  }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  date: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'interior' | 'events' | 'experience';
  image: string;
  caption: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}
