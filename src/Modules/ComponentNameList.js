import React from 'react';
import { List, Chip } from 'cobalt-react-components';
import '../styles.css';

function returnChip(state, label, name) {
  let chipState = {}
  chipState[state]  = true

  return (
    <List.Item.Content minimal data-value={name}>
      <Chip {...chipState}>{label}</Chip>
    </List.Item.Content>
   )
}

function processChips(states, name) {
  if(states) {
    const state = Object.keys(states)[0]

    if(states[state].length) {
      if(state === 'breakingChange') {
        return returnChip('danger','Breaking Change', name)
      } else if (state === 'changed' || states === 'fixed'){
        return returnChip('warning','Warning', name)
      } else {
        return returnChip('success','Success', name)
      }
    }
  } else {
    return returnChip('success','Success', name)
  }
}

function processList(componentStates, onClick, selected) {
  return componentStates.map((comp, index) => {
    const {name, states} = comp
    return(
      <List.Item key={index} onClick={onClick} active={name === selected}>
        <List.Item.Content truncated data-value={name}>{name}</List.Item.Content>
        {processChips(states, name)}
      </List.Item>
    )
  });
}

const ComponentNameList = ({componentStates, compList, onClick, selected}) => {
  if(componentStates){
    return (
      <List>
        {processList(componentStates, onClick, selected)}
      </List>
    );
  }
}

export default ComponentNameList;
