import React from "react";
import { Alert, SafeAreaView, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {useDispatch, useSelector} from 'react-redux';
import JobFav from "../../components/JobFav";
import styles from './SubList.style';

const FavList=()=>{  
    const dispatch=useDispatch(); 
     const sub = useSelector(state => state.submit);
const removeFav=(id) => {

let newFav=[];
sub.forEach(element => {
 
        if(element.id!=id)
        {  
              newFav=[...newFav,element];
        }
      
    });
dispatch({type:"REMOVE_SUB",payload:newFav})
}



    const getFavList=({item}) =><JobFav items={item} press={()=>removeFav(item.id)}/>
    return(
        <SafeAreaView style={styles.container}>
            <FlatList data={sub} renderItem={getFavList}/>
        </SafeAreaView>
    )
}
export default FavList;