export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function signUpRequest(data) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { data },
  };
}

export function signUpSuccess() {
  return {
    type: '@auth/SIGN_UP_SUCCESS',
  };
}

export function signUpFailure() {
  return {
    type: '@auth/SIGN_UP_FAILURE',
  };
}

export function signOutRequest() {
  return {
    type: '@auth/SIGN_OUT_REQUEST',
  };
}

export function forgotPasswordRequest(email) {
  return {
    type: '@auth/FORGOT_PASSWORD_REQUEST',
    payload: { email },
  };
}

export function forgotPasswordSuccess() {
  return {
    type: '@auth/FORGOT_PASSWORD_SUCCESS',
  };
}

export function forgotPasswordFailure() {
  return {
    type: '@auth/FORGOT_PASSWORD_FAILURE',
  };
}

export function resetPasswordRequest(token, password, password_confirmation) {
  return {
    type: '@auth/RESET_PASSWORD_REQUEST',
    payload: { token, password, password_confirmation },
  };
}

export function resetPasswordSuccess() {
  return {
    type: '@auth/RESET_PASSWORD_SUCCESS',
  };
}

export function resetPasswordFailure() {
  return {
    type: '@auth/RESET_PASSWORD_FAILURE',
  };
}
