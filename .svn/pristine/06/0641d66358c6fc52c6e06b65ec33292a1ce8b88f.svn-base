import React, { PureComponent } from 'react';
import DBubble from './index.js';
import dataSource from './defaultData.js';

export default class demo extends PureComponent {
  render() {
    return (
      <DBubble
        width={'100%'}
        height={'100%'}
        padding={`8px 18px  1px 6px`}
        gridPadding={20}
        colorArr={['#ccc', '#666', '#000', '#478', '#186', '#379']}
        valueFont={{
          color: '#741',
          size: 18,
          family: 'Segoe UI',
          weight: '600',
          transform: 'rotate(45deg)',
        }}
        labelFont={{
          color: '#741',
          size: 18,
          family: 'Segoe UI',
          weight: 900,
        }}
        data={dataSource}
      />
    );
  }
}
