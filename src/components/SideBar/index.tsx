import React from 'react';
import StickyBox from 'react-sticky-box';

import News from '../News';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SerachIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SerachIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Beatriz Ujiie"
                nickname="@captain_mirai"
              />,
              <FollowSuggestion name="Mallu" nickname="@malluchan_bigu" />,
              <FollowSuggestion name="Manu" nickname="@ah_nuenu" />,
              <FollowSuggestion name="Aristeu" nickname="@linelsinho_bigode" />,
              <FollowSuggestion name="Nana" nickname="@izi_momoin" />,
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="O que está acontecendo"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
