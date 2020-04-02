import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image } from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal } from 'react-native-router-flux';
import { Grid, Icon } from '@ant-design/react-native';
import { MessageBar, MessageBarManager } from 'react-native-message-bar';
import Doc from './components/Doc';
import Msg from './components/Msg';
import MsgDetail from './components/MsgDetail';
import Mybox from './components/Mybox';
import ShowMyName from './components/ShowMyName'
import Login from './components/Login'
import Home from './components/Home'
import Message from './components/Message'
import Mylist from './components/Mylist'
import LocalPage from './components/LocalPage'

// 图标安装完之后要link,link成功之后卸载App,再重新 npm run android
// 重装完以后,App停止运行的,卸载除了 React-native-router-flux之外的没用的包
// yarn remove 包名  删除包
// 每次新装完一个包服务就会自动停止运行。
// yarn remove react-native-router-flux
// yarn add react-native-router-flux@4.0.6

const styles = StyleSheet.create({
  
});
const App = () => {
    // 实现 Tabs
    return (
        <Router>
            <Overlay>
            <Modal key="modal" hideNavBar>
            <Lightbox key="lightbox">
            <Drawer
                key="drawer"
                drawerPosition="left/right"
                contentComponent={()=><Text>drawer</Text>}
                drawerIcon={()=><Icon name="menu"/>}
                drawerWidth={400}
            >
            {/** Router 里面只能放一个组件 */}
            <Scene key ="root">
                <Tabs 
                    key="tabbar"
                    hideNavBar
                    activeTintColor="red"
                    inactiveTintColor="blue"
                    tabBarStyle={{backgroundColor:'#ccc'}}
                >
                    {/** 首页 */}
                    <Scene key='first'
                        title='首页'
                        icon={
                            ({focused})=>
                            <Icon
                                color={focused?'red':'green'} 
                                name='home'
                            />
                            // <Image 
                            //     // color={focused?'red':'green'} 
                            //     style={{width:30,height:30}}
                            //     source={require('./assets/icon/user.png')}
                            // />
                        }
                        // component={Home}

                    >
                        <Scene key="home" component={Home} />
                        <Scene
                            hideTabBar 
                            hideDrawerButton
                            key='mylist' 
                            component={Mylist}
                        />
                    </Scene>
                    <Scene key='msg'
                        title='消息'
                        icon={
                            ({focused})=>
                            <Icon
                                color={focused?'red':'green'} 
                                name='home'
                            />
                        }
                    >
                        <Scene key="ms" component={Msg} />
                        <Scene 
                            key="msgdetail"
                            hideNavBar
                            component={MsgDetail} 
                        />
                    </Scene>
                    {/** 文档栏 */}
                    <Scene 
                        key='doc'
                        icon={
                            ({focused})=>
                            <Icon
                                color={focused?'red':'green'} 
                                name='smile'/
                            >}
                            title="文档"
                            component={Doc}
                    >
                        <Scene key="docs" component={Doc} />
                    </Scene>
                </Tabs>
                {/** 默认显示第一个scene ，如果没放在第一个可以添加属性initial=“true” */}
                {/* <Scene 
                  key='msg' title="消息" 
                  component={Msg}
                  titleStyle={{flex:1,textAlign:'center',color:'red'}}
                />
                <Scene 
                  key='msgdetail' title="消息详情"
                  backTitle='消息'
                  backButtonImage={require('./assets/icon/user.png')}
                  component={MsgDetail}
                  titleStyle={{flex:1,textAlign:'center',color:'red'}}
                  renderRightButton={<View></View>}
                />
                <Scene 
                  key='doc' title="文档" 
                  component={Doc}
                  titleStyle={{flex:1,textAlign:'center'}}
                  renderRightButton={<View></View>}
                /> */}
            </Scene>
            </Drawer>
            <Scene key='light' component={Mybox}/>
            </Lightbox>
                <Scene key="login" component={ShowMyName}/>
                <Scene key="login1" component={Login}/>
            </Modal>
            <Scene component={Message} />
            </Overlay>
        </Router>
    );
};


export default App;
