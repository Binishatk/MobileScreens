import React, { useState } from "react";
import { FlatList, View, StatusBar, StyleSheet, Text, Image
 } from "react-native";
import algebra from '../../assets/algebra.png'
import trigno from '../../assets/trignometry.png'
import progress from '../../assets/progress.png'
const DATA = [
  {
    id: "1",
    subject: "Mathematics",
    image:algebra,
    // image:"https://cdn.pixabay.com/photo/2015/11/15/07/47/geometry-1044090_960_720.jpg",
    description:"High School algebra I:Help and review",
progressCount:5
  },
  {
    id: "2",
    subject: "Mathematics",
    image:trigno,
    // image:"https://thumbs.dreamstime.com/b/lecture-trigonometry-school-old-wooden-table-45027920.jpg",
    description:"Engagement to trignometry",
    progressCount:4

  },
  {
    id: "3",
    subject: "Mathematics",
    image:trigno,
    // image:"https://thumbs.dreamstime.com/b/lecture-trigonometry-school-old-wooden-table-45027920.jpg",
    description:"Engagement to trignometry",
    progressCount:5

  },

];

const Item = ({ item, onPress,  }) => (
    <View style={{marginHorizontal:5,width:180,height:188,borderWidth:.5,borderColor:"#E0E0E0"}}>
 <Image source={item.image}/>
 <Text style={{color:"black",paddingVertical:8,fontWeight:"bold"}}>{item.subject}</Text>
 <Text style={{  color:"#181818",}}>{item.description}</Text>
 <View style={{flexDirection:"row",marginTop:20}}>
    <Image source={progress}/>
    <Text style={{  color:"#181818",}}>{item.progressCount}/10</Text>

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