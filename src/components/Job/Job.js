import React from "react";
import { SafeAreaView, Text, TouchableWithoutFeedback, View } from "react-native";
import styles from './Job.style';
const Job=({items,press})=>{
    return(

        <TouchableWithoutFeedback onPress={press}>
               <SafeAreaView style={styles.container}>
            <View>
                <Text  style={styles.headertext}>{items.name}</Text>
                <Text  style={styles.categorytext}>{items.categories[0]? items.categories[0].name:""}</Text>
            </View>
            <View style={styles.bottomView}>
            <Text  style={styles.localtext}>{items.locations[0].name}</Text>
            <Text  style={styles.leveltext}>{items.levels[0].name}</Text>
            </View>
            
        </SafeAreaView>
        </TouchableWithoutFeedback>
     
    )
}
export default Job;