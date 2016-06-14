/**
 * Created by slowsay on 16/6/6.
 */
import React,{Component} from 'react';
import {Image,StyleSheet,Text,TouchableHighlight,TouchableWithoutFeedback,LayoutAnimation,ScrollView,CameraRoll,View} from 'react-native';
import Util from './../../core/utils';
import Icon from 'react-native-icons'

export default class extends Component {
    constructor() {
        super();
        this.state = {
            msg: '发信息添加图片',
            images: [],
            widths: [],
            active: false,
            show: false,
            selected: []
        }
    }

    componentDidMount() {
        CameraRoll.getPhotos({first: 10}).done((data) => this.storeImages(data), (err) => this.logImageError(err));
    }

    storeImages(data) {
        const assets = data.edges;
        const images = assets.map((asset) => asset.node.image);
        const widths = [];
        const selected = [];
        for (var i = 0; i < images.length; i++) {
            if (i == images.length - 1) {
                Image.getSize(images[i].uri, (w, h) => {
                    widths.push((w / h) * 130);
                    selected.push(false);
                    this.setState({images, widths, selected});
                })
            } else {
                Image.getSize(images[i].uri, (w, h) => {
                    widths.push((w / h) * 130);
                    selected.push(false);
                })
            }
        }
    }

    logImageError(err) {
        console.log(err);
    }

    _showView() {
        this.setState({show: true});
    }

    _hideView() {
        this.setState({show: false});
    }

    _selectImage(i) {
        let selected = this.state;
        selected[i] = true;
        this.setState({
            active: true,
            selected
        });
        LayoutAnimation.configChecker(LayoutAnimation.Presets.easeInEaseOut);
    }

    render() {
        const {active,selected,widths,show} = this.state;
        return (
            <View style={styles.container}>
                <TouchableHighlight activeOpacity={1} onPress={()=>{this._showView()}}>
                    <View style={styles.camera}>
                        <Image style={styles.icon} source={{uri:'round.png'}}/>
                    </View>
                </TouchableHighlight>
                {show ?
                    <View >
                        <ScrollView style={styles.imgbox}
                                    automaticallyAdjustContentInsets={false} horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                            <View style={styles.imglist}>
                                {
                                    this.state.images.map((e, i)=> {
                                        return (
                                            <TouchableHighlight activeOpacity={1} key={i}
                                                                onPress={()=>{this._selectImage(i)}}>
                                                <View>
                                                    <Image
                                                        style={[styles.img,{width:Math.ceil(widths[i])}]}
                                                        source={{uri:e.uri}}>
                                                        {
                                                            active ? (selected[i] ? <Text>yes</Text> :
                                                                <Text color="#0089fa">no</Text>) : <View />
                                                        }
                                                    </Image>
                                                </View>
                                            </TouchableHighlight>
                                        );
                                    })
                                }
                            </View>
                        </ScrollView>
                        <TouchableHighlight activeOpacity={1} onPress={()=>{this._hideView()}}>
                            <View style={styles.btn}>
                                <Text>取消</Text>
                            </View>
                        </TouchableHighlight>
                    </View> : <View/>}
            </View>
        );
    }
}
/**
 * @description 样式定义
 *
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
    },
    imgbox: {
        flex: 2,
        width: Util.size.width - 20, backgroundColor: '#fff', borderRadius: 10
    },
    imglist: {
        height: 150,
        padding: 5,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    camera: {
        position: 'absolute', width: Util.size.width
    },
    btn: {
        width: Util.size.width - 20, height: 50, backgroundColor: '#fff', borderRadius: 10, justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 100,
        height: 140, margin: 2
    },
    icon: {
        width: 29, height: 29
    }
});