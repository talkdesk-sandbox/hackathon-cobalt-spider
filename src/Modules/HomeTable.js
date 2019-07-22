import React from 'react';
import { Link } from 'react-router-dom';
import { Chip, H4, Icon, Paragraph, Table } from 'cobalt-react-components';
import getMajorVersion from '../helpers/getMajorVersion'
import semver from 'semver'
import '../styles.css';



const RepoRow = ({ title, description, link, repoVersion, repoLink, status }) => {
  const versionLag = getMajorVersion(window.COBALT_VERSION) - getMajorVersion(repoVersion);

  const statusProps = (versionLag) => (
    {
      success: versionLag === 0,
      warning: versionLag > 0 && versionLag <= 2,
      danger: versionLag > 2,
    }
  )

  return (
    <Table.Row>
      <Table.Data>
        <Link to={link}>
          <H4>
            {title}
          </H4>
          <Paragraph truncated microcopy>{description}</Paragraph>
        </Link>
      </Table.Data>
      <Table.Data>
        <Chip {...statusProps(versionLag)}>{repoVersion}</Chip>
      </Table.Data>
      <Table.Data>
        <Chip {...statusProps(versionLag)}>{status}</Chip>
      </Table.Data>
      <Table.ActionData>
        <a href={repoLink} className="co-button co--small" target="_blank" rel="noopener noreferrer">
          <Icon name={Icon.OPEN_IN_NEW} />
        </a>
        <Link to={link} className='co-button co--primary co--small co--invert'>View details</Link>
      </Table.ActionData>
    </Table.Row>
  )
}

class HomeTable extends React.Component {
  constructor(props) {
    super(props)
    let originalData = this.props.projects.map(element => {
      const versionLag = getMajorVersion(window.COBALT_VERSION) - getMajorVersion(element.cobalt_version || '27.0.0');
      const stateText = versionLag === 0
        ? 'Updated'
        : versionLag <= 2
          ? 'Lagging'
          : 'Outdated'
      element['status'] = stateText
      return element
    }).slice().sort((a, b) => semver.gt(a['cobalt_version'], b['cobalt_version']) ? -1 : 1)

    this.state = {
      tableData: originalData,
      originalData: originalData
    }
  }

  createRow = (element, index) => {
    return (
      <RepoRow
        title={element.full_name}
        description={element.description || ''}
        link={`project-components/${element.name}`}
        repoLink={element.html_url}
        repoVersion={element.cobalt_version || '27.0.0'}
        status={element.status}
        key={index}
      />
    )
  }

  onSortDirectionChange = (propName) => (sortDirection) => {
    const reorderedTable = this.sortData(propName, sortDirection)
    this.setState({
      tableData: reorderedTable
    })

  }

  sortByInteger(propName) {
    let reorderedTableData = this.state.originalData.slice()

    reorderedTableData.sort((a, b) => semver.lt(a[propName], b[propName]) ? -1 : 1)

    return reorderedTableData
  }

  sortByString(propName) {
    let reorderedTableData = this.state.originalData.slice()
    reorderedTableData.sort(function (a, b) {
      return a[propName].localeCompare(b[propName])
    })

    return reorderedTableData
  }

  sortData(propName, sortDirection) {
    if (sortDirection === Table.Header.SORT_DIRECTION.DEFAULT) {
      return this.state.originalData
    }

    let reorderedTable
    switch (propName) {
      case 'cobalt_version':
        reorderedTable = this.sortByInteger(propName)
        break
      default:
        reorderedTable = this.sortByString(propName)
    }

    return sortDirection === Table.Header.SORT_DIRECTION.UP ? reorderedTable : reorderedTable.reverse()
  }

  render() {
    return (
      <Table hoverRows sortable bubbleRows>
        <Table.Head>
          <Table.Row>
            <Table.Header
              sortable
              defaultSortDirection={Table.Header.SORT_DIRECTION.DEFAULT}
              onSortDirectionChange={this.onSortDirectionChange('full_name')}>Project</Table.Header>
            <Table.Header
              sortable
              defaultSortDirection={Table.Header.SORT_DIRECTION.DOWN}
              onSortDirectionChange={this.onSortDirectionChange('cobalt_version')}>Current version</Table.Header>
            <Table.Header
              sortable
              defaultSortDirection={Table.Header.SORT_DIRECTION.DEFAULT}
              onSortDirectionChange={this.onSortDirectionChange('status')}>Status</Table.Header>
            <Table.Header>
            </Table.Header>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {
            this.state.tableData.map((proj, index) => (
              this.createRow(proj, index)
            ))
          }
        </Table.Body>
      </Table>
    )
  }
}

export default HomeTable;
