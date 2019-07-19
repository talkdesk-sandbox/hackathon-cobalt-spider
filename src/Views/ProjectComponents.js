import React from 'react';
import components from '../api/components'
import changeLog from '../api/changelog'
import { Page, Grid } from 'cobalt-react-components';
import ComponentHeader from '../Modules/ComponentHeader';
import ComponentNameList from '../Modules/ComponentNameList';
import ComponentLog from '../Modules/ComponentLog';
import '../styles.css';

function processComponentStatus(compList, log) {
  if (log && compList) {
    let compStates = []
    for ( let i = 0; i < compList.length; i++ ) {
      const compName = compList[i]
      const compEntrys = log[compName]
      const entryTypes = Object.keys(compEntrys)
      const entrysWithContent = entryTypes.filter( item => compEntrys[item].length)

      compStates.push({ 'name': compName, 'states': entrysWithContent ? entrysWithContent : undefined, stateLength: entrysWithContent })
    }

    return compStates
  }
}

class ProjectComponents extends React.Component  {
  constructor(props) {
    super(props)

    this.state = {
      cobaltCurrentVersion: '27.0.0',
      CompListStatus: processComponentStatus(components, changeLog),
      selected: components[6],
      project: {}
    }
  }

  componentDidMount () {
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
      }
    })
  }

  handleListSelect = (event) => {
    this.setState({ selected: event.target.innerText })
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
                            compList={CompListStatus}
                            selected={this.state.selected}
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
                          changeLog={changeLog}
                          compStatus={CompListStatus}/>
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
