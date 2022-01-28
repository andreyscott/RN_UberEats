import { View, Text } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import React from 'react';
import { TouchableOpacity } from 'react-native-web';

export default function BottomTabs() {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', margin: 10, marginHorizontal: 30 }}>
        <Icon name="home"  text='Home' size={20} color="black" />
        <Icon name="shopping-bag" text='Grocery' size={20} color="black" />
        <Icon name="search" text='Browse' size={20} color="black" />
        <Icon name="receipt" text='Orders' size={20} color="black" />
        <Icon name="user" text='Home' size={20} color="black" />

    </View>
  );
}
const Icon = (props) => (
    <TouchableOpacity>
    <View>
    <FontAwesome5 name={props.name} size={props.size} color={props.color} style={{
        marginHorizontal: 10,
        marginBottom:3,
        alignSelf:'center',
    }} />
    <Text style={{
        fontSize:17,
        fontWeight:'bold',
        color:'black',
        alignSelf:'center',
        marginBottom:3,
    }}>{props.text}</Text>
    </View>
    </TouchableOpacity>
);