import React from 'react';
import { Chip, H1, Header, Paragraph, Image, Media } from 'cobalt-react-components';
import '../styles.css';

const HomeHeader = () => {
  return (
    <Header>
      <Header.Heading>
        <Header.Title>
          <H1>Cobalt Spider</H1>
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
          height={45}
        />
        <p className="co--microcopy" style={{marginBottom: 0}}>
        Current Version
        </p>
        <Chip info large>
          {`v${window.COBALT_VERSION}`}
        </Chip>
      </Media>
      </Header.Actions>
    </Header>
  );
}

export default HomeHeader;
