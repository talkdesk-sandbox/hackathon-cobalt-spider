import React from 'react';
import { Chip, Icon, H1, Header, Paragraph, Text, Image, Media, H5 } from 'cobalt-react-components';
import '../styles.css';
import { H4 } from 'cobalt-react-components/dist/components/Typography/typography';

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
      <Media alignVerticalCenter>
        <Image
          src="http://cobalt.talkdeskapp.com/assets/images/logo-dark-basic.svg"
          alt="cobalt"
          height={40}
        />
        <p className="co--microcopy" style={{marginBottom: 0}}>
        Current Version
        </p>
        <Chip info>
          <Icon name={Icon.OFFER}></Icon>
          {`v${window.COBALT_VERSION}`}
        </Chip>
      </Media>
      </Header.Actions>
    </Header>
  );
}

export default HomeHeader;
