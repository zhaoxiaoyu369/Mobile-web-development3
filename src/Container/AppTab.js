import React from "react";
import { TabBar } from "antd-mobile";
import AppHome from "./AppHome";
import Appthink from "./Appthink";
import Appbuy from './Appbuy';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "blueTab"
    };
  }
  render() {
    return (
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0
        }}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#ffdb2c"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(/home.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(/home1.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            selected={this.state.selectedTab === "blueTab"}
            onPress={() => {
              this.setState({
                selectedTab: "blueTab"
              });
            }}
          >
            <AppHome />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(/灯泡.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(/灯泡1.png )center center /  21px 21px no-repeat"
                }}
              />
            }
            title="灵感"
            key="Koubei"
            selected={this.state.selectedTab === "redTab"}
            onPress={() => {
              this.setState({
                selectedTab: "redTab"
              });
            }}
          >
            <Appthink/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(/商城.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(/商城1.png) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="商场"
            key="Friend"
            // dot   //红点
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab"
              });
            }}
          >
            <Appbuy/>
          </TabBar.Item>
          <TabBar.Item
            icon={{
              uri:
                "/我的.png"
            }}
            selectedIcon={{
              uri:
                "/我的1.png"
            }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === "yellowTab"}
            onPress={() => {
              this.setState({
                selectedTab: "yellowTab"
              });
            }}
          >
            我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}