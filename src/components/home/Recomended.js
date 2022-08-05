import React, { useState } from "react";
import { FlatList, View, StatusBar, StyleSheet, Text, Image
 } from "react-native";
import recomended_1 from '../../assets/recomended_1.png'
import recomended_2 from '../../assets/recomended_2.png'
import recomended_3 from '../../assets/recomended_3.png'
const DATA = [
  {
    id: "1",
    lesson: "12 Lessons",
    image:recomended_1,
    // image:"https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_960_720.jpg",
    description:"Bacterial Biology Overview",
time:"12 h 20m"
  },
  {
    id: "2",
    lesson: "14 Lessons",
    image:recomended_2,
    // image:"https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_960_720.jpg",
    description:"Mendelian Genetics & Mechanisms of Her...",
time:"18 h 20m"

  },
  {
    id: "3",
    lesson: "12 Lessons",
    image:recomended_3,
    // image:"https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_960_720.jpg",
    description:"Metabolic Biochemistry for High School",
time:"12 h 20m"

  },

];

const Item = ({ item, onPress,  }) => (
    <View style={{marginHorizontal:10,width:139,height:188,borderWidth:.5,borderColor:"#E0E0E0"}}>
 <Image source={item.image} style={{}}/>
 {/* <Text style={{color:"black",paddingVertical:8,fontWeight:"bold"}}>{item.subject}</Text> */}
 <Text>{item.description}</Text>
 <View style={{flexDirection:"row",marginTop:20,justifyContent:"space-between"}}>
 <Text style={{fontSize:8}}>{item.lesson}</Text>
    <Text style={{fontSize:8}}>{item.time}</Text>

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
        horizontal={true}
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