import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import { Grid } from 'antd-mobile';

const data1 = Array.from(new Array(10)).map(() => ({
    img: '/1.png',
    img: '/2.png',

  }));


  
  const GridExample = () => (
    <div>
    
      <Grid data={data1}
        columnNum={5}
        renderItem={dataItem => (
          <div style={{ borderRadius:'50px' }}>
            <img src={dataItem.img} style={{ width: '40px', height: '40px',  backgroundColor:'red'}} alt="" />
            <div style={{ color: '#888', fontSize: '5px', marginTop: '0px' }}>
            <span>桌子</span>
          </div>
          </div>
        )}
      />
    </div>
  );

export default class Appbuy extends Component {
    state = {
        data: ['1', '2','3','4'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => { 
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI','TekJlZRVCjLFexlOCuWn'],
          });
        }, 100);
      }//轮播图


    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'rgb(63,204,203)',color:'#000'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'#000', marginRight: '16px' }} />,
                    ]}
                    >商城
                </NavBar>

                <WingBlank style={{margin:'0'}}>
                    <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                </WingBlank>
                {/* //轮播图 */}
                <GridExample />
                {/* //宫格 */}
                <div style={{width:'100%',height:'150px'}}> 
                  <div style={{float:'left'}}  >
                      <img src='/s2.jpg'  style={{margin:'10px',width:'150px' ,height:'120px'}} / >
                                  <p style={{fontSize:'10px',margin:'0 20px 0px 10px',color:'grey',width:'140px'}}>Top Art Studio 欧式风格精细… </p>
                                  <p style={{fontSize:'12px',color:'black',marginLeft:'10px'}}>￥ 38.95</p>
                  </div>

                  <div style={{float:'right'}}  >
                      <img src='/s1.jpg'  style={{margin:'10px',width:'150px' ,height:'120px'}} / >
                                  <p style={{fontSize:'10px',margin:'0 20px 0px 10px',color:'grey'}}>顺顺工艺欧式风格塑料外框黑…</p>
                                  <p style={{fontSize:'12px',color:'black',marginLeft:'10px'}}>￥ 83.99</p>
                  </div>                                                              
                </div>

                <img src='/1.png' style={{padding:'0 30px 0 30px',width:'100%'}}/>

                
                
            </div>
        )
    }
}
