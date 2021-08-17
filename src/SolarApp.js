import React, { useState } from 'react';
import styled from '@emotion/styled';
import { quickSort } from 'utils';
import { TIME_FORMAT } from 'utils/constants';
import { ResultFields } from 'components/ResultFields';
import { Timer } from 'components/Timer';
import { Form } from 'components/Form';

export default function SolarApp() {
  const [sorted, setSorted] = useState([]);

  const handleSubmit = value => {
    setSorted(quickSort(value));
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
