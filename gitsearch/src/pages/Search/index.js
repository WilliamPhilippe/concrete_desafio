import React, { useState } from 'react';

import { Form, Input } from '@rocketseat/unform';

import { Container, LogoContainer } from './styles';

import Logo from '../../assets/GitHub_Logo.png';

export default function Search() {
  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="Github" />
        <span>Search</span>
      </LogoContainer>

      <Form>
        <Input name="username" placeholder="Type the username..." />
      </Form>
    </Container>
  );
}
