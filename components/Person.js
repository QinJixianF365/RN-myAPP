import React, { Component } from 'react'
import {StyleSheet, View, TouchableOpacity, ScrollView, Text, Image} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';
import { Grid, Icon } from '@ant-design/react-native';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: '打开摄像头',
    customButtons: [{ name: 'fb', title: '从我的社区发布选择一张照片' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
    takePhotoButtonTitle: '拍照'
};

export default class Person extends Component {

    constructor(){
        super();
        let data = [];
        for(var i =0; i<10; i++){
            data.push({tit:i,key:i});
        }
        this.state = {
            data,
            imageUrl:''
        }
    }

    takephoto = ()=>{
        // ImageCropPicker.openCamera({
        //     width: 300,
        //     height: 400,
        //     cropping: true,
        //   }).then(image => {
        //     this.setState({imageUrl:{uri:image.path}})
        //   });
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
                
              const source = { uri: response.uri };
              this.setState({
                imageUrl: source,
              });
            }
          });
    }


    render() {
        return (
            <View>
                <View style={styles.personbox}> 
                    <Image style={styles.person} source={this.state.imageUrl} />
                    <Button
                    onPress={()=>{this.takephoto()}}
                    style={styles.btn}
                >拍照</Button>
                </View>
                <View style={styles.loken}>
                <View style={styles.icon1}><Icon color={'blue'} style={{width:25,height:25}} name='car'/></View>
                <View style={styles.round}><Text style={{fontSize:18}}>我的个人中心</Text></View>
                </View>

                
            <ScrollView style={{height:185,backgroundColor:'#ccc',marginTop:10}}>
            <View  style={{
              flexDirection:'row',
              justifyContent:'flex-start',   
              flexWrap:'wrap',
              marginTop:2,
              width:'100%',
              backgroundColor:'white',
              //   marginLeft: 40
              paddingLeft:45,
            }}>
              <View style={styles.box1}><Icon color={'grey'} style={styles.icon} name='car'/><Text>账户管理</Text></View>
              <View style={styles.box1}><Icon color={'grey'} style={styles.icon} name='man'/><Text>收货地址</Text></View>
              <View style={styles.box1}><Icon color={'grey'} style={styles.icon} name='file'/><Text>我的信息</Text></View>
              <View style={styles.box1}><Icon color={'grey'} style={styles.icon} name='mobile'/><Text>我的订单</Text></View>
              <View style={styles.box1}><Icon color={'grey'} style={styles.icon} name='flag'/><Text>我的二维码</Text></View>
              <View style={styles.box1}><Icon color={'grey'} style={styles.icon} name='book'/><Text>我的积分</Text></View>
              <View style={styles.box1}><Icon color={'grey'} style={styles.icon} name='star'/><Text>我的收藏</Text></View>
            </View>
          </ScrollView>

                 <View style={styles.loken}>
                 <View style={styles.icon1}><Icon color={'grey'} style={styles.icon2} name='car'/></View>
                 <View style={styles.round}><Text style={{fontSize:18}}>E族活动</Text></View>
                 </View>

                <ScrollView style={{height:170,paddingTop:1,backgroundColor:'#ccc'}}>
            <View  style={{
              flexDirection:'row',
              justifyContent:'space-around',
              flexWrap:'wrap',
              marginTop:0,
              width:'100%',
              backgroundColor:'white',
            //   marginLeft: 40
            paddingLeft: 45
            }}>
              <View style={styles.box1}><Icon color={'grey'} style={styles.icon} name='book'/><Text>居家维修保养</Text></View>
              <View style={styles.box1}><Icon color={'grey'} style={styles.icon} name='smile'/><Text>出行接送</Text></View>
              <View style={styles.box1}><Icon color={'grey'} style={styles.icon} name='star'/><Text>我的受赠人</Text></View>
              <View style={styles.box1}><Icon color={'grey'} style={styles.icon} name='mobile'/><Text>我的住宿优惠</Text></View>
              <View style={styles.box1}><Icon color={'grey'} style={styles.icon} name='man'/><Text>我的活动</Text></View>
              <View style={styles.box1}><Icon color={'grey'} style={styles.icon} name='car'/><Button style={styles.btn2} onPress={()=>{Actions.myrelease()}}>我的发布</Button></View>
            </View>
          </ScrollView>
                
                
                
                
                
                
                
                <View style={{backgroundColor:'#ccc',height:100,marginTop:0}}>
                    <View style={styles.logo}>
                        <Text style={{color:'grey'}}>BINNU DHILLON 丨 退出</Text>
                    </View>
                </View>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    personbox:{
        width: '100%',
        height: 250,
        alignItems: "center",
        // justifyContent: 'center',
        // marginTop: 70,
        backgroundColor:'red',
        borderRadius: 50,
    },
    person:{
        width: 100,
        height: 100,
        borderRadius: 10,
        marginTop: 70,
        backgroundColor:'#fff'
    },
    logo:{
        paddingTop: 10,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 10
    },
    box1:{
        width:135,
        margin:5,
        height:55,
        backgroundColor:'white'
      },
    icon:{
        marginLeft:15
    },
    icon1:{
        marginLeft:15,
        height:20,
        width:20,
        top: 20
    },
    round:{
        height:20,
        width:'30%',
        marginLeft:'10%',
        left:0,
    },
    loken:{
        height:50,
        width:'100%',

    },
    btn:{
        marginTop: 10,
        width: 100,
        height: 40,
        color: 'black',
        textAlignVertical: 'center',
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    btn2:{
        color: 'black',
        width: 70,
        height: 30,

    }
});
