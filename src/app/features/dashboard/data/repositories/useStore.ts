// useStore.ts
import create from 'zustand';

interface SessionData {
  user: string;
  password: string;
 
}
interface StoreState {
  isLoading: boolean;
  
  isFirstTimeSession: boolean;
  showToast: boolean;
  isObscureText: boolean;
  errorTextEmail: string;
  errorTextPassword: string;
  sessionData: SessionData | null;
  currentToken: string | null;
  setIsLoading: (value: boolean) => void;
  setSessionData: (data: SessionData) => void;
  setCurrentToken: (token: string) => void;
  clearData: () => void;
}

export const useStore = create<StoreState>((set) => ({
  isLoading: false,
  isFirstTimeSession: false,
  showToast: false,
  isObscureText: true,
  errorTextEmail: '',
  errorTextPassword: '',
  sessionData: null,
  currentToken: null,
  setIsLoading: (value) => set({ isLoading: value }),
  setSessionData: (data) => set({ sessionData: data, isFirstTimeSession: data.password === '' }),
  setCurrentToken: (token) => set({ currentToken: token }),
  clearData: () => set({ sessionData: null, currentToken: null, isFirstTimeSession: false })
}));