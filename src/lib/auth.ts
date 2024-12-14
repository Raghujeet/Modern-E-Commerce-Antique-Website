interface User {
  id: string;
  email: string;
  displayName?: string;
}

class AuthService {
  private static instance: AuthService;
  private currentUser: User | null = null;

  private constructor() {
    // Load user from localStorage on initialization
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      this.currentUser = JSON.parse(savedUser);
    }
  }

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async signUp(email: string, password: string): Promise<User> {
    // Simple validation
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    // Check if user already exists
    const users = this.getUsers();
    if (users.find(u => u.email === email)) {
      throw new Error('User already exists');
    }

    // Create new user
    const newUser: User = {
      id: crypto.randomUUID(),
      email,
      displayName: email.split('@')[0],
    };

    // Save user
    users.push({ ...newUser, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Set current user
    this.currentUser = newUser;
    localStorage.setItem('user', JSON.stringify(newUser));

    return newUser;
  }

  async signIn(email: string, password: string): Promise<User> {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Set current user (without password)
    const { password: _, ...userWithoutPassword } = user;
    this.currentUser = userWithoutPassword;
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));

    return userWithoutPassword;
  }

  async signOut(): Promise<void> {
    this.currentUser = null;
    localStorage.removeItem('user');
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  private getUsers(): Array<User & { password: string }> {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  }
}

export const auth = AuthService.getInstance();