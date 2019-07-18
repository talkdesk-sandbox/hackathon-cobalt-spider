import React from 'react';
import { Header, H3, Card, Checkbox, List,  Chip, Link } from 'cobalt-react-components';
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


const logEntry = (msg, pr, version, index)=> {
  const TAG_LINK = `https://github.com/Talkdesk/cobalt-react-components/releases/tag/${version}`
  return (
    <List.Item id={index} key={index}>
      <List.Item.Content minimal>
        <Checkbox id={index + pr + ''} value={pr} onChange={() => {}}></Checkbox>
      </List.Item.Content>
      <List.Item.Content>{msg}</List.Item.Content>
      <List.Item.Content minimal>
        <Link href={TAG_LINK}>
          <Chip feature>{version}</Chip>
        </Link>
      </List.Item.Content>
    </List.Item>
  )
}

class CardBuilder extends React.Component { //(selected)
  constructor(props) {
    super(props)
    this.state = {
      selectedCheckboxes: []
    }
  }


  handleChecklists = () => {
    console.log('handle')
//     const checkbox = event.target.value
//     const isChecked = this.state.selectedCheckboxes[checkbox] ? false : true
//     let formatCheck = { id: checkbox, state: isChecked}
// //
//     this.setState( prevState => ({
//       selectedCheckboxes: [...prevState.selectedCheckboxes, formatCheck]
//     }))
  }

  render(){
    const selectedLog = ChangeLog[this.props.selected]
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
                  const {msg, pr, version} = entry
                  return logEntry(msg, pr, version, index)
                })}
              </List>
            </Card.Content>
          </Card>
        )
      })
    )
  }
}

export default CardBuilder






// class LogControler extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       selectedCheckboxes: []
//     }
//   }

//   handleChecklists = (event) => {
//     const checkbox = event.target.value
//     const isChecked = this.state.selectedCheckboxes[checkbox] ? false : true
//     let formatCheck = { id: checkbox, state: isChecked}

//     this.setState( prevState => ({
//       selectedCheckboxes: [...prevState.selectedCheckboxes, formatCheck]
//     }))
//   }

//   render() {
//     console.log(this.state.selectedCheckboxes);
//     return (
//       processLog(this.props.selected, this.handleChecklists)
//     )
//   }
// }
