import { toast } from 'react-toastify';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { id, ...data } = payload;
    yield call(api.put, `users/${id}`, data);

    yield put(updateProfileSuccess(payload.data));

    history.push('/admin/users');
    toast.success('Perfil atualizado com sucesso!');
  } catch (err) {
    toast.error(err.response.data.error);
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
