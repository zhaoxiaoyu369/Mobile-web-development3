import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import { Grid } from 'antd-mobile';

//宫格  
  const data1 = Array.from(new Array(3)).map(() => ({
    img: '/1.png',
  }));

  
  const GridExample = () => (
    <div>
    
      <Grid data={data1}
        columnNum={3}
        renderItem={dataItem => (
          <div style={{  }}>
            <img src={dataItem.img} style={{ width: '90px', height: '90px',  backgroundColor:'red'}} alt="" />
          </div>
        )}
      />
    </div>
  );

export default class AppHome extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => { 
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn'],
          });
        }, 100);
      }//轮播图

      
      


    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'rgb(63,204,203)',color:'#000'}}
                    >住吧家居
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
                {/* // 宫格 */}

                <div style={{width:'100%'}}>
                    <p style={{margin:'0',backgroundColor:'white',height:'30px'}}>热门推荐</p>
                    <img src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3492357106,689108918&fm=26&gp=0.jpg' style={{width:'100%',height:'200px'}} / >
                    
                </div>
                

                    
            </div>
        )
    }
}