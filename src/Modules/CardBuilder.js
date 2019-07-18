import React from 'react';
import { Header, H3, Card, List,  Chip, Link } from 'cobalt-react-components';
import '../styles.css';


const ChangeLog = {
  "Dropdown": {
    "Added": [
      {
        "version":"v21.0.0",
        "pr": "345",
        "msg": "This is was added"
      },
      {
        "version":"v20.0.0",
        "pr": "857",
        "msg": "This is was added 2"
      },
    ],
    "Breaking Change": [
      {
        "version":"v21.0.0",
        "pr": "345",
        "msg": "This is was broken"
      },
      {
        "version":"v20.0.0",
        "pr": "857",
        "msg": "This is was broken"
      }
    ]
  },
  "List": {
    "Added": [
      {
        "version":"v21.0.0",
        "pr": "345",
        "msg": "This is was added"
      },
      {
        "version":"v20.0.0",
        "pr": "857",
        "msg": "This is was added"
      },
    ],
    "Breaking Change": [
      {
        "version":"v21.0.0",
        "pr": "345",
        "msg": "This is was broken"
      },
      {
        "version":"v20.0.0",
        "pr": "857",
        "msg": "This is was broken"
      }
    ]
  },
  "Button": {
    "Added": [
      {
        "version":"v21.0.0",
        "pr": "345",
        "msg": "This is was added"
      },
      {
        "version":"v20.0.0",
        "pr": "857",
        "msg": "This is was added 2"
      },
    ],
    "Breaking Change": [
      {
        "version":"v21.0.0",
        "pr": "345",
        "msg": "This is was broken"
      },
      {
        "version":"v20.0.0",
        "pr": "857",
        "msg": "This is was broken"
      }
    ]
  }
}


const logEntry = (entry, index)=> {
  const {msg, version} = entry
  const TAG_LINK = `https://github.com/Talkdesk/cobalt-react-components/releases/tag/${version}`

  return (
    <List.Item key={index} active>
      <List.Item.Content>{msg}</List.Item.Content>
      <List.Item.Content minimal>
        <Link href={TAG_LINK}>
          <Chip feature>{version}</Chip>
        </Link>
      </List.Item.Content>
    </List.Item>
  )
}

const CardBuilder = ({selected}) => {
  const selectedLog = ChangeLog[selected]
  const logTypes = Object.keys(selectedLog)

  return (
    logTypes.map((type, index ) => {
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
    })
  )
}

export default CardBuilder
