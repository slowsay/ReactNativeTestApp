/**
 * Created by slowsay on 16/6/12.
 */
import React,{Component} from 'react';
import { Animated,Image,ScrollView,StatusBar,StyleSheet,Text,TouchableHighlight,View} from 'react-native';
import Util from './../../core/utils'
import Video from 'react-native-video';
import Swiper from 'react-native-swiper';

class BannerSwiper extends Component {
    render() {
        return (
            <View style={styles.box}>
                <View style={styles.bannerlist} showsButtons={false} autoplay={false}>
                    <Swiper style={styles.swipers}
                            dot={<View style={styles.dot} />}
                            activeDot={<View style={styles.activedot} />}>
                        <View style={styles.list}>
                            <Text style={styles.title}>第一个广告时间</Text>
                            <Text style={styles.des}>是关于人的忘记性测试,需要一次记录</Text>
                        </View>
                        <View style={styles.list}>
                            <Text style={styles.title}>人类的不定性</Text>
                            <Text style={styles.des}>非常好的一种定义,从赤没有我的,一种定性</Text>
                        </View>
                    </Swiper>
                </View>
            </View>
        );
    }
}


export default class extends Component {
    componentDidMount() {
        StatusBar.setBarStyle(1);
    }

    render() {
        return (<View style={styles.container}>
            <Video style={styles.box} source={{uri:'v0'}} resizeMode='cover' repeat={true} key="v"/>
            <BannerSwiper />
        </View>);
    }
}
const styles = StyleSheet.create({
    container: {
        width: Util.size.width, height: Util.size.height
    },
    box: {
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    },
    bannerlist: {
        position: 'absolute', width: Util.size.width, bottom: 70, left: 0
    },
    list: {
        height: Util.size.height - 200,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 50
    },
    title: {
        fontSize: 20, color: '#fff'
    },
    des: {
        fontSize: 16, color: '#fff'
    },
    swipers: {
        height: Util.size.height / 2
    },
    dot: {backgroundColor: 'rgba(255,255,255,.2)', width: 6, height: 6, borderRadius: 3, margin: 3},
    activedot: {backgroundColor: 'rgba(255,255,255,1)', width: 6, height: 6, borderRadius: 3, margin: 3}
});