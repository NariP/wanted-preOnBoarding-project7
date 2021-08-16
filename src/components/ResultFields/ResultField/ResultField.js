import React from 'react';

export default function ResultField({ value }) {
  return (
    <div>
      {value?.map(item => (
        <div>{item}</div>
      ))}
    </div>
  );
}
