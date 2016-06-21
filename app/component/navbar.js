/**
 * Created by slowsay on 16/6/17.
 */
'use struct';
import React,{Component} from 'react';
import NavigationBar from 'react-native-navbar';
/**
 *@desription 组件
 */
import Util from './../core/utils';

export default class extends Component {
    render() {
        const {title,navigator}=this.props;
        return ( <NavigationBar style={styles.navbar}
                                title={{title: title}}
                                tintColor="#f0f0f0"
                                leftButton={{title:'返回',tintColor:'#333',handler:()=>navigator.pop()}}
                                rightButton={{title:'+',tintColor:'#333',handler:()=>console.log('...')}}/>);
    }
}
const styles = ({
    navbar: {width: Util.size.width, borderBottomWidth: 1, borderBottomColor: '#d8d8d8'}
})