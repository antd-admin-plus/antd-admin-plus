// import {  getTwoToneColor, setTwoToneColor } from '@ant-design/icons';
import { Card } from 'antd';
import { ThemeType } from '@ant-design/icons-svg/lib/types';
import * as React from 'react';
import * as AntdIcons from '@ant-design/icons';

let allIcons = AntdIcons

export default function Icons() {
  return (
    <div style={{ color: 'black', maxHeight: '700px', overflow: 'auto' }}>
      <Card
        hoverable
        style={{borderLeftColor: '#0b49e7', borderLeftWidth: '5px', borderRadius: '5px' }}
        title={<a href="https://ant.design/components/icon/" rel="noreferrer" target="_blank">Antd icons</a>}
      >
        <pre className="language-bash">
          <code><span className="token function">npm</span> <span className="token function">install</span> --save @ant-design/icons</code>
        </pre>
      </Card>    
      <AllIcon />     
    </div>
  )
}

const AllIcon = () => {
  const [currentTheme, setCurrentTheme] = React.useState('Outlined');
  const handleSelectChange = React.useCallback((e) => {
    const value = e.currentTarget.value;
    setCurrentTheme(value);
  }, []);
  

  const visibleIconList = React.useMemo(
    () => Object.keys(allIcons).filter(iconName => iconName.includes(currentTheme)),
    [currentTheme],
  );
  return (
    <div style={{ color: '#555' }}>
      <h1 style={{ textAlign: 'center' }}>All Icons</h1>
      <div style={{ textAlign: 'center' }}>
        <select
          name="theme-select"
          value={currentTheme}
          onChange={handleSelectChange}
        >
          <option value="Filled">Filled</option>
          <option value="Outlined">Outlined</option>
          {/*<option value="TwoTone">Two-Tone</option>*/}
        </select>
      </div>
      <div style={{display: 'flex',
            flexFlow: 'row wrap',
            width: '80vw',
            margin: 'auto'}}>
        {
          visibleIconList.map(iconName => {
            const Component = allIcons[iconName];
            return (
              <div style={{height: '90px',margin: '12px 0 16px', width: '20%', textAlign: 'center' }} key={iconName}>
                <Component style={{ fontSize: '24px' }} />
                <p style={{display: 'block', textAlign: 'center', transform: 'scale(0.83)', whiteSpace: 'nowrap' }}>{iconName}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}