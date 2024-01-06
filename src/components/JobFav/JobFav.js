import React from 'react';
import {SafeAreaView, Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './JobFav.style';
import Button from '../Button';
const JobFav = ({items, press}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headertext}>{items.name}</Text>
        <Text style={styles.categorytext}>
          {items.categories[0] ? items.categories[0].name : ''}
        </Text>
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.localtext}>{items.locations[0].name}</Text>
        <Text style={styles.leveltext}>{items.levels[0].name}</Text>
      </View>
      <View style={styles.buttonCont}>
        <Button btnTxt="Remove" icon="remove-circle" onClick={press}></Button>
      </View>
    </SafeAreaView>
  );
};
export default JobFav;
