import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
  description: string;
}

export interface Doctor {
  name: string;
  role: string;
  bio: string;
  experience: number;
  image: string;
}
