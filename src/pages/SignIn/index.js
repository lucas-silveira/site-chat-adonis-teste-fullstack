import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  MdVisibility,
  MdVisibilityOff,
  MdSupervisorAccount,
} from 'react-icons/md';
import { IoMdKey } from 'react-icons/io';
import { BeatLoader } from 'react-spinners';

import { signInRequest } from '~/store/modules/auth/actions';

import Button from '~/styles/button';

import { Container } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  function handleInputVisible() {
    setPasswordVisible(!passwordVisible);
  }

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <h2>Acesse a sua conta</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <span>Email</span>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              placeholder="Digite o seu email"
            />
          </div>
        </label>
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
            <button type="button" onClick={handleInputVisible}>
              {passwordVisible ? (
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
            'Entrar'
          )}
        </Button>
      </form>
      <Link to="/register">
        <MdSupervisorAccount size="1.6rem" />
        Criar uma conta
      </Link>
      <Link to="/forgot-password">
        <IoMdKey size="1.6rem" />
        Esqueci minha senha
      </Link>
    </Container>
  );
}
