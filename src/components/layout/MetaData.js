import React from 'react';
import Helmet from 'react-helmet';

const MetaData = ({title}) => {
  return (
    <Helmet>
        <title>{`ShopIt-${title}`}</title>
    </Helmet>
  )
}

export default MetaData