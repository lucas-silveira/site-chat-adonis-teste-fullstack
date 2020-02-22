import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  MdVisibility,
  MdVisibilityOff,
  MdSupervisorAccount,
} from 'react-icons/md';
import { BeatLoader } from 'react-spinners';

import { signUpRequest } from '~/store/modules/auth/actions';

import Button from '~/styles/button';

import { Container } from './styles';

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [
    passwordConfirmationVisible,
    setPasswordConfirmationVisible,
  ] = useState(false);
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(
      signUpRequest({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
        address,
        phone,
      })
    );
  }

  return (
    <Container>
      <h2>Crie sua conta grátis</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <span>Nome</span>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={event => setName(event.target.value)}
              placeholder="Digite o seu primeiro nome"
            />
          </div>
        </label>
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
        <label htmlFor="address">
          <span>Endereço</span>
          <div>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={event => setAddress(event.target.value)}
              placeholder="Digite o seu endereço"
            />
          </div>
        </label>
        <label htmlFor="phone">
          <span>Celular</span>
          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={event => setPhone(event.target.value)}
              placeholder="Digite o seu celular"
            />
          </div>
        </label>
        <Button type="submit">
          {loading ? (
            <BeatLoader color="#fff" size={7} loading={loading} />
          ) : (
            'Criar conta'
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
