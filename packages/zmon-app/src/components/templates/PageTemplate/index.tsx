import React from 'react';
import './index.css';
import Header from 'components/organisms/LNB';
import GNB from 'components/organisms/GNB';

interface Props {
  children: any; // TODO: set correct type
}

/*
  for Pages
 */
const PageTemplate = ({ children, ...props }: Props) => {
  return (
    <div className="Container" {...props}>
      <GNB/>
      <Header />
      <section className="Content">{children}</section>
      {/*  <Footer />*/}
    </div>
  );
};

export default PageTemplate;
