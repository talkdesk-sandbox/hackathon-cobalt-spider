import React from 'react';
import { Link } from 'react-router-dom';
import { Chip, H4, Icon, Paragraph, Table } from 'cobalt-react-components';
import getMajorVersion from '../helpers/getMajorVersion'
import '../styles.css';
import { projects } from '../api/index';

const onSortDirectionChange = () => {} // TO DO

const RepoRow = ({title, description, link, repoVersion, repoLink}) => {
  const versionLag = getMajorVersion(window.COBALT_VERSION) - getMajorVersion(repoVersion);

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
        <a href={repoLink} className="co-button co--small" target="_blank" rel="noopener noreferrer">
          <Icon name={Icon.OPEN_IN_NEW} />
        </a>
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
        {
          projects.map((proj, index) => {
            return (
              <RepoRow
              title={proj.projectName}
              description='Description 1'
              link={`project-components/${proj.repoPartial}`}
              repoLink={proj.repoLink}
              repoVersion={proj.cobaltReactVersion}
              key={index}
              />
            )
          })
        }
      </Table.Body>
    </Table>
  );
}

export default HomeTable;
