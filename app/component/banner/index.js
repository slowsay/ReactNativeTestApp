/**
 * Created by slowsay on 16/6/24.
 */
'use struct';
import React,{Component} from 'react';
import {Animated,Image,ScrollView,StatusBar,StyleSheet,Text,TouchableOpacity,View} from 'react-native';
/**
 *@desription 组件
 */
import Util from './../../core/utils'
import Swiper from 'react-native-swiper';

export default class extends Component {
    _storemsg(e, i) {
        return ( <TouchableOpacity key={i}>
            <View style={styles.list}>
                <Image source={{uri:e.src}} style={styles.pic}/>
            </View>
        </TouchableOpacity>);
    }

    render() {
        const {state}=this.props;
        let _list = state.storemsg.map((e, i)=>this._storemsg(e, i));
        return (<View style={styles.container}>
            <Swiper style={styles.swipers}
                    autoplay={true}
                    dot={<View style={styles.dot} />}
                    activeDot={<View style={styles.activedot} />}>
                {_list}
            </Swiper>
        </View>);
    }
}
const styles = StyleSheet.create({
    container: {height: 100},
    swipers: {height: 100},
    list: {
        flex: 1,
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    pic: {
        width: Util.size.width / 614 * 614, height: 204 * Util.size.width / 614
    },
    dot: {backgroundColor: 'rgba(255,255,255,.2)', width: 6, height: 6, borderRadius: 3, margin: 3},
    activedot: {backgroundColor: 'rgba(255,255,255,1)', width: 6, height: 6, borderRadius: 3, margin: 3}
});