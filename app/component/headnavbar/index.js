/**
 * Created by slowsay on 16/6/17.
 */
'use struct';
import React,{Component} from 'react';
import NavigationBar from 'react-native-navbar';
/**
 *@desription 组件
 */
import Util from './../../core/utils';
import Msgbox from './../../component/messagebox';

export default class extends Component {
    _handle(getid) {
        const {navigator}=this.props;
        navigator.push({
            name: '信息',
            component: Msgbox,
            params: {
                id: getid
            }
        });
    }

    render() {
        const {id,title,navigator}=this.props;
        return ( <NavigationBar style={styles.navbar}
                                title={{title: title}}
                                tintColor="#f0f0f0"
                                leftButton={{title:'返回',tintColor:'#333',handler:()=>navigator.pop()}}
                                rightButton={{title:'...',tintColor:'#333',handler:()=>this._handle(id)}}/>);
    }
}
const styles = ({
    navbar: {width: Util.size.width, borderBottomWidth: 1, borderBottomColor: '#d8d8d8'}
})