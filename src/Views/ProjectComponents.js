import React from 'react';
import components from '../api/components'
import changeLog from '../api/changelog'
import { Page, Grid } from 'cobalt-react-components';
import ComponentHeader from '../Modules/ComponentHeader';
import ComponentNameList from '../Modules/ComponentNameList';
import ComponentLog from '../Modules/ComponentLog';
import getMajorVersion from '../helpers/getMajorVersion'
import '../styles.css';

function initComponentStatus(changeLog, currentProjVersion) {
  const compList = Object.keys(changeLog)

  let newState = []
  compList.forEach((logObject) => {
    let componentObjet = {}
    componentObjet.name = logObject

    const entries = changeLog[logObject]
    const entryKeys = Object.keys(entries)

    entryKeys.forEach((entry, index) => {
      if (entries[entry].length){

        const logs = entries[entry].filter((ent) => {
          return getMajorVersion(ent.version) > getMajorVersion(currentProjVersion)
        })

        if(logs.length) {
          componentObjet.states = {}
          componentObjet.states[entryKeys[index]] = logs
        }
      }
    })
    newState.push(componentObjet)
  })

  return newState
}

class ProjectComponents extends React.Component  {
  constructor(props) {
    super(props)

    this.state = {
      cobaltCurrentVersion: '27.0.0',
      selected: components[0],
      project: {}
    }
  }

  componentWillMount () {
    let currentProject = [{
      name: 'Default project',
      description: 'Just another project',
      cobalt_version: '23.1.0'
    }]

    if (window.COBALT_PROJECTS) {
      currentProject = window.COBALT_PROJECTS.filter((project) => {
        if(project.name === this.props.match.params.id) return project
      })
    }

    this.setState({
      project: {
        name: currentProject[0].name,
        description: currentProject[0].description,
        cobaltVersion: currentProject[0].cobalt_version
      },
      CompListStatus: initComponentStatus(changeLog, currentProject[0].cobalt_version )
    })
  }

  handleListSelect = (event) => {
    let newState

    !event.target.hasAttribute('data-value')
    ? newState = event.target.parentNode.getAttribute('data-value')
    : newState = event.target.innerText

    this.setState({ selected: newState })
  }

  render () {
    const { CompListStatus, project } = this.state;

    return (
      <>
        <ComponentHeader
          appName={project.name || 'Project name'}
          description={project.description || 'description'}
          repoVersion={project.cobaltVersion || '0.0.0'}
        />
        <Page>
          <Page.Content>
            <Grid fullWidth noPadding>
              <Grid.Group>
                <Grid.Column all='30'>
                  <div className="cs--scroll-hack-sidebar">
                    <Grid>
                      <Grid.Group>
                        <Grid.Column>
                          <ComponentNameList
                            onClick={this.handleListSelect}
                            selected={this.state.selected}
                            componentStates={CompListStatus}
                            />
                        </Grid.Column>
                      </Grid.Group>
                    </Grid>
                  </div>
                </Grid.Column>
                <Grid.Column all='70'>
                  <div className="cs--scroll-hack co--bg-gray-200">
                    <div className="cs-hack-height-component-list">
                      <Grid fullWidth>
                        <ComponentLog
                          selected={this.state.selected}
                          componentStates={CompListStatus}
                        />
                      </Grid>
                    </div>
                  </div>
                </Grid.Column>
              </Grid.Group>
            </Grid>
          </Page.Content>
        </Page>
      </>
    );
  }
}

export default ProjectComponents;
