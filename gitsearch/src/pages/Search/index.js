import React, { useState } from 'react';

import { Form, Input } from '@rocketseat/unform';

import { FaSearch } from 'react-icons/fa';

import { Container, LogoContainer, FormContainer, Content } from './styles';

import Logo from '../../assets/GitHub_Logo_NEW.png';

export default function Search() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={Logo} alt="Github" />
          <span>Search</span>
        </LogoContainer>

        <FormContainer>
          <Form>
            <Input name="username" placeholder="Type the username..." />
            <button type="submit">
              <FaSearch size={18} color="#FFF" />
            </button>
          </Form>
        </FormContainer>
      </Content>
    </Container>
  );
}
