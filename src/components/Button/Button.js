import React from "react";
import { SafeAreaView, Text, TouchableOpacity,View } from "react-native";
import styles from './Button.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Button=({btnTxt,icon,onClick})=>{
    return(
        <TouchableOpacity onPress={onClick}>
            <View  style={styles.container}>
            <Text style={styles.textBtn}><Icon name={icon} size={30}></Icon> </Text>
            <Text style={styles.textBtn}> {btnTxt}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default Button;