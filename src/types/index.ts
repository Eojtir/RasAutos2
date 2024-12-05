export interface CarImage {
  id: string;
  url: string;
  alt: string;
}

export interface CarSpecs {
  engine: string;
  power: string;
  transmission: string;
  fuelType: string;
  fuelEfficiency: string;
  acceleration: string;
  topSpeed: string;
}

export interface CarFeature {
  category: string;
  items: string[];
}

export interface MaintenanceRecord {
  date: string;
  mileage: number;
  service: string;
  description: string;
}

export interface FinancingOption {
  term: number;
  downPayment: number;
  monthlyPayment: number;
  apr: number;
}

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  imageUrl: string;
  transmission: string;
  fuel: string;
  category: string;
  images: CarImage[];
  specs: CarSpecs;
  features: CarFeature[];
  maintenance: MaintenanceRecord[];
  financing: FinancingOption[];
  videoUrl?: string;
  description: string;
  condition: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}