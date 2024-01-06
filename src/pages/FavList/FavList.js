import React from "react";
import { SafeAreaView, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {useDispatch, useSelector} from 'react-redux';
import JobFav from "../../components/JobFav";
import styles from './FavList.style';

const FavList=()=>{  
    const dispatch=useDispatch(); 
     const fav = useSelector(state => state.fav);
const removeFav=(id) => {
let newFav=[];
    fav.forEach(element => {
        if(element.id!=id)
        {
              newFav=[...newFav,element];
        }
      
    });
dispatch({type:"REMOVE_FAV",payload:newFav})
}



    const getFavList=({item}) =><JobFav items={item} press={()=>removeFav(item.id)}/>
    return(
        <SafeAreaView style={styles.container}>
            <FlatList data={fav} renderItem={getFavList}/>
        </SafeAreaView>
    )
}
export default FavList;