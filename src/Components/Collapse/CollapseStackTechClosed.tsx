import React from 'react';
import Collapse from './Collapse';

interface CollapseStackTechClosedProps {
  content: JSX.Element;
}

const CollapseStackTechClosed: React.FC<CollapseStackTechClosedProps> = ({ content }) => {
  return (
    <Collapse
      title="Stack Technique"
      content={content}
      isOpen={true}
    />
  );
};

export default CollapseStackTechClosed;

