import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image } from 'react-native';
import {Router, Scene, Tabs, Drawer, Lightbox, Modal } from 'react-native-router-flux';
import { Grid, Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import Thefirstpage from './components/Thefirstpage';
import Person from './components/Person';
import Wannabuy from './components/Wannabuy';
import Login from './src/common/Login';
import MsgDetail from './components/MsgDetail';
import MyRelease from './components/MyRelease';
import Chips from './Chips';


const styles = StyleSheet.create({
  
});

const rootUrl ='https://www.fastmock.site/mock/9cb4b893bd42af9d9e23b5c08d033230/api';

const App = () => {
    // 实现 Tabs
    let now = 0;
    
    useEffect(()=>{
        SplashScreen.hide();
        // fetch(rootUrl+'/topics?limit=5')
        //     .then(res=>res.json())
        //     .then(res=>console.log(JSON.stringify(res)))
    },[])

    return (
        
        <Router>
            
            <Modal key="modal" hideNavBar>
                <Lightbox key="lightbox">
                    {/* <Drawer key="drawer"> */}
                        <Scene key="root">
                            <Tabs 
                                key="tabbar"
                                hideNavBar
                                activeTintColor="red"
                                inactiveTintColor="grey"
                                tabBarStyle={{backgroundColor:'white'}}
                            >
                                <Scene 
                                    key='thefirstpage'
                                    icon={
                                        ({focused})=>
                                    <Icon
                                        color={focused?'green':'green'}
                                        name='book'
                                    />
                                    }
                                    title="首页" hideNavBar
                                    component={Thefirstpage}
                                >
                                    <Scene key="fp" component={Thefirstpage} />
                                <Scene 
                                    key="msgdetail"
                                    
                                    component={MsgDetail} 
                                />
                                </Scene>
                                
                                <Scene
                                    key='chips'
                                    icon={
                                        ({focused})=>
                                    <Icon
                                        color={focused?'grey':'grey'}
                                        name="car"
                                    />
                                    }
                                    title="商品分类" hideNavBar
                                    component={Chips}
                                >
                                    <Scene key="chips" component={Chips} />
                                </Scene>

                                <Scene
                                    key='wannabuy'
                                    icon={
                                        ({focused})=>
                                    <Icon
                                    color={focused?'grey':'grey'}
                                        name="man"
                                    />
                                    }
                                    title="购物车" hideNavBar
                                    component={Wannabuy}
                                >
                                    <Scene key="wannabuy" component={Wannabuy} />
                                </Scene>
                                
                                <Scene 
                                    key='person'
                                    icon={
                                        ({focused})=>
                                    <Icon
                                        color={focused?'grey':'grey'}
                                        name='file'/
                                    >}
                                    title="个人中心" hideNavBar
                                    component={Person}
                                >
        
                                    <Scene key="person" component={Person} />
                                    
                                    
                                </Scene>
                            </Tabs>
                            <Scene
                                title="我的发布"
                                headerTitleStyle={{
                                    alignSelf: 'center',
                                    textAlign: 'center',
                                    flex: 1,
                                    
                                    // fontSize: 18,
                                    color: 'white',
                                    backgroundColor:'red'
                                    }}
                                hideTabBar 
                                hideDrawerButton
                                key='myrelease'
                                component={MyRelease}
                            />
                        </Scene>
                    {/*</Drawer>**/}
                </Lightbox>
                <Scene initial={true} key="login" component={Login}></Scene>
            </Modal>
        </Router>
    ); 
};


export default App;