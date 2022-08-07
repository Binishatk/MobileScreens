

 import React from 'react';


 import {
 View,
Text,
   StyleSheet,Image,Button,TextInput,TouchableOpacity, ScrollView
 
 } from 'react-native';
 
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
 import notification from '../../assets/notification.png'
import { Formik } from 'formik';
import RecentLearning from '../../components/home/RecentLearning'
import Recomended from '../../components/home/Recomended';
import LatestNews from '../../components/home/LatestNews';
import TopNavigation from '../../components/home/TopNavigater'
 const Home= () => {

 
 
 
   return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
         <View>
        <View style={{margin:20}}>

        
        <View style={{flexDirection:"row"}}>
        <View>
     <Text style={{color:"#181818",fontSize:24,fontWeight:"bold"}}>Hi, Christina</Text>
     

        </View> 
        <View style={{position:"absolute",right:10}}>
            <Image source={notification}/>
        </View>
        </View>
   
        <Text style={{paddingVertical:10,color:"#888888",fontSize:14}}>What do you want to learn today?</Text>
      
      <View style={styles.textInputStyle}>
        <View style={{justifyContent:"center",marginHorizontal:10}}>
        <Image source={search} style={{ padding:10}}/>
        </View>
       
        <TextInput 
        	name="search"
            // value={search}
            placeholder="Search"

        />

      </View>
      <View style={{marginVertical:20}} >
        <Text style={{color:"#181818",fontSize:18,fontWeight:"bold"}}>Recent Learning</Text>
      </View>
        </View>
        <RecentLearning/>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:20}}>

        <Text>Recomended</Text>
        <Text>Algebra</Text>
        <Text>Geometry</Text>
        </View>

       <Recomended/>
       <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20}}>

<Text>Latest News</Text>
<Text>See All</Text>

</View>
<LatestNews/>
      </View>





     {/* <TopNavigation/> */}
     




     
     </ScrollView>
   );
 };
 
 const styles = StyleSheet.create({
    container: {
		// flex: 1,
	
		backgroundColor: '#F5F5F5',
	
	},
    textInputStyle: {
		flexDirection: 'row',
	
		borderWidth: 1,
	
		borderColor: '#E0E0E0',
		backgroundColor: '#F2F2F2',
		borderRadius: 6,

		elevation: 5,
		width: "100%",
        height:54,
        marginTop:10
		
	},
 });
 
 export default Home;
 