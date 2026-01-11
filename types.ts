export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  image: string;
  items: ServiceItem[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}

export enum PageRoutes {
  HOME = '/',
  SERVICES = '/services',
  GALLERY = '/gallery',
  ABOUT = '/about',
  BOOKING = '/booking',
}