import React from 'react';
import { Chip, Icon, H1, Header, Paragraph, Image, Media } from 'cobalt-react-components';
import getMajorVersion from '../helpers/getMajorVersion'
import '../styles.css';

const ComponentHeader = ({ appName, description, repoVersion }) => {
  const versionLag = getMajorVersion(window.COBALT_VERSION) - getMajorVersion(repoVersion);

  const statusProps = (versionLag) => (
    {
      success: versionLag === 0,
      warning: versionLag > 0 && versionLag <= 2,
      danger: versionLag > 2,
    }
  )

  return (
    <Header withBackNavigation onBack={() => { window.history.back() }}>
      <Header.Heading>
        <Header.Title>
          <H1>{appName}</H1>
          <Header.Options>
            <Chip {...statusProps(versionLag)}>{repoVersion}</Chip>
          </Header.Options>
        </Header.Title>
        <Header.Description>
          <Paragraph>{description}</Paragraph>
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

export default ComponentHeader;
