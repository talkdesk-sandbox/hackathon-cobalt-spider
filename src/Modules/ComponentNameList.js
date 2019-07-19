import React from 'react';
import { List, Chip } from 'cobalt-react-components';
import '../styles.css';

function processList(compList, onClick, selected) {
  return compList.map((comp, index) => {
    return(
      <List.Item key={index} onClick={onClick} active={comp === selected}>
        <List.Item.Content>{comp}</List.Item.Content>
        <List.Item.Content minimal><Chip>TODO</Chip></List.Item.Content>
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
