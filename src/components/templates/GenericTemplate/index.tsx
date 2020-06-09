import React from 'react';
import './index.css';

interface Props {
  children: any; // TODO: set correct type
}

/*
  for NotFound, Login Page etc..
 */
const GenericTemplate = ({ children, ...props }: Props) => {
  return (
    <div className="Container" {...props}>
      <section className="Content">{children}</section>
    </div>
  );
};

export default GenericTemplate;
