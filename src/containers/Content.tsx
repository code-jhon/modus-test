import React from 'react';
import Banner from '../components/Banner';

const Content: React.FC = () => {
  const [imageParam, setImageParam] = React.useState<string>("store");
  return <Banner imageParam={imageParam} />
}

export default Content;