/**
 * Created by slowsay on 16/6/3.
 */
import React,{Component} from 'react';
import {AppRegistry,
    StyleSheet,
    Text,Image,
    View,TabBarIOS,ListView
} from 'react-native';

class Tabs extends Component {
    changeTab(tabName) {
        this.setState({
            selectedTab: tabName
        });
    }
    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item title="首页" onPress={()=>this.changeTab('首页')}>
                    <View style={styles.container}>
                        <Text>helo{Util.size.width}</Text>
                    </View>
                </TabBarIOS.Item>
                <TabBarIOS.Item title="微淘">
                    <View style={styles.container}><Text>helo</Text></View>
                </TabBarIOS.Item>
                <TabBarIOS.Item title="社区">
                    <View style={styles.container}><Text>helo</Text></View>
                </TabBarIOS.Item>
                <TabBarIOS.Item title="购物车">
                    <View style={styles.container}><Text>helo</Text></View>
                </TabBarIOS.Item>
                <TabBarIOS.Item title="我的淘宝">
                    <View style={styles.container}><Text>helo</Text></View>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}


export default class extends Component {
    render() {
        return (
            <View>
                <Tabs />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});