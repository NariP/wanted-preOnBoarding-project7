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
    setSorted(value);
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
  margin: '100px auto',
  width: 600,
  borderRadius: 20,
  boxShadow: '5px 5px 15px 5px #fce4ec',
});
