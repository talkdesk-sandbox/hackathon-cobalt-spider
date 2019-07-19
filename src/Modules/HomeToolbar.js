import React from 'react';
import { Button, Color, Grid, Icon, Paragraph, Search, Toolbar } from 'cobalt-react-components';
import '../styles.css';

const onSearch = () => {} // TODO

const onClick = () => {} // TODO

const HomeToolbar = ({ projects = [] }) => {
  return (
    <Toolbar backgroundColor={Color.background.gray[100]}>
      <Grid.Group horizontalGutters={Grid.Group.HALF_HORIZONTAL_GUTTERS}>
        <Grid.Column pushVcenter>
          <Paragraph><strong>{projects.length}</strong> applications</Paragraph>
        </Grid.Column>
        <Grid.Column all='min'>
          <Search
            small
            placeholder="Search by project"
            onSearch={onSearch} />
        </Grid.Column>
        <Grid.Column all='min' pushVcenter>
          <Button
            small
            onClick={onClick}>
            <Icon name={Icon.FILTER_LIST} />
            <span>Filters</span>
          </Button>
        </Grid.Column>
      </Grid.Group>
    </Toolbar>
  )
}

export default HomeToolbar;
