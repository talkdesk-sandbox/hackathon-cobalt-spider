import React from 'react';
import { Color, Grid, Page } from 'cobalt-react-components';
import HomeHeader from '../Modules/HomeHeader';
import HomeToolbar from '../Modules/HomeToolbar';
import HomeTable from '../Modules/HomeTable';
import '../styles.css';
import { projectAPI, repoAPI } from '../api/index';

function getVersion(data) {
  return '27.0.0'
  // const { devDependencies } = JSON.parse(window.atob(data.content));

  // if (!devDependencies) return null;

  // return devDependencies.hasOwnProperty('cobalt-react-components')
  //   ? devDependencies['cobalt-react-components']
  //   : null;
}

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState = () => {
    return { projects: [] };
  }

  getProjectList = () => {
    projectAPI.then((projs) => {
      let validProjects = [];

      projs.forEach((proj) => {
        repoAPI('Talkdesk', proj.name).getContents('master', 'package.json')
        .then(({ data }) => {
          let version = getVersion(data);

          if (!version) return;

          proj.cobalt_version = getVersion(data);
          validProjects.push(proj);
          this.setProjectListState(validProjects);
        }, (err) => {
          console.log(err);
          proj.cobalt_version = '0.0.0';
        });
      });
    })
  }

  setProjectListState = (projects) => {
    this.setState({ projects });
  }

  componentDidMount() {
    this.getProjectList();
  }

  render() {
    return (
      <Page backgroundColor={Color.background.gray[200]}>
        <HomeHeader />
        <HomeToolbar />
        <Page.Content>
          <Grid fullWidth>
            <HomeTable projects={this.state.projects} />
          </Grid>
        </Page.Content>
      </Page>
    );
  }
}

export default Home;
