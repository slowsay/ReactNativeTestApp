/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import  React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS
} from 'react-native';

class Fuckyou extends Component {
    getInitialState() {
        return {selectedTab: '首页'};
    }
    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item title="首页">
                    <View style={styles.welcome}>
                        <Text>
                            欢迎来到Why,世界!
                        </Text>
                    </View>
                </TabBarIOS.Item>
                <TabBarIOS.Item title="微淘">
                    <View style={styles.weitao}>
                        <Text>
                            微淘
                        </Text>
                    </View>
                </TabBarIOS.Item>
                <TabBarIOS.Item title="社区">
                    <View style={styles.weitao}>
                        <Text>
                            社区
                        </Text>
                    </View>
                </TabBarIOS.Item>
                <TabBarIOS.Item title="购物车">
                    <View style={styles.weitao}>
                        <Text>
                            购物车
                        </Text>
                    </View>
                </TabBarIOS.Item>
                <TabBarIOS.Item title="我的淘宝">
                    <View style={styles.weitao}>
                        <Text>
                            我的淘宝
                        </Text>
                    </View>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}
;
/**
 * @description 样式定义
 *
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    weitao: {
        fontSize: 14,
        textAlign: 'center',
        margin: 0
    }
    ,
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
});

AppRegistry.registerComponent('Fuckyou', () => Fuckyou);
