import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Chip, H4, Icon, Paragraph, Table } from 'cobalt-react-components';
import getMajorVersion from '../helpers/getMajorVersion'
import '../styles.css';

const COBALT_VERSION = '27.0.0'

const onSortDirectionChange = () => {} // TO DO

const RepoRow = ({title, description, link, repoVersion}) => {
  const versionLag = getMajorVersion(COBALT_VERSION) - getMajorVersion(repoVersion);

  const statusProps = (versionLag) => (
    {
      success: versionLag === 0,
      warning: versionLag > 0 && versionLag <= 2,
      danger: versionLag > 2,
    }
  )

  const stateText = versionLag === 0
    ? 'Updated'
    : versionLag <= 2
      ? 'Lagging'
      : 'Outdated'

  return (
    <Table.Row>
      <Table.Data truncated>
        <Link to={link}>
          <H4>
            {title}
            <Chip {...statusProps(versionLag)}>{repoVersion}</Chip>
          </H4>
          <Paragraph truncated microcopy>{description}</Paragraph>
        </Link>
      </Table.Data>
      <Table.ActionData>
        <Chip {...statusProps(versionLag)}>{stateText}</Chip>
        <Button small>
          <Icon name={Icon.OPEN_IN_NEW} />
        </Button>
        <Link to={link} className='co-button co--primary co--small co--invert'>View details</Link>
      </Table.ActionData>
    </Table.Row>
  )
}

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
          link='#'
          repoVersion='27.0.0'
        />
        <RepoRow
          title='Repo 2'
          description='Description 2'
          link='#'
          repoVersion='26.0.0'
        />
        <RepoRow
          title='Repo 3'
          description='Description 3'
          link='#'
          repoVersion='25.0.0'
        />
        <RepoRow
          title='Repo 4'
          description='Description 4'
          link='#'
          repoVersion='24.0.0'
        />
        <RepoRow
          title='Repo 5'
          description='Description 5'
          link='#'
          repoVersion='23.0.0'
        />
      </Table.Body>
    </Table>
  );
}

export default HomeTable;
