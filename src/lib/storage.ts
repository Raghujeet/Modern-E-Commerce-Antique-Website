import { Product, Order, UserProfile } from '../types';

class StorageService {
  private static instance: StorageService;

  private constructor() {}

  static getInstance(): StorageService {
    if (!StorageService.instance) {
      StorageService.instance = new StorageService();
    }
    return StorageService.instance;
  }

  // User Profiles
  async getUserProfile(userId: string): Promise<UserProfile | null> {
    const profiles = this.getProfiles();
    return profiles.find(p => p.id === userId) || null;
  }

  async updateUserProfile(userId: string, data: Partial<UserProfile>): Promise<void> {
    const profiles = this.getProfiles();
    const index = profiles.findIndex(p => p.id === userId);
    
    if (index >= 0) {
      profiles[index] = { ...profiles[index], ...data };
    } else {
      profiles.push({ id: userId, ...data } as UserProfile);
    }

    localStorage.setItem('userProfiles', JSON.stringify(profiles));
  }

  // Orders
  async createOrder(userId: string, order: Omit<Order, 'id'>): Promise<string> {
    const orders = this.getOrders();
    const newOrder = {
      ...order,
      id: crypto.randomUUID(),
      userId,
      date: new Date().toISOString(),
    };

    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));

    return newOrder.id;
  }

  async getUserOrders(userId: string): Promise<Order[]> {
    const orders = this.getOrders();
    return orders.filter(order => order.userId === userId);
  }

  // Favorites
  async addToFavorites(userId: string, productId: number): Promise<void> {
    const profiles = this.getProfiles();
    const profile = profiles.find(p => p.id === userId);

    if (profile) {
      if (!profile.favorites) profile.favorites = [];
      if (!profile.favorites.includes(productId)) {
        profile.favorites.push(productId);
        localStorage.setItem('userProfiles', JSON.stringify(profiles));
      }
    }
  }

  async removeFromFavorites(userId: string, productId: number): Promise<void> {
    const profiles = this.getProfiles();
    const profile = profiles.find(p => p.id === userId);

    if (profile?.favorites) {
      profile.favorites = profile.favorites.filter(id => id !== productId);
      localStorage.setItem('userProfiles', JSON.stringify(profiles));
    }
  }

  async getFavoriteProducts(userId: string): Promise<Product[]> {
    const profile = await this.getUserProfile(userId);
    if (!profile?.favorites?.length) return [];

    const products = this.getProducts();
    return products.filter(product => profile.favorites.includes(product.id));
  }

  // Private helper methods
  private getProfiles(): UserProfile[] {
    const profiles = localStorage.getItem('userProfiles');
    return profiles ? JSON.parse(profiles) : [];
  }

  private getOrders(): Order[] {
    const orders = localStorage.getItem('orders');
    return orders ? JSON.parse(orders) : [];
  }

  private getProducts(): Product[] {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
  }
}

export const storage = StorageService.getInstance();