import React, { useState } from 'react';
import './App.css';
import ResultFields from 'components/ResultFields/ResultFields';
import { Timer } from 'components/Timer';
import { TIME_FORMAT } from 'constants/timeFormat';
import styled from '@emotion/styled';
import Form from 'components/Form/Form.js';

export default function SolarApp() {
  const [sorted, setSorted] = useState('');

  const handleSubmit = value => {
    const temp = value.split(',');
    // TODO: validation
    // TODO: sort
    setSorted(temp.sort((a, b) => +a - +b));
  };

  return (
    <SolarAppContainer>
      <Timer format={TIME_FORMAT.KO} />
      <Form handleSubmit={handleSubmit} />
      <ResultFields value={sorted} />
      <Timer format={TIME_FORMAT.EN} />
    </SolarAppContainer>
  );
}

const SolarAppContainer = styled.div({
  textAlign: 'center',
  margin: 'auto',
  height: '100vh',
  width: 600,
  backgroundColor: '#ffebee',
});
