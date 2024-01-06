import {StyleSheet,Dimensions} from 'react-native';
const deviceSize=Dimensions.get('window');
export default StyleSheet.create({
  container: {backgroundColor: '#fff',

borderRadius:5,
marginBottom:10,
padding:10,
marginHorizontal:10,
elevation:2
},
headertext:{
  fontSize:16,
  fontWeight:"bold",
  color:"#000",
},
categorytext:{
  color:"#234"
},
bottomView:{
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center"
},
localtext:{
  color:"#fff",
  backgroundColor:"#EF5350",
  padding:6,
  marginTop:5,
  width:deviceSize.width/2-40,
  borderRadius:10,
  textAlign:"center"
},
leveltext:{
  color:"#EF5350"
},
buttonCont:{
  padding:10,
  marginTop:10,
  alignItems:"center"
}
});
