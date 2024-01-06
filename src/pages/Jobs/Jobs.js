import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View, Button} from 'react-native';
import styles from './Jobs.style';
import useHttps from '../../Hooks/useHttps';
import Config from 'react-native-config';
import Job from '../../components/Job';
import Loading from '../../components/Loading';

const Jobs = ({navigation}) => {
  const {dataVal, loading, getJobs} = useHttps();
  const [counter, pageCounter] = useState(1);
  const getDescription = (idJob,nameJob) => {
    navigation.navigate("DetailJob",{idJob,nameJob});
  };

  
  useEffect(() => {
    getJobs(Config.API_JOBS_URL + '?page=' + counter);
  }, [counter]);
  const dataS = dataVal;
  const renderJobs = ({item}) => (
    <Job items={item} press={() => getDescription(item.id,item.name)} />
  );
  if (loading) return <Loading />;
  else
    return (
      <SafeAreaView>
        <FlatList
          data={dataS}
          renderItem={renderJobs}
          ListFooterComponent={
            <View>
              <Button
                title="Sonraki Sayfa"
                onPress={() => {
                  pageCounter(counter + 1);
                }}
              />
            </View>
          }
        />
      </SafeAreaView>
    );
};

export default Jobs;
