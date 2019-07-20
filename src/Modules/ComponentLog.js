import React from 'react';
import { Header, H2, EmptyWidget, Color, Icon } from 'cobalt-react-components';
import CardBuilder from '../Modules/CardBuilder';


const ComponentLog = ({componentStates, selected }) => {
  const [currentElement] = componentStates.filter(el => el.name === selected);
  const hasStates = (currentElement && currentElement.states) || false

  return (
    <>
    {
      hasStates
        ? <>
          <Header borderless transparent>
            <Header.Heading>
              <Header.Title>
                <H2>{selected}</H2>
              </Header.Title>
            </Header.Heading>
          </Header>
          <CardBuilder selected={selected} currentElement={currentElement}/>
        </>
        : <EmptyWidget
          title='Well Done'
          message={`This component is up to date!`}>
          <Icon name={Icon.CHECK} large color={Color.green[500]} />
        </EmptyWidget>
    }
    </>
  );
}

export default ComponentLog ;
