export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  era: string;
  category: string;
  description: string;
}

export interface CartItemType extends Product {
  quantity: number;
}

export interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  phoneNumber: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  favorites: number[];
  orderHistory: Order[];
}

export interface Order {
  id: string;
  date: string;
  items: CartItemType[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}