import { toast } from 'react-toastify';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      senha: password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error(err.response.data.error);
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    history.push('/');
  } catch (err) {
    toast.error(err.response.data.error);
    yield put(signFailure());
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
    });

    toast.success('Um email foi enviado com as instruções.');
    history.push('/');
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export function* resetPassword({ payload }) {
  try {
    const { password, token } = payload;

    yield call(
      api.put,
      'reset_password',
      {
        senha: password,
      },
      {
        params: {
          token,
        },
      }
    );

    toast.success('A senha foi redefinida com sucesso!');
    history.push('/');
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/FORGOT_PASSWORD', forgotPassword),
  takeLatest('@auth/RESET_PASSWORD', resetPassword),
]);
