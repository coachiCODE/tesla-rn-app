import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
   container:{
      position:'absolute',
      top:50,
      zIndex:100,
      flexDirection:'row',
      justifyContent:'space-between',
      width:'100%',
      paddingHorizontal:20,
   },
   logo:{
      width:125,
      height:30,
      resizeMode:'contain'
   },
   button:{
      borderRadius: 25,
      opacity:0.8,
      backgroundColor: '#D3D3D3',
      borderColor: '#D3D3D3',
      width:70,
      height: 35,
      alignItems:'center',
      justifyContent:'center',
      resizeMode:'contain'
   },
   buttonText: {
      color: '#000',
      fontWeight: "bold",
      fontSize: 12,
    }
});
export default styles;