import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Rodrigo Sakamoto</h1>
        <h2>@rodosakamoto</h2>

        <p>
          Developer at
          <a href="https://rocketseat.com.br"> @Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 09 de outubro de 1997
          </li>
        </ul>

        <Followage>
          <span>
            seguindo
            <strong> 94</strong>
          </span>
          <span>
            <strong>672 </strong>
            seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
