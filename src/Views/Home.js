import React from 'react';
import { Color, EmptyWidget, Grid, Icon, Loader, Page } from 'cobalt-react-components';
import HomeHeader from '../Modules/HomeHeader';
import HomeToolbar from '../Modules/HomeToolbar';
import HomeTable from '../Modules/HomeTable';
import '../styles.css';
import { projectAPI, repoAPI, userReposAPI } from '../api/index';

function getPackageVersion(deps) {
  return deps && deps.hasOwnProperty('cobalt-react-components')
    ? deps['cobalt-react-components'].split('#v')[1]
    : null;
}

function getVersion(data) {
  const { devDependencies, dependencies } = JSON.parse(window.atob(data.content));

  let devVersion = getPackageVersion(devDependencies);
  let depVersion = getPackageVersion(dependencies);

  return devVersion
    ? devVersion
    : depVersion
      ? depVersion
      : null; // TODO: change to null
}

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  validProjects = []

  getInitialState = () => {
    return {
      projects: [],
      isLoading: true,
      page: 1
    };
  }

  buildProjectList = (index) => {
    userReposAPI({
      type: 'all',
      page: index.toString()
    })
      .then((projs) => {
        projs.forEach((proj) => {
          repoAPI('Talkdesk', proj.name).getContents('master', 'package.json')
          .then(({ data }) => {
            let version = getVersion(data);

            if (!version) return;

            proj.cobalt_version = getVersion(data);
            this.validProjects.push(proj);
            this.setProjectListState(this.validProjects);

          }, (err) => {
            console.log(err);
            proj.cobalt_version = '0.0.0';
          });
      });
    })
  }

  getProjectList = () => {
    this.buildProjectList(1);
    this.buildProjectList(2);//TODO: FIX ME
  }

  setProjectListState = (projects) => {
    window.COBALT_PROJECTS = projects;
    this.setState({ projects, isLoading: false });
    window.COBALT_PROJECTS = projects;
  }

  componentDidMount() {
    this.getProjectList(1);
  }

  render() {
    return (
      <Page backgroundColor={Color.background.gray[200]}>
        <HomeHeader />
        <HomeToolbar projects={this.state.projects} />
        <Page.Content>
          {
            this.state.isLoading
            ? (
              <div className="co--push-center" style={{ height: '100%' }}>
                <Loader large>Loading...</Loader>
              </div>
            )
            : ( this.state.projects.length !== 0
              ? (
                <div className="cs--scroll-hack-list">
                  <Grid fullWidth>
                    <HomeTable projects={this.state.projects} />
                  </Grid>
                </div>
              )
              : (
                <div className="co--push-center" style={{ height: '100%' }}>
                  <EmptyWidget
                    title='Oops!'
                    message={`You either don't have the correct Github permissions or projects using Cobalt-React-Components.`}>
                    <Icon name={Icon.CLOSE_OUTLINE} large color={Color.gray[500]} />
                  </EmptyWidget>
                </div>
              )
            )
          }
        </Page.Content>
      </Page>
    );
  }
}

export default Home;
