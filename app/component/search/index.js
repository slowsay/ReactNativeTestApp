/**
 * Created by slowsay on 16/6/23.
 */
import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import Searchbar from 'react-native-search-bar';
import Fuzzy from 'fuzzy';
/**
 *@description 组件
 */
import Util from './../../core/utils';
export default class extends Component {
    constructor() {
        super();
        let arr = {
            "AL": "Alabama",
            "AK": "Alaska",
            "AS": "American Samoa",
            "AZ": "Arizona",
            "AR": "Arkansas",
            "CA": "California",
            "CO": "Colorado",
            "CT": "Connecticut",
            "DE": "Delaware",
            "DC": "District Of Columbia",
            "FM": "Federated States Of Micronesia",
            "FL": "Florida",
            "GA": "Georgia",
            "GU": "Guam",
            "HI": "Hawaii",
            "ID": "Idaho",
            "IL": "Illinois",
            "IN": "Indiana",
            "IA": "Iowa",
            "KS": "Kansas",
            "KY": "Kentucky",
            "LA": "Louisiana",
            "ME": "Maine",
            "MH": "Marshall Islands",
            "MD": "Maryland",
            "MA": "Massachusetts",
            "MI": "Michigan",
            "MN": "Minnesota",
            "MS": "Mississippi",
            "MO": "Missouri",
            "MT": "Montana",
            "NE": "Nebraska",
            "NV": "Nevada",
            "NH": "New Hampshire",
            "NJ": "New Jersey",
            "NM": "New Mexico",
            "NY": "New York",
            "NC": "North Carolina",
            "ND": "North Dakota",
            "MP": "Northern Mariana Islands",
            "OH": "Ohio",
            "OK": "Oklahoma",
            "OR": "Oregon",
            "PW": "Palau",
            "PA": "Pennsylvania",
            "PR": "Puerto Rico",
            "RI": "Rhode Island",
            "SC": "South Carolina",
            "SD": "South Dakota",
            "TN": "Tennessee",
            "TX": "Texas",
            "UT": "Utah",
            "VT": "Vermont",
            "VI": "Virgin Islands",
            "VA": "Virginia",
            "WA": "Washington",
            "WV": "West Virginia",
            "WI": "Wisconsin",
            "WY": "Wyoming"
        };
        this.datas = [];
        let _i = 0;
        for (let i in arr) {
            if (arr.hasOwnProperty(i)) {
                this.datas[_i++] = arr[i];
            }
        }
        this.state = {
            msg: '移动流量',
            data: this.datas
        };
    }


    _onSearchButtonPress(text) {
        //this.refs.searchBar.focus();
        Util.nslog(text);
    }

    _onCancelButtonPress() {
        this.props.navigator.pop();
    }

    _onChangeText(v) {
        let resulte = Fuzzy.filter(v, this.datas);
        this.setState({
            data: resulte.map(
                (e)=> {
                    return e.string;
                }
            )
        })

    }

    render() {
        const _list = this.state.data.map((e, i)=> {
            return (<TouchableOpacity key={i} style={styles.list}>
                <Text>{e}</Text>
            </TouchableOpacity>);
        })
        return (<View style={styles.container}>
            <View style={styles.searchbar}>
                <Searchbar ref='searchBar'
                           placeholder='搜索'
                           onChangeText={(text)=>this._onChangeText(text)}
                           onSearchButtonPress={(text)=>this._onSearchButtonPress(text)}
                           onCancelButtonPress={()=>this._onCancelButtonPress()}/>
            </View>
            <TouchableOpacity style={styles.btncancel} onPress={()=>{this.props.navigator.pop()}}>
                <Text>取消</Text>
            </TouchableOpacity>
            <ScrollView style={styles.con}>
                {_list}
            </ScrollView>
        </View>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    searchbar: {
        position: 'absolute', width: Util.size.width - 40
    },
    con: {
        marginTop: 60
    },
    btncancel: {
        position: 'absolute', right: 0,width:40,height:40, backgroundColor: '#fff', justifyContent: "center", alignItems: 'center'
    },
    inputbox: {
        position: 'absolute', left: 50, color: '#fff', fontSize: 12, padding: 4, paddingLeft: 20,
        height: 30, width: Util.size.width - 100, backgroundColor: '#d42d00'
    },
    list: {
        padding: 10,
        justifyContent: "center",
        borderBottomColor: "#ccc",
        borderBottomWidth: Util.pixel
    }
})