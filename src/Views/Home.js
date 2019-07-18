import React from 'react';
import { Color, Grid, Page } from 'cobalt-react-components';
import HomeHeader from '../Modules/HomeHeader';
import HomeToolbar from '../Modules/HomeToolbar';
import HomeTable from '../Modules/HomeTable';
import '../styles.css';


const Home = () => {
  return (
    <Page backgroundColor={Color.background.gray[200]}>
      <HomeHeader />
      <HomeToolbar />
      <Page.Content>
        <Grid fullWidth>
          <HomeTable />
        </Grid>
      </Page.Content>
    </Page>
  );
}

export default Home;
