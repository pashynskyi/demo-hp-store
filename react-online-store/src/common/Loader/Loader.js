import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div>
      <Spinner animation="border" />
      <h3>Please wait a minute. The server was started.</h3>
    </div>
  )
}

export default Loader;