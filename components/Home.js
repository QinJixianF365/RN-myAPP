import React, { Component } from 'react'
import { Animated, Easing, View, ActivityIndicator, Image,Text, FlatList, Dimensions, ScrollView, StyleSheet} from 'react-native';
import Button from 'react-native-button';
import { MessageBarManager } from 'react-native-message-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
import {WebView} from 'react-native-webview';
import ImagePicker from 'react-native-image-picker';
import ImageCropPicker from 'react-native-image-crop-picker';

const {width} = Dimensions.get('window')

const options = {
    title: '打开摄像头',
    customButtons: [{ name: 'fb', title: '从我的社区发布选择一张照片' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
    takePhotoButtonTitle: '拍照'
};

export default class Home extends Component {
    constructor(){
        super();
        let data = [];
        for(var i =0; i<10; i++){
            data.push({tit:i,key:i});
        }
        this.state = {
            data,
            width: new Animated.Value(20),
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
    zoom = ()=>{
        Animated.timing(this.state.width,{
            toValue:200,
            // easing: Easing.bounce
        }).start()
    }
    render() {
        return (
            <View>
                {/* 轮播图 */}
                {/* <View>
                <ScrollView
                    pagingEnabled={true}
                    horizontal={true}
                >
                    <View style={styles.slide}>
                        <Text>1</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text>2</Text>
                    </View>
                    <View style={styles.slide}>
                        <Text>3</Text>
                    </View>
                </ScrollView>
                </View> */}

                {/* 长列表 */}
                {/* horizontal:实现水平滚动 */}
                {/* numColumns:实现分栏布局 */}
                <Icon color="red" name='chevron-left' />
                {/* <ActivityIndicator size='large' color="red"/> */}
                {/* 创建Mylist组件，模拟加载数据，显示加载图标，1s后显示数据列表 */}
                <Image 
                    style={{width:300,height:300}} 
                    source={this.state.imageUrl}
                />
                <View style={{alignItems:'center'}}>
                    <Button
                        onPress={()=>{Actions.mylist()}}
                        style={styles.btn}
                    >跳转 Mylist</Button>
                </View>
                <Button
                    onPress={()=>{this.myrelease()}}
                    style={styles.btn}
                >tiaozhuan </Button>
                <Button
                    onPress={()=>{this.zoom()}}
                    style={styles.btn}
                >变大</Button>
                <Button
                    onPress={()=>{this.takephoto()}}
                    style={styles.btn}
                >拍照</Button>
                <Animated.View 
                    style={{
                        width: this.state.width,
                        height: 200,
                        backgroundColor: 'red'
                    }}
                ></Animated.View>



                {/* <FlatList
                    ListHeaderComponent={
                        <Button
                            onPress={()=>{
                                MessageBarManager.showAlert({
                                    title: '提示标题',
                                    message: '具体信息',
                                    alertType: 'info',
                                    stylesheetInfo:{backgroundColor: 'red'}
                                })
                            }}
                            style={styles.btn}
                        >头部按钮</Button>
                    }
                    ListFooterComponent={<Text>底部</Text>}
                    // 多列布局
                    numColumns={2}
                    // 竖直改为水平
                    // horizontal={true}
                    data={this.state.data}
                    renderItem={
                        ({item})=><View style={styles.slide1}>
                            <Text>{item.tit}</Text>
                        </View>
                    }
                /> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    btn:{
        width: 200,
        height: 40,
        color: '#fff',
        textAlignVertical: 'center',
        borderRadius: 20,
        backgroundColor: 'red'
    },
    slide:{
        width: width,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    slide1:{
        width: width*0.4,
        height: 300,
        marginLeft: width*0.07,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
})
