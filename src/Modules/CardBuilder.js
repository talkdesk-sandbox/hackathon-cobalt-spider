import React from 'react';
import { Header, H3, Card, List,  Chip, Link } from 'cobalt-react-components';
import '../styles.css';

function processMessage(message) {
  const messageParts = message.split('`');
  return messageParts.map((part, index) => {
    return index % 2 ?  <Chip info small key={index}>{part}</Chip> : part
  })
}

const logEntry = (entry, index)=> {
  const {message, version} = entry
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

const CardBuilder = ({selected, changeLog}) => {
  const selectedLog = changeLog[selected]
  const logTypes = Object.keys(selectedLog)

  return (
    logTypes.map((type, index ) => {
      if (!selectedLog[type].length) return null;

      return (
        <Card key={index}>
          <Header borderless transparent>
            <Header.Heading>
              <Header.Title>
              <H3 asH4>{type}</H3>
            </Header.Title>
            </Header.Heading>
          </Header>
          <Card.Content>
            <List divided>
              {selectedLog[type].map((entry, index) => {
                return logEntry(entry, index)
              })}
            </List>
          </Card.Content>
        </Card>
      )
      }
    )
  )
}

export default CardBuilder
