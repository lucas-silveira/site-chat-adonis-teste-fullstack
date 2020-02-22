import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdSupervisorAccount } from 'react-icons/md';
import { BeatLoader } from 'react-spinners';

import { forgotPasswordRequest } from '~/store/modules/auth/actions';

import Button from '~/styles/button';

import { Container } from './styles';

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(forgotPasswordRequest(email));
  }

  return (
    <Container>
      <h2>Redefinição de senha</h2>
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
        <Button type="submit">
          {loading ? (
            <BeatLoader color="#fff" size={7} loading={loading} />
          ) : (
            'Redefinir a minha senha'
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
