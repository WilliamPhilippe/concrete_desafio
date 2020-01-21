import React from 'react';

import { FaAd } from 'react-icons/fa';
import {
  Container,
  SideContainer,
  Avatar,
  Info,
  Details,
  Item,
  RepoContainer,
  Repository,
} from './styles';

import AvatarSrc from '../../assets/avatar.jpg';

export default function Profile() {
  return (
    <Container>
      <SideContainer>
        <Avatar>
          <img src={AvatarSrc} alt="avatar" />
        </Avatar>
        <Info>
          <p>Darth Vader</p>
          <span>anakinskyas</span>
        </Info>
        <Details>
          <Item>
            <FaAd />
            <span>The Galatic</span>
          </Item>
          <Item>
            <FaAd />
            <span>The Galatic</span>
          </Item>
          <Item>
            <FaAd />
            <span>The Galatic</span>
          </Item>
          <Item>
            <FaAd />
            <span>The Galatic</span>
          </Item>
          <Item>
            <FaAd />
            <span>The Galatic</span>
          </Item>
        </Details>
      </SideContainer>
      <RepoContainer>
        <FormContainer>
          <Form onSubmit={handleSarch}>
            <Input name="username" placeholder="Type the username..." />
            <button type="submit">
              <FaSearch size={18} color="#FFF" />
            </button>
          </Form>
        </FormContainer>
        <Repository>
          <p>DeathStart</p>
          <span>
            this repository has so much funck intem ins this code funcksas
          </span>
          <Item>
            <FaAd />
            <span>The Galatic</span>
          </Item>
        </Repository>
        <Repository>
          <p>DeathStart</p>
          <span>
            this repository has so much funck intem ins this code funcksas
          </span>
          <Item>
            <FaAd />
            <span>The Galatic</span>
          </Item>
        </Repository>
        <Repository>
          <p>DeathStart</p>
          <span>
            this repository has so much funck intem ins this code funcksas
          </span>
          <Item>
            <FaAd />
            <span>The Galatic</span>
          </Item>
        </Repository>
        <Repository>
          <p>DeathStart</p>
          <span>
            this repository has so much funck intem ins this code funcksas
          </span>
          <Item>
            <FaAd />
            <span>The Galatic</span>
          </Item>
        </Repository>
        <Repository>
          <p>DeathStart</p>
          <span>
            this repository has so much funck intem ins this code funcksas
          </span>
          <Item>
            <FaAd />
            <span>The Galatic</span>
          </Item>
        </Repository>
        <Repository>
          <p>DeathStart</p>
          <span>
            this repository has so much funck intem ins this code funcksas
          </span>
          <Item>
            <FaAd />
            <span>The Galatic</span>
          </Item>
        </Repository>
        <Repository>
          <p>DeathStart</p>
          <span>
            this repository has so much funck intem ins this code funcksas
          </span>
          <Item>
            <FaAd />
            <span>The Galatic</span>
          </Item>
        </Repository>
        <Repository>
          <p>DeathStart</p>
          <span>
            this repository has so much funck intem ins this code funcksas
          </span>
          <Item>
            <FaAd />
            <span>The Galatic</span>
          </Item>
        </Repository>
      </RepoContainer>
    </Container>
  );
}
