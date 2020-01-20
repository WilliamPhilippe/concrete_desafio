import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  background: #eee;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 100px;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;

  margin-bottom: 20px;

  img {
    width: 200px;
  }

  span {
    margin-left: 10px;
    font-size: 32px;
    font-family: 'Roboto', sans-serif;
  }
`;

export const FormContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    justify-content: center;

    input {
      background: #eee;

      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 4px;

      padding-left: 10px;

      max-width: 80%;
      width: 500px;
      height: 40px;
    }

    button {
      width: 40px;
      height: 40px;
      margin-left: 10px;

      background: #ac53f2;
      border: none;
      border-radius: 4px;

      padding: 0;

      &:hover {
        background: ${darken(0.1, '#ac53f2')};
        transition: 0.2s;
      }
    }
  }
`;
