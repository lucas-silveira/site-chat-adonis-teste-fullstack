import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_UP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_UP_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_UP_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/FORGOT_PASSWORD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/FORGOT_PASSWORD_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@auth/FORGOT_PASSWORD_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/RESET_PASSWORD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/RESET_PASSWORD_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@auth/RESET_PASSWORD_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT_REQUEST': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
