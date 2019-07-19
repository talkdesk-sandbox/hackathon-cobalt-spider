import React from 'react';
import { Header, H1 } from 'cobalt-react-components';
import CardBuilder from '../Modules/CardBuilder';


const ComponentLog = ({selected, changeLog, compStatus }) => {
  const CurrentElement = compStatus.filter(el => el.name === selected);
  const hasInfo = CurrentElement[0] && CurrentElement[0].stateLength ? CurrentElement[0].stateLength : 0

  return (
    <div>
      <Header borderless transparent>
        <Header.Heading>
          <Header.Title>
            <H1>{selected}</H1>
          </Header.Title>
        </Header.Heading>
      </Header>
      {
        hasInfo.length
         ? <CardBuilder selected={selected} changeLog={changeLog}/>
        : <div>Not There</div>
      }
    </div>
  );
}

export default ComponentLog ;
