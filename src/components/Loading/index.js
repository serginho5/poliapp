import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Loader } from './styles';

const Loading = () => (
  <Loader>
    <FaSpinner />
  </Loader>
)

export default Loading;
