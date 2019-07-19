import React from 'react';
import { Header, H2, EmptyWidget, Color, Icon } from 'cobalt-react-components';
import CardBuilder from '../Modules/CardBuilder';


const ComponentLog = ({selected, changeLog, compStatus }) => {
  const CurrentElement = compStatus.filter(el => el.name === selected);
  const hasInfo = CurrentElement[0] && CurrentElement[0].stateLength ? CurrentElement[0].stateLength : 0

  return (
    <>
    {
      hasInfo.length
        ? <>
          <Header borderless transparent>
            <Header.Heading>
              <Header.Title>
                <H2>{selected}</H2>
              </Header.Title>
            </Header.Heading>
          </Header>
          <CardBuilder selected={selected} changeLog={changeLog}/>
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
