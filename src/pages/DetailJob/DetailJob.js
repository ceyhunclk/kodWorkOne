import React, {useEffect} from 'react';
import {SafeAreaView, Text, View, ScrollView, Alert} from 'react-native';
import useHttps from '../../Hooks/useHttps';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import styles from './DetailJob.style';
import RenderHtml, {Element} from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';
import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';

const DetailJob = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {width} = useWindowDimensions();
  const {dataVal, loading, getJobs, getDetailJob} = useHttps();
  const fav = useSelector(state => state.fav);
  const sub = useSelector(state => state.submit);
  const checkFav = (idm,arr) => {
    let durum = true;
    arr.forEach(element => {
      if (element.id == idm) durum = false;
    });
    return durum;
  };

  useEffect(() => {
    getDetailJob(Config.API_JOBS_URL + '/' + route.params.idJob);
    navigation.setOptions({title: route.params.nameJob});
  }, []);

  const adFav = dataJobs => {
    if (checkFav(dataVal.id,fav)) {
      dispatch({type: 'SAVE_FAV', payload: dataJobs});
      Alert.alert('Favorilere Eklendi');
    } else Alert.alert('Favorilere Daha Önce Eklenmiş');
  };
  const adSub = dataJobs => {
    if (checkFav(dataVal.id,sub)) {
      dispatch({type: 'SAVE_SUBMIT', payload: dataJobs});
      Alert.alert('Favorilere Eklendi');
    } else Alert.alert('Favorilere Daha Önce Eklenmiş');

  };
  if (loading) return <Loading />;
  else if (dataVal) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerTitle}>DetailJob {dataVal.name}</Text>
        <View style={styles.descCont}>
          <Text style={styles.descOne}>Locations: </Text>
          <Text>{dataVal.levels[0].name}</Text>
        </View>
        <View style={styles.descCont}>
          <Text style={styles.descOne}>Job Level: </Text>
          <Text>{dataVal.locations[0].name}</Text>
        </View>
        <View style={{flex: 1}}>
          <ScrollView
            style={{
              flex: 1,
              backgroundColor: '#fff',
              padding: 10,
              marginVertical: 10,
            }}>
            <RenderHtml
              contentWidth={width}
              source={{html: dataVal.contents}}
            />
          </ScrollView>
        </View>
        <View style={styles.btncont}>
          <Button
            btnTxt="Add Favorite"
            icon="loyalty"
            onClick={() => adFav(dataVal)}
          />
          <Button
            btnTxt="Submit"
            icon="fact-check"
            onClick={() => adSub(dataVal)}
          />
        </View>
      </SafeAreaView>
    );
  }
};
export default DetailJob;
