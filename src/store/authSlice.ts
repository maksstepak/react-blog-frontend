import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import authService from '../services/authService';
import { UserWithDetails } from '../types/User';
import { AppThunk, RootState } from './store';

interface AuthState {
  isLoggedIn: boolean;
  user: UserWithDetails | null;
}

const initialState: AuthState = {
  isLoggedIn: localStorage.getItem('accessToken') ? true : false,
  user: localStorage.getItem('authenticatedUser')
    ? JSON.parse(localStorage.getItem('authenticatedUser') as string)
    : null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserWithDetails>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const loginUser = (accessToken: string): AppThunk => async (
  dispatch
) => {
  localStorage.setItem('accessToken', accessToken);

  const user = await authService.me();
  localStorage.setItem('authenticatedUser', JSON.stringify(user));

  dispatch(login(user));
};

export const logoutUser = (): AppThunk => (dispatch) => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('authenticatedUser');

  dispatch(logout());
};

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
