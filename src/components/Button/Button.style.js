import { StyleSheet,Dimensions } from "react-native";
const deviceSize=Dimensions.get('window');
export default StyleSheet.create({
container:{
    backgroundColor:"#EF5350",
    padding:8,
    borderRadius:10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    width:deviceSize.width/3
},
textBtn:{
    
    color:"#fff",
   
}
})