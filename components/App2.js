
import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  View,//相当于div
  Text,
  ImageBackground,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
  SectionList,
  Dimensions,
  BackHandler,
  ToastAndroid,
  PixelRatio,
} from 'react-native';
// JS
// TypeScript
// RN、Angular、Vue3

import ImageBg from './components/ImageBg'
// import console = require('console');
// import console = require('console');
// import console = require('console');
// import ShowMyName from './components/ShowMyName'
// import Counter from './components/Counter'
// // 创建一个组件，名为Hello，返回Helloworld，在App组件里调用
// const Hello = ()=>{
//   return (
//     <Text>helloworld</Text>
//   )
// }

// // 创建一个组件，ShowMyName，返回 hello + 你的名字，
// // 名字在调用的时候传入

// // 写一个 Counter，返回一个数字文本和一个按钮，点击按钮，
// // 数字加一

const App = () => {
  let isExit = false;
  let now = 0;
  BackHandler.addEventListener('back', ()=>{
    // console.log(new Date().getTime());
    if(new Date().getTime()-now<2000){
      BackHandler.exitApp();
    }else{
      ToastAndroid.show('确定要退出吗',100);
      now = new Date().getTime();
      return true;
    }


    console.log('back');
    
    
    if(isExit){
      BackHandler.exitApp();
      return false;
    }
    ToastAndroid.show('确定要退出吗',50);
    isExit = true;
    setTimeout(()=>{
      isExit = false;
    },2000)
    return true;
    // BackHandler.exitApp();
  })

  let [val, setVal] = useState('1'); 
  let [isFresh, setFresh] = useState(false);
  let data = [];
  for(var i=0;i<100;i++){
    data.push({key:i+'',title:i+'abc'})
  }
  console.log(123)
  let [da, setDa] = useState(data);
  let addData = ()=>{
    console.log('hello')
    for(var i=100;i<200;i++){
      data.push({key:i+'',title:i+'abc'})
    }
    setDa(data);
  }
  let upDateData = () =>{
    setFresh(true);
    setTimeout(()=>{
      setFresh(false);
    },2000)
  }
  // let style ={
  //   width:100,
  //   height:100,
  //   backgroundColor:'red'
  // }
  // const {width,height,scale} = Dimensions.get('window');
  // console.log(width,height,scale);
  // console.log(PixelRatio.get())
  // px: 图片中最小的一格
  // dpi(dot per inch): 每英寸有多少小格 (1px)
  // dp: 在安卓开发中的单位，1dp等于像素密度为160dpi时1px的大小。
  // dpi: 120 160 240 320 480
  //      0.75 1  1.5  2   3
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <View style={styles.box}></View>
        <View style={styles.box1}></View> */}
        
        {/* <ScrollView> */}
          {/* <View style={{width:34,height:34,backgroundColor:'blue',borderRadius:20,overflow:'hidden'}}>
          <Button
            onPress={()=>{}}
            title="+"
          />
          </View> */}
          {/* <TouchableOpacity
            style={{
              width: 40, 
              height: 40,
              borderWidth: 1,
              borderColor: '#ccc',
              alignItems: "center",
              justifyContent: 'center',
              borderRadius: 20,
            }} 
          >
          <Text style={{color:'#000',fontSize:20}}>
            +
          </Text>
          </TouchableOpacity> */}
          {/** 钉钉头部搜索框 */}
           {/* <View style={{flexDirection:'row',height:40,justifyContent:"center"}}> 
            <View style={{
                width:'80%',
                backgroundColor:'#ccc',
                marginRight:10,
                flexDirection:'row',
                borderRadius:20,
                paddingLeft:20,
                }}>
               <Image style={{width:20,height:20,marginTop:9}} source={require('./assets/icon/user.png')}/>
               <TextInput placeholder='搜索'/>
            </View>
            <TouchableOpacity
            style={{
              width: 40, 
              height: 40,
              borderWidth: 1,
              borderColor: '#ccc',
              alignItems: "center",
              justifyContent: 'center',
              borderRadius: 20,
            }} 
          >
          <Text style={{color:'#000',fontSize:20}}>
            +
          </Text>
          </TouchableOpacity> 
            <View></View>
            </View> */}
        {/* </ScrollView> */}

        <ScrollView>
          {/** flex 布局 */}
          {/* 在 rn 中，View 默认设置了 flex 属性，默认主轴是 竖轴  */}
          {/** justifyContent: 定义主轴对齐方式*/}
          {/** alignItems: 定义交叉轴对齐方式 */}

          {/* <View  style={{
            flexDirection:'row',
            justifyContent:'space-around',
            flexWrap:'wrap'
          
          }}>
          <View style={styles.box}>
          <Image style={{width:210,height:210}} source={require('./assets/icon/chips01.jpg')} />
          <Text style={{color:'grey',marginTop:10,marginLeft:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
          <Text style={{color:'red',marginTop:10,marginLeft:10}}>36.00</Text>
          </View>
          <View style={styles.box}>
          <Image style={{width:210,height:210}} source={require('./assets/icon/chips02.png')} />
          <Text style={{color:'grey',marginTop:10,marginLeft:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
          <Text style={{color:'red',marginTop:10,marginLeft:10}}>36.00</Text>
          </View>
          <View style={styles.box}>
          <Image style={{width:210,height:210}} source={require('./assets/icon/chips01.jpg')} />
          <Text style={{color:'grey',marginTop:10,marginLeft:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
          <Text style={{color:'red',marginTop:10,marginLeft:10}}>36.00</Text>
          </View>
          
          <View style={styles.box}>
          <Image style={{width:210,height:210}} source={require('./assets/icon/chips02.png')} />
          <Text style={{color:'grey',marginTop:10,marginLeft:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
          <Text style={{color:'red',marginTop:10,marginLeft:10}}>36.00</Text>
          </View>
          <View style={styles.box}>
          <Image style={{width:210,height:210}} source={require('./assets/icon/chips01.jpg')} />
          <Text style={{color:'grey',marginTop:10,marginLeft:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
          <Text style={{color:'red',marginTop:10,marginLeft:10}}>36.00</Text>
          </View>
          <View style={styles.box}>
          <Image style={{width:210,height:210}} source={require('./assets/icon/chips02.png')} />
          <Text style={{color:'grey',marginTop:10,marginLeft:10}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
          <Text style={{color:'red',marginTop:10,marginLeft:10}}>36.00</Text>
          </View>
          </View> */}
        </ScrollView>
        
        
        {/** 受控组件 */}
        {/* <Text>{val}</Text>
        <TextInput
          placeholder="请输入内容"
          onChangeText={(val)=>{setVal(val)}}
          style={{
            borderColor: 'red',
            height: 50,
            paddingLeft: 30,
            borderWidth: 1,
            borderRadius: 24
          }}
        /> */}
        {/* <View> */}
          {/** 直接显示图片默认的大小 */}
          {/* <Image source={require('./assets/icon/user.jpg')} /> */}
          {/** 网络图片必须设置大小  strech cover center*/}
          {/* <Image resizeMode="stretch" style={{width:50,height:50}} source={{uri:'https://facebook.github.io/react-native/img/tiny_logo.png'}} /> */}
        {/* </View> */}
        {/* <ImageBackground
          source={require('./assets/icon/user.jpg')}
          style={{width:'100%',height:'100%'}}>
          <Image resizeMode="stretch" style={{width:50,height:50}} source={{uri:'https://facebook.github.io/react-native/img/tiny_logo.png'}} />
          <Text>inner01</Text>
          <Text>inner02</Text>
        </ImageBackground> */}
        

        {/** 自定义组件 ImageBg */}

        {/* <ScrollView>
        <ImageBg 
          source={require('./assets/icon/user.jpg')}
          style={{height:300,width:300}}
        >
          <View style={styles.box}></View>
          <Text style={[styles.txt,styles.size]}>helloboy</Text>
        </ImageBg>
        </ScrollView> */}

        {/* <View style={styles.box}>
          <Text style={[styles.txt,styles.size]}>
            <Text>inner01</Text>
            <Text>inner02</Text>
          </Text>
          <Text style={[styles.txt,styles.size]}>
            <Text>inner01</Text>
            <Text>inner02</Text>
          </Text>
        </View> */}
        {/** FlatList */}
        {/* <FlatList 
          data={da}
          onRefresh={upDateData}
          refreshing={isFresh}
          onEndReached={addData}
          renderItem={({item,index})=>(
            <View><Text>{item.title}</Text></View>
          )}
        /> */}
      </SafeAreaView>
    </>
  );
};
// ImageBackground 背景图
const styles = StyleSheet.create({
  box:{
    // width:100,
    width:225,
    margin:5,
    height:300,
    borderColor:'black',
    // borderWidth:1,
    // height:Dimensions.get,
    backgroundColor:'white'
  },
  box1:{
    // width:100,
    width:150,
    margin:10,
    height:150,
    // borderColor:'red',
    // borderWidth:1/1.5,
    // height:Dimensions.get,
    // backgroundColor:'blue'
  },
  txt:{
    color:"red",
  },
  size:{
    fontSize:30
  }
});

export default App;
