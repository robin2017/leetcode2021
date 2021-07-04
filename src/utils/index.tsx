import * as React from 'react';
export const renderExpression = (
  label: string,
  express: string,
  input: any
) => {
  const inputStr = express.split('.')[0] // 对象为第一个单词
  const func = new Function('' + inputStr, 'return ' + express);
  return (
    <div>
      <span style={{marginRight: '10px'}}>{label}:</span>
      <span style={{marginRight: '10px',color: 'red'}}>{express}</span>
      <span style={{marginRight: '10px',color: 'blue', fontWeight: 'bold'}}>{JSON.stringify(func(input))}</span>
    </div>
  );
};
