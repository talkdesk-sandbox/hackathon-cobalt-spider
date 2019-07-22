import React from 'react';
import { Header, H3, Card, List, Chip, Link } from 'cobalt-react-components';
import '../styles.css';

function processMessage(message) {
  const messageParts = message.split('`');
  return messageParts.map((part, index) => {
    return index % 2 ? <Chip info small key={index}>{part}</Chip> : part
  })
}

const logEntry = (entry, index) => {
  const { message, version } = entry
  const TAG_LINK = `https://github.com/Talkdesk/cobalt-react-components/releases/tag/v${version}`

  return (
    <List.Item key={index} active>
      <List.Item.Content>{processMessage(message)}</List.Item.Content>
      <List.Item.Content minimal>
        <Link href={TAG_LINK} target="_blank">
          <Chip feature>{version}</Chip>
        </Link>
      </List.Item.Content>
    </List.Item>
  )
}
function lowerCase(str) {
  return str.toLowerCase();
}

function upperCase(str) {
  return str.toUpperCase();
}

function unCamelCase(str) {
  str = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2');
  str = str.toLowerCase(); //add space between camelCase text
  return lowerCase(str).replace(/^\w|\s\w/g, upperCase)
}

const CardBuilder = ({ currentElement }) => {
  const ElmStates = currentElement.states


  return (
    <>
      {
        Object.keys(ElmStates).map((type, index) => {
          return (
            <Card key={index}>
              <Header borderless transparent>
                <Header.Heading>
                  <Header.Title>
                    <H3 asH4>{unCamelCase(type)}</H3>
                  </Header.Title>
                </Header.Heading>
              </Header>
              <Card.Content>
                <List divided>
                  {ElmStates[type].map((entry, index) => {
                    return logEntry(entry, index)
                  })}
                </List>
              </Card.Content>
            </Card>
          )
        })
      }
    </>
  )
}

export default CardBuilder
