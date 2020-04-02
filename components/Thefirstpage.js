import React, { Component } from 'react'
import {StyleSheet, View, ScrollView, Text, Image, Dimensions,TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

const {width} = Dimensions.get('window')

export default class thefirstpage extends Component {
    render() {
        return (
            <View>
                {/* <View>
                    <Image style={styles.pic} source={require('../assets/icon/pic.png')} />
                </View> */}
                {/* 轮播图 */}
                <View>
                <ScrollView
                    pagingEnabled={true}
                    horizontal={true}
                >
                    <View style={styles.slide}>
                        <Image style={styles.pic} source={require('../assets/icon/pic.png')} />
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.pic} source={require('../assets/icon/pic.png')} />
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.pic} source={require('../assets/icon/pic.png')} />
                    </View>
                </ScrollView>
                </View>
                <View style={{backgroundColor:'#ccc'}}>
                    
                    <View style={{flexDirection:'row',height:40,justifyContent:"center",}}> 
                        <View style={{
                            width:'100%',
                            height: 90,
                            backgroundColor:'white',
                            flexDirection:'row',
                            // borderRadius:20,
                            paddingLeft:20,
                            marginTop:10,
                            // marginLeft:10
                        }}>
                            <Image style={{width:70,height:70,marginTop:5}} source={require('../assets/icon/jujiaweixiubaoyang.png')}/>
                            <TextInput style={{
                                fontSize:17,
                                alignItems: "center",
                                justifyContent: 'center',
                                marginLeft:20
                            }} placeholder='居家维修保养'/>
                            <Image style={{width:50,height:50,marginTop:20,marginLeft:150}} source={require('../assets/icon/jiantou.png')}/>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',height:60,justifyContent:"center",paddingTop:58}}> 
                        <View style={{
                            width:'100%',
                            height: 90,
                            backgroundColor:'white',
                            flexDirection:'row',
                            // borderRadius:20,
                            paddingLeft:20,
                            marginTop:10,
                        }}>
                            <Image style={{width:70,height:70,marginTop:5}} source={require('../assets/icon/zhusuyouhui.png')}/>
                            <TextInput style={{
                                fontSize:17,
                                alignItems: "center",
                                justifyContent: 'center',
                                marginLeft:20
                            }} placeholder='住宿优惠'/>
                            <Image style={{width:50,height:50,marginTop:20,marginLeft:180}} source={require('../assets/icon/jiantou.png')}/>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',height:60,justifyContent:"center",paddingTop:85,marginTop:10}}> 
                        <View style={{
                            width:'100%',
                            height: 90,
                            backgroundColor:'white',
                            flexDirection:'row',
                            // borderRadius:20,
                            paddingLeft:20,
                            marginTop:10,
                        }}>
                            <Image style={{width:70,height:70,marginTop:5}} source={require('../assets/icon/chuxingjiesong.png')}/>
                            <TextInput style={{
                                fontSize:17,
                                alignItems: "center",
                                justifyContent: 'center',
                                marginLeft:20
                            }} placeholder='出行接送'/>
                            <Image style={{width:50,height:50,marginTop:20,marginLeft:180}} source={require('../assets/icon/jiantou.png')}/>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',height:60,justifyContent:"center",paddingTop:90,marginTop:18}}> 
                        <View style={{
                            width:'100%',
                            height: 90,
                            backgroundColor:'white',
                            flexDirection:'row',
                            // borderRadius:20,
                            paddingLeft:20,
                            marginTop:10,
                        }}>
                            <Image style={{width:70,height:70,marginTop:5}} source={require('../assets/icon/Ezuhuodong.png')}/>
                            <TextInput style={{
                                fontSize:17,
                                alignItems: "center",
                                justifyContent: 'center',
                                marginLeft:20
                            }} placeholder='E族活动'/>
                            <Image style={{width:50,height:50,marginTop:20,marginLeft:190}} source={require('../assets/icon/jiantou.png')}/>
                        </View>
                    </View>
                    
                    
                    
                    
                </View>
                <View style={{backgroundColor:'#ccc',height:150,marginTop:100}}>
                    <View style={styles.button}>
                        <Button style={{color:'#fff'}}>发布需求</Button>
                    </View>
                    <View style={styles.logo}>
                        <Text style={{color:'grey'}}>OE族之家，版权所有</Text>
                    </View>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:'red',
        width: '80%',
        height: 50,
        marginLeft:'10%',
        borderRadius:10,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20
    },
    pic:{
        height:250,
        width:'100%'
    },
    logo:{
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20
    },
    slide:{
        width: width,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
})
