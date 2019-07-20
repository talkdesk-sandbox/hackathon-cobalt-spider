import React from 'react';
import { List, Chip, Icon, EmptyWidget, Color } from 'cobalt-react-components';
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
  let listItems = []
  componentStates.forEach((comp, index) => {
    const {name, states} = comp
    if(states) {
      listItems.push(
        <List.Item key={index} onClick={onClick} active={name === selected}>
          <List.Item.Content truncated data-value={name}>{name}</List.Item.Content>
          {processChips(states, name)}
        </List.Item>
      )
    }
  });
  return listItems
}

const ComponentNameList = ({componentStates, onClick, selected}) => {
  if(componentStates){
    const list = (
      <List>
        {processList(componentStates, onClick, selected)}
      </List>
    )

    return (
      <>
        {
          React.Children.count(list.props.children)
            ? list
            : <EmptyWidget
              title='Awesome'
              message={`Your Project is Updated`}>
              <Icon name={Icon.CHECK} large color={Color.green[500]} />
            </EmptyWidget>
        }
      </>
    );
  }
}

export default ComponentNameList;
