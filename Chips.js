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
import ImageBg from './components/ImageBg'


const App = () => {


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
         <View style={{flexDirection:'row',height:50,justifyContent:"center"}}> 
            <View style={{
                width:'80%',
                backgroundColor:'#eeeeee',
                marginRight:10,
                flexDirection:'row',
                borderRadius:0,
                paddingLeft:10,
                marginTop:10,
                }}>
                <TextInput placeholder='请输入商品名称' />
               <Image style={{width:20,height:20,marginTop:9,marginLeft:220}} source={require('./assets/icon/found.png')}/>
            </View>
          </View>

          <ScrollView>
            <View  style={{
              flexDirection:'row',
              justifyContent:'space-around',
              flexWrap:'wrap',
              marginTop:20,
              width:'100%',
              backgroundColor:'white'
            }}>
              <View style={styles.box1}><Text style={{color:'red'}}>综合</Text></View>
              <View style={styles.box1}><Text>销量</Text></View>
              <View style={styles.box1}><Text>新品</Text></View>
              <View style={styles.box1}><Text>价格</Text></View>
              <View style={styles.box1}><Text>信用</Text></View>
            </View>
          </ScrollView>

          <ScrollView>
          {/** flex 布局 */}
          {/* 在 rn 中，View 默认设置了 flex 属性，默认主轴是 竖轴  */}
          {/** justifyContent: 定义主轴对齐方式*/}
          {/** alignItems: 定义交叉轴对齐方式 */}

          <View  style={{
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
          </View>
        </ScrollView>

      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  box:{
    // width:100,
    width:225,
    margin:5,
    height:300,
    borderColor:'black',
    backgroundColor:'white'
  },
  box1:{
    width:30,
    margin:10,
    height:20,
  },
});

export default App;