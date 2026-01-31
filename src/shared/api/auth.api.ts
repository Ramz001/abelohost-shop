import axios from 'axios';
import type { LoginInput } from '@shared/models/auth.schema';

export interface AuthResponse {
  success: boolean;
  token?: string;
  message?: string;
}

export const authApi = {
  login: async (credentials: LoginInput): Promise<AuthResponse> => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.post<AuthResponse>('/api/auth/login', credentials);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data?.message || 'Authentication failed');
      }
      throw new Error('Network error. Please try again.');
    }
  },
};
