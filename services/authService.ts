// Mock Authentication Service
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin';
  onboardingComplete: boolean;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

// Mock user for demo
const MOCK_USER: User = {
  id: '1',
  email: 'demo@wekit.com',
  name: 'Demo User',
  avatar: 'https://i.pravatar.cc/150?u=demo',
  role: 'user',
  onboardingComplete: true,
};

class AuthService {
  private storageKey = 'wekit_auth';

  // Get current auth state from localStorage
  getAuthState(): AuthState {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return { user: null, token: null, isAuthenticated: false };
      }
    }
    return { user: null, token: null, isAuthenticated: false };
  }

  // Login with email and password (mock)
  async login(email: string, password: string): Promise<AuthState> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock validation
    if (email && password) {
      const authState: AuthState = {
        user: { ...MOCK_USER, email },
        token: 'mock-jwt-token-' + Date.now(),
        isAuthenticated: true,
      };

      localStorage.setItem(this.storageKey, JSON.stringify(authState));
      return authState;
    }

    throw new Error('Invalid credentials');
  }

  // Signup (mock)
  async signup(email: string, password: string, name: string): Promise<AuthState> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const authState: AuthState = {
      user: {
        id: Date.now().toString(),
        email,
        name,
        role: 'user',
        onboardingComplete: false,
      },
      token: 'mock-jwt-token-' + Date.now(),
      isAuthenticated: true,
    };

    localStorage.setItem(this.storageKey, JSON.stringify(authState));
    return authState;
  }

  // Logout
  logout(): void {
    localStorage.removeItem(this.storageKey);
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return this.getAuthState().isAuthenticated;
  }

  // Get current user
  getCurrentUser(): User | null {
    return this.getAuthState().user;
  }

  // Update user profile
  async updateProfile(updates: Partial<User>): Promise<User> {
    await new Promise(resolve => setTimeout(resolve, 800));

    const authState = this.getAuthState();
    if (authState.user) {
      const updatedUser = { ...authState.user, ...updates };
      const newAuthState = { ...authState, user: updatedUser };
      localStorage.setItem(this.storageKey, JSON.stringify(newAuthState));
      return updatedUser;
    }

    throw new Error('No user logged in');
  }
}

export const authService = new AuthService();
