import * as React from 'react';
export const renderExpression = (
  config:{
    label: string,
    express: string,
    input: any,
  },
  aOptions:{
    path:string
  }
) => {
  const inputStr = config.express.split('.')[0] // 对象为第一个单词
  const func = new Function('' + inputStr, 'return ' + config.express);
  return (
    <div>
      <span style={{marginRight: '10px'}}>{config.label}:</span>
      <span style={{marginRight: '10px',color: 'red'}}>{config.express}</span>
      <span style={{marginRight: '10px',color: 'blue', fontWeight: 'bold'}}>{JSON.stringify(func(config.input))}</span>
      {aOptions&&<a href={`https://github.com/robin2017/leetcode2021/blob/main/src/${aOptions.path}`} target='_blank' style={{fontSize: '12px', fontWeight: 'bold'}}>[code]</a>}
    </div>
  );
};
