import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdSend } from 'react-icons/md';
import Ws from '@adonisjs/websocket-client';

import { signOutRequest } from '~/store/modules/auth/actions';

import api from '~/services/api';

import {
  Container,
  ChatWrapper,
  Members,
  ChatArea,
  ChatMessage,
} from './styles';

export default function Dashboard() {
  const chatBox = useRef();
  const chatContent = useRef();

  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);

  const { id, name, avatar } = useSelector(state => state.user.profile);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ws = useMemo(
    () =>
      Ws('ws://localhost:3333')
        .withApiToken(token)
        .connect(),
    [token]
  );
  const chat = useMemo(() => ws.subscribe('chat'), [ws]);

  useEffect(() => {
    async function getMessages() {
      const dataMessages = await api.get('/messages');

      setMessages(dataMessages.data);
    }

    getMessages();

    chat.emit('connectedUser', {
      id,
      avatar,
      name,
    });
  }, [chat, id, name, avatar]);

  useEffect(() => {
    if (chatBox.current.offsetHeight < chatContent.current.offsetHeight) {
      chatBox.current.scrollTop = chatBox.current.scrollHeight;
    }

    chat.on('connectedUser', data => {
      const usersArray = Object.values(data);
      setUsers(
        usersArray.sort(a => {
          if (a.id === id) return -1;
          return 1;
        })
      );
    });

    chat.on('message', data => {
      setMessages([...messages, data]);
      chatBox.current.scrollTop = chatBox.current.scrollHeight;
    });
  }, [chat, messages]); //eslint-disable-line

  function handleSendMessage(event) {
    event.preventDefault();

    chat.emit('message', {
      user: {
        id,
        avatar,
        name,
      },
      message,
    });

    setMessage('');
  }

  function handleLogout() {
    dispatch(signOutRequest());
  }

  return (
    <Container>
      <ChatWrapper>
        <Members>
          <h4>Usuários online: {users.length}</h4>
          {users.map(user => (
            <div key={user.id}>
              <img src={user.avatar} alt="Foto do Membro" />
              <h6>{user.name}</h6>
            </div>
          ))}
        </Members>
        <ChatArea>
          <header>
            <h4>Mensagens</h4>
            <button type="button" onClick={handleLogout}>
              Sair
            </button>
          </header>
          <main ref={chatBox}>
            <div ref={chatContent}>
              {messages.map(msg => (
                <ChatMessage key={msg.id} me={msg.user.id === id}>
                  <img src={msg.user.avatar} alt="Foto do Membro" />
                  <div>
                    <h6>{msg.user.name}</h6>
                    <p>{msg.message}</p>
                  </div>
                </ChatMessage>
              ))}
            </div>
          </main>
          <footer>
            <form onSubmit={handleSendMessage}>
              <input
                type="text"
                name="message"
                value={message}
                onChange={event => setMessage(event.target.value)}
                placeholder="Digite alguma coisa..."
              />
              <button type="submit">
                <MdSend size={20} color="#fff" />
              </button>
            </form>
          </footer>
        </ChatArea>
      </ChatWrapper>
    </Container>
  );
}
