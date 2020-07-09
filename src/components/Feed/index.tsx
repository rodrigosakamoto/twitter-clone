import React from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      {Array.from(Array(15).keys()).map(n => (
        <Tweets key={n}>
          <Tweet />
        </Tweets>
      ))}
    </Container>
  );
};

export default Feed;
