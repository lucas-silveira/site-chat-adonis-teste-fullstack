import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import {
  MdVisibility,
  MdVisibilityOff,
  MdSupervisorAccount,
} from 'react-icons/md';
import { BeatLoader } from 'react-spinners';

import { resetPasswordRequest } from '~/store/modules/auth/actions';

import Button from '~/styles/button';

import { Container } from './styles';

export default function ResetPassword() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const location = useLocation();
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [
    passwordConfirmationVisible,
    setPasswordConfirmationVisible,
  ] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tokenUrl = urlParams.get('token');

    setToken(tokenUrl);
  }, [location.search]);

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(resetPasswordRequest(token, password, passwordConfirmation));
  }

  return (
    <Container>
      <h2>Redefinição de senha</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">
          <span className="label">Senha</span>
          <div>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              onChange={event => setPassword(event.target.value)}
              placeholder="Senha"
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? (
                <MdVisibilityOff size={30} color="#777" />
              ) : (
                <MdVisibility size={30} color="#777" />
              )}
            </button>
          </div>
        </label>
        <label htmlFor="password_confirmation">
          <span className="label">Confirme a sua senha</span>
          <div>
            <input
              type={passwordConfirmationVisible ? 'text' : 'password'}
              id="password_confirmation"
              name="password_confirmation"
              value={passwordConfirmation}
              onChange={event => setPasswordConfirmation(event.target.value)}
              placeholder="Confirme a sua senha"
            />
            <button
              type="button"
              onClick={() =>
                setPasswordConfirmationVisible(!passwordConfirmationVisible)
              }
            >
              {passwordConfirmationVisible ? (
                <MdVisibilityOff size={30} color="#777" />
              ) : (
                <MdVisibility size={30} color="#777" />
              )}
            </button>
          </div>
        </label>
        <Button type="submit">
          {loading ? (
            <BeatLoader color="#fff" size={7} loading={loading} />
          ) : (
            'Alterar a minha senha'
          )}
        </Button>
      </form>
      <Link to="/">
        <MdSupervisorAccount size="1.6rem" />
        Acessar a minha conta
      </Link>
    </Container>
  );
}
