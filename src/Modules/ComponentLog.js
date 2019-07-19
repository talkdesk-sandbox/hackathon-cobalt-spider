import React from 'react';
import { Header, H1 } from 'cobalt-react-components';
import CardBuilder from '../Modules/CardBuilder';


const ComponentLog = ({selected}) => {
  return (
    <div>
      <Header borderless transparent>
        <Header.Heading>
          <Header.Title>
            <H1>{selected}</H1>
          </Header.Title>
        </Header.Heading>
      </Header>
      <CardBuilder selected={selected} />
    </div>
  );
}

export default ComponentLog ;
