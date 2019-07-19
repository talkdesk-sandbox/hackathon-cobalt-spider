import React from 'react';
import { Page, Grid } from 'cobalt-react-components';
import HomeHeader from '../Modules/HomeHeader';
import ComponentNameList from '../Modules/ComponentNameList';
import ComponentLog from '../Modules/ComponentLog';
import '../styles.css';

class ProjectComponents extends React.Component  {
  constructor(props) {
    super(props)

    this.state = {
      cobaltCurrentVersion: '27.0.0',
      ProjectVersion: '20.0.0',
      ComponentList: ['Dropdown', 'List', 'Button'],
      selected:'Dropdown'
    }
  }

  handleListSelect = (event) => {
    this.setState({ selected: event.target.innerText })
  }

  render () {
    const { ComponentList } = this.state;

    return (
      <>
        <HomeHeader />
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
                            compList={ComponentList}
                            selected={this.state.selected}
                            />
                        </Grid.Column>
                      </Grid.Group>
                    </Grid>
                  </div>
                </Grid.Column>
                <Grid.Column all='70'>
                  <div className="cs--scroll-hack co--bg-gray-200">
                    <Grid fullWidth>
                      <ComponentLog selected={this.state.selected}/>
                    </Grid>
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
