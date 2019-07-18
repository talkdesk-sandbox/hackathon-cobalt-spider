import React from 'react';
import { Chip, Icon, H1, Header, Paragraph, Text } from 'cobalt-react-components';
import '../styles.css';

const HomeHeader = () => {
  return (
    <Header>
      <Header.Heading>
        <Header.Title>
          <H1>Spider Apps</H1>
        </Header.Title>
        <Header.Description>
          <Paragraph>Centralized place to view which projects are using Cobalt Design, the version they're on, which components are (or not) up-to-date.</Paragraph>
        </Header.Description>
      </Header.Heading>
      <Header.Actions>
        <Text microcopy alignRight>
          Cobalt Current Version<br />
          <Chip success large>
            <Icon name={Icon.OFFER}></Icon>
            {`v${window.COBALT_VERSION}`}
          </Chip>
        </Text>
      </Header.Actions>
    </Header>
  );
}

export default HomeHeader;
