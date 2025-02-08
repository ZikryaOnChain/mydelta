export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  service: string;
  message?: string;
} 