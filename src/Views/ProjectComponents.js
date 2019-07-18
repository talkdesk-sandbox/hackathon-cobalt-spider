import React from 'react';
import '../styles.css';
import { components } from '../api/index';

const ProjectComponents = ({ match: { params: { id } } }) => {
  console.log(components);

  return (
    <div className="cs-component-list">
      ProjectComponents
    </div>
  );
}

export default ProjectComponents;
