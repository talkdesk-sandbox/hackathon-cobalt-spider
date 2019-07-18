import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Chip, H4, Icon, Paragraph, Table } from 'cobalt-react-components';
import '../styles.css';

const onSortDirectionChange = () => {} // TO DO

const RepoRow = ({title, description, link, repoVersion}) => (
  <Table.Row>
    <Table.Data truncated>
      <Link to={link}>
        <H4>
          {title}
          <Chip warning>{repoVersion}</Chip>
        </H4>
        <Paragraph truncated microcopy>{description}</Paragraph>
      </Link>
    </Table.Data>
    <Table.ActionData>
      <Chip warning>Lagging</Chip>
      <Button small>
        <Icon name={Icon.OPEN_IN_NEW} />
      </Button>
      <Link to={link} className='co-button co--primary co--small co--invert'>View details</Link>
    </Table.ActionData>
  </Table.Row>
)

const HomeTable = () => {
  return (
    <Table lightBubbleRows sortable hoverRows>
      <Table.Head>
        <Table.Row>
          <Table.Header
            width={Table.Data.WIDTH[50]}
            sortable
            defaultSortDirection={Table.Header.SORT_DIRECTION.DEFAULT}
            onSortDirectionChange={onSortDirectionChange}>Project / Current Version</Table.Header>
          <Table.Header
          width={Table.Data.WIDTH[50]}>
          </Table.Header>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <RepoRow
          title='Repo 1'
          description='Description 1'
          link='/project-components/'
          repoVersion='27.0.0'
        />
        <RepoRow
          title='Repo 2'
          description='Description 2'
          link='/project-components/'
          repoVersion='26.0.0'
        />
        <RepoRow
          title='Repo 3'
          description='Description 3'
          link='/project-components/'
          repoVersion='25.0.0'
        />
        <RepoRow
          title='Repo 4'
          description='Description 4'
          link='/project-components/'
          repoVersion='24.0.0'
        />
        <RepoRow
          title='Repo 5'
          description='Description 5'
          link='/project-components/'
          repoVersion='23.0.0'
        />
      </Table.Body>
    </Table>
  );
}

export default HomeTable;
