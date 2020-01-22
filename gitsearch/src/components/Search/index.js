import React from 'react';

import { Form, Input } from '@rocketseat/unform';

import { FaSearch } from 'react-icons/fa';

import { FormContainer, Button } from './styles';

export default function Search({
  handleSarch,
  value,
  set,
  placeholder,
  loading,
}) {
  function handleclick({ field }) {
    set ? set(field) : handleSarch(field);
  }

  function handleChange(field) {
    if (set) set(field);
  }

  return (
    <FormContainer>
      <Form onSubmit={handleclick}>
        <Input
          name="field"
          placeholder={placeholder}
          onChange={e => handleChange(e.target.value)}
        />

        <Button loading={loading} type="submit">
          <FaSearch size={18} color="#FFF" />
        </Button>
      </Form>
    </FormContainer>
  );
}
