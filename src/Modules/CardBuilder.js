import React from 'react';
import { Header, H3, Card, List,  Chip, Link } from 'cobalt-react-components';
import '../styles.css';

// function processMessage() {

// }

const logEntry = (entry, index)=> {
  const {message, version} = entry
  const TAG_LINK = `https://github.com/Talkdesk/cobalt-react-components/releases/tag/${version}`

  return (
    <List.Item key={index} active>
      <List.Item.Content>{message}</List.Item.Content>
      <List.Item.Content minimal>
        <Link href={TAG_LINK}>
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
      if (selectedLog[type].length) {
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
      } else {
        return null
      }
    })
  )
}

export default CardBuilder
