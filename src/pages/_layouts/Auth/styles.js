import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px 0;
  background-image: linear-gradient(to bottom right, #2955d9, #977ef2);

  > div {
    width: 500px;
    color: #7c7c7c;
    background-color: #fff;
    padding: 40px;
    border-radius: 5px;
    box-shadow: 0px 6px 12px #0000001a;
    animation: fade 500ms;
    overflow: hidden;

    h2 {
      text-align: center;
      margin-bottom: 20px;
    }

    form {
      display: flex;
      flex-direction: column;

      label input,
      button {
        height: 50px;
      }

      label.avatar {
        span,
        img {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 140px;
          height: 140px;
          background-color: #eaeaea;
          text-align: center;
          margin: 0 auto;
          cursor: pointer;
          border-radius: 50%;
          object-fit: cover;
        }

        div {
          display: none;
        }
      }

      label {
        span {
          margin-bottom: 5px;
        }

        div {
          display: flex;
          justify-content: space-evenly;
          margin-bottom: 20px;
          border: 1px solid #eaeaea;
          border-radius: 5px;

          input {
            flex: 1;
            font-size: 1rem;
            padding: 0 10px;
            border: none;

            :focus {
              border: 1px solid #0597f2;
            }
          }

          button {
            border: none;
            background: none;
            padding: 0 5px;
          }
        }
      }
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      text-align: center;
      margin-top: 20px;

      > svg {
        margin-right: 10px;
      }

      &:last-child {
        margin-top: 10px;
      }
    }
  }
`;
