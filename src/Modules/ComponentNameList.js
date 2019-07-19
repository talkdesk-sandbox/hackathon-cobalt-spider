import React from 'react';
import { List, Chip } from 'cobalt-react-components';
import '../styles.css';


function processChips(states) {
  if(states.indexOf('breakingChange') !== -1) {
    return <Chip danger={true} >Breaking Change</Chip>
  } else if (states.indexOf('changed') !== -1 || states.indexOf('fixed') !== -1){
    return <Chip warning={true}>Warning</Chip>
  } else {
    return <Chip success={true}>Success</Chip>
  }
}

function processList(compList, onClick, selected) {
  return compList.map((comp, index) => {
    return(
      <List.Item key={index} onClick={onClick} active={comp.name === selected}>
        <List.Item.Content truncated>{comp.name}</List.Item.Content>
        <List.Item.Content minimal>
          {processChips(comp.states)}
        </List.Item.Content>
      </List.Item>
    )
  });
}

const ComponentNameList = ({compList, onClick, selected}) => {
  return (
    <List>
      {processList(compList, onClick, selected)}
    </List>
  );
}

export default ComponentNameList;
