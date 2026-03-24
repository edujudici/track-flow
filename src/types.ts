export interface ProductPlan {
  interval: 'monthly' | 'quarterly' | 'annual';
  price: number;
  savings?: string;
}

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  category: string;
  plans: ProductPlan[];
  screenshots?: string[];
  features?: string[];
  testimonials?: {
    user: string;
    role: string;
    comment: string;
    avatar: string;
  }[];
}

export interface State {
  products: Product[];
  selectedProduct: Product | null;
  selectedPlanInterval: 'monthly' | 'quarterly' | 'annual';
}
