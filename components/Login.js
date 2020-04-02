import React, { Component } from 'react'
import {View,Text,Button,Image,TouchableOpacity,ScrollView,TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Grid, Icon } from '@ant-design/react-native';
export default class Login extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent: 'center'}}>
            <View style={{ alignItems: 'center',height: 400 }}> 
                <View style={{
                    width:'80%',
                    backgroundColor:'#ccc',
                    marginRight:10,
                    flexDirection:'row',
                    borderRadius:20,
                    paddingLeft:20,
                    marginTop:30,
                    }}>
                    <Icon name="file" color="red"/>
                    <TextInput placeholder='搜索'/>
                </View>
                <View style={{
                    width:'80%',
                    backgroundColor:'#ccc',
                    marginRight:10,
                    flexDirection:'row',
                    borderRadius:20,
                    paddingLeft:20,
                    marginTop:30,
                    }}>
                    <Icon name="file" color="red"/>
                    <TextInput placeholder='输入'/>
                </View>
                <View>
                    <TouchableOpacity 
                        onPress={Actions.pop}
                        style={{
                            width: '80%',
                            height: 50,
                            backgroundColor: '#ccc',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 30
                        }}
                    >
                        <Text>登录！</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        )
    }
}
