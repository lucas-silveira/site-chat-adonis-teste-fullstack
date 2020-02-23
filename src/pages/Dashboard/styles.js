import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  height: 100%;
  animation: fade 500ms;
  overflow: hidden;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const ChatWrapper = styled.div`
  display: flex;
  height: 100%;

  h4 {
    color: var(--secondary-color);
  }
`;

export const Members = styled.div`
  flex: 20% 0 0;
  height: 50%;
  background-color: #fff;
  padding: 20px;
  margin-right: 20px;
  border-radius: 5px;
  box-shadow: 0px 6px 12px #0000001a;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
    background: #fff;
    border-radius: 0 5px 5px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--secondary-color);
    border-radius: 10px;
    -webkit-border-radius: 10px;
  }

  h4 {
    margin-bottom: 20px;
  }

  > div {
    display: flex;
    margin-bottom: 10px;

    img {
      flex: 40px 0 0;
      width: 40px;
      height: 40px;
      margin-right: 10px;
      border-radius: 50%;
      object-fit: cover;
    }

    h6 {
      font-size: 1rem;
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const ChatArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 6px 12px #0000001a;
  overflow: hidden;

  header {
    display: flex;
    justify-content: space-between;
    padding: 20px;

    button {
      color: #f24c3d;
      background: none;
      font-size: 1rem;
      font-weight: 700;
      border: none;
    }
  }

  main {
    flex: 1;
    padding: 0 20px;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 10px;
      background: #fff;
      border-radius: 0 5px 5px 0;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--secondary-color);
      border-radius: 10px;
      -webkit-border-radius: 10px;
    }

    > div {
      display: flex;
      flex-direction: column;
    }
  }

  footer {
    padding: 10px 20px;
    background-color: #f5f5f5;
    border-top: 1px solid #ccc;

    form {
      display: flex;
      align-items: center;

      input {
        flex: 1;
        height: 40px;
        font-size: 1rem;
        padding: 0 10px;
        margin-right: 10px;
        border-radius: 5px;
        border: 1px solid #eaeaea;
      }

      button {
        display: flex;
        width: 40px;
        height: 40px;
        justify-content: center;
        color: #fff;
        background-color: var(--secondary-color);
        border: none;
        border-radius: 50%;
      }
    }
  }
`;

export const ChatMessage = styled.div`
  display: flex;
  align-self: ${props => (props.me ? 'flex-end' : 'flex-start')};
  background-color: #f5f5f5;
  padding: 10px;
  margin-bottom: 14px;
  border-radius: 5px;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
    object-fit: cover;
  }

  > div {
    h6 {
      color: var(--secondary-color);
      font-size: 1rem;
    }
  }
`;
