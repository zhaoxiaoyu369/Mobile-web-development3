import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { Tabs} from 'antd-mobile';
import { Grid } from 'antd-mobile';


const tabs2 = [
    { title: '推荐', sub: '1' },
    { title: '冬季', sub: '2' },
    { title: '宜家', sub: '3' },
    { title: '小清新', sub: '4' },
    { title: '小户型', sub: '5' },
    { title: '个性色彩', sub: '6' },
    { title: '彪……', sub: '7' },
  ];

  const TabExample = () => (
    <div style={{width:'100%'}} rightContent={[
        <Icon key="0" type="search" style={{ color:'#000', marginRight: '16px' }} />,
    ]}>
         
      <Tabs tabs={tabs2}
        initialPage={0}
        onChange={(tab, index) => { console.log('onChange', index, tab); }}
        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      >
        <div style={{ backgroundColor: '#fff' }}>
            <GridExample />

        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                冬季  
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                宜家
        </div>
      </Tabs>
     
    </div>
  );



  //宫格  
  const data1 = Array.from(new Array(6)).map(() => ({
    icon: '/2.png',
  }));

  
  const GridExample = () => (
    <div>
    
      <Grid data={data1}
        columnNum={2}
        renderItem={dataItem => (
          <div style={{  }}>
            <img src={dataItem.icon} style={{ width: '150px', height: '150px'}} alt="" />
          </div>
        )}
      />
    </div>
  );

export default class Appthink extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'rgb(63,204,203)',color:'#000'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'#000', marginRight: '16px' }} />,
                    ]}
                    >灵感
                </NavBar>
                <TabExample />
            </div>
        )
    }
}
