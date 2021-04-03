import { UserToCreate, UserWithDetails } from '../types/User';
import apiClient from '../utils/apiClient';

interface LoginResponse {
  token: string;
}

class AuthService {
  async login(email: string, password: string): Promise<string> {
    const response = await apiClient.post<LoginResponse>('/login', {
      email,
      password,
    });
    return response.data.token;
  }

  async register(user: UserToCreate): Promise<void> {
    await apiClient.post('/register', user);
  }

  async me(): Promise<UserWithDetails> {
    const response = await apiClient.get<UserWithDetails>('/me');
    return response.data;
  }
}

const authService = new AuthService();

export default authService;
