import React, { useState } from "react";
import { FlatList, View, StatusBar, StyleSheet, Text, Image
 } from "react-native";

import news_2 from '../../assets/news_2.png'
import news_1 from '../../assets/new_1.png'
const DATA = [
  {
    id: "1",
    subject: "Biology",
    image:news_1,
    // image:"https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_960_720.jpg",
    title:"Effect of Temperature on Encyme Activity",
    time:"1 h ago",
messageCount:234
  },
  {
    id: "2",
    subject: "Mathematics",
    image:news_2,
    // image:"https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_960_720.jpg",
    title:"How to workout percentage without Calculater",
time:"24 August 2020",
messageCount:234

  },


];

const Item = ({ item, onPress,  }) => (
    <View style={{marginHorizontal:20,borderWidth:.5,borderColor:"#E0E0E0",flexDirection:"row",marginVertical:20,width:"100%"}}>
 <View style={{width:"40%"}}>
 <Image source={item.image} style={{}}/>
 </View>

 {/* <Text style={{color:"black",paddingVertical:8,fontWeight:"bold"}}>{item.subject}</Text> */}
 <View style={{marginHorizontal:20,width:"50%",paddingRight:20}}>
 <Text style={{color:"black",fontSize:14,fontWeight:"bold",paddingVertical:5}}>{item.subject}</Text>
 <Text style={{  color:"#181818",}}>{item.title}</Text>
 <View style={{flexDirection:"row",marginTop:20,justifyContent:"space-between"}}>
 <Text style={{fontSize:8,color:"#181818"}}>{item.time}</Text>
    <Text style={{fontSize:8,color:"#181818"}}>{item.messageCount}</Text>

 </View>
 </View>
    </View>

   
//  <View>
//     <Text>Hi Heloo</Text>
//     <Image source={{
//           uri: 'https://reactnative.dev/img/tiny_logo.png',
//         }} style={{width:24,height:20,resizeMode:"contain"}}/>
    
//  </View>
);

const App = () => {
//   const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
 

    return (
      <Item
        item={item}
        // onPress={() => setSelectedId(item.id)}
        // backgroundColor={{ backgroundColor }}
        // textColor={{ color }}
      />
    );
  };

  return (
    // <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // horizontal={true}
        showsHorizontalScrollIndicator={false}
        // extraData={selectedId}
      />
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;