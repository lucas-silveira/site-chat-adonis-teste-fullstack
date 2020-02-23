import { toast } from 'react-toastify';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  resetPasswordSuccess,
  resetPasswordFailure,
} from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token.token}`;

    yield put(signInSuccess(token.token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error(err.response.data.error);
    yield put(signInFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { data } = payload;

    yield call(api.post, 'users', data);

    toast.success('Usuário criado com sucesso!');
    yield put(signUpSuccess());
    history.push('/');
  } catch (err) {
    toast.error(err.response.data.error);
    yield put(signUpFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  delete api.defaults.headers.Authorization;
  history.push('/');
}

export function* forgotPassword({ payload }) {
  try {
    const { email } = payload;

    yield call(api.post, 'forgot_password', {
      email,
      redirect_url: 'http://localhost:3000/reset-password',
    });

    toast.success('Um email foi enviado com as instruções.');
    yield put(forgotPasswordSuccess());
    history.push('/');
  } catch (err) {
    toast.error(err.response.data.error);
    yield put(forgotPasswordFailure());
  }
}

export function* resetPassword({ payload }) {
  try {
    const { token, password, password_confirmation } = payload;

    yield call(api.put, 'forgot_password', {
      token,
      password,
      password_confirmation,
    });

    toast.success('A senha foi redefinida com sucesso!');
    yield put(resetPasswordSuccess());
    history.push('/');
  } catch (err) {
    toast.error(err.response.data.error);
    yield put(resetPasswordFailure());
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT_REQUEST', signOut),
  takeLatest('@auth/FORGOT_PASSWORD_REQUEST', forgotPassword),
  takeLatest('@auth/RESET_PASSWORD_REQUEST', resetPassword),
]);
