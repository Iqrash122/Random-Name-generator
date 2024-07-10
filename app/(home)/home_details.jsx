import { AntDesign } from '@expo/vector-icons';
import { Link } from "expo-router";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Favorite() {
  const FavoriteList = [
    {
      id: 1,
      title: "Marie Sofia",
      des: "Gender, Jews, Marie",
    },
    {
      id: 2,
      title: "Marie Sofia",
      des: "Gender, Jews, Marie",
    },
    {
      id: 3,
      title: "Marie Sofia",
      des: "Gender, Jews, Marie",
    },
    {
      id: 4,
      title: "Marie Sofia",
      des: "Gender, Jews, Marie",
    },
    {
      id: 5,
      title: "Marie Sofia",
      des: "Gender, Jews, Marie",
    },
    {
      id: 6,
      title: "Marie Sofia",
      des: "Gender, Jews, Marie",
    },
    {
      id: 7,
      title: "Marie Sofia",
      des: "Gender, Jews, Marie",
    },

  ];
  return (
    <SafeAreaView>
      <View>
        <View style={styles.header}>
          <Link href={"/(home)"} style={{ marginTop: 24 }}>
            <AntDesign name="left" size={24} color="#55A5A7" />
          </Link>
          <Text style={styles.titles}>Favorite</Text>
        </View>
        <FlatList style={{marginTop:46}}
          scrollEnabled={false}
          data={FavoriteList}
          renderItem={({ item }) => (

            <View style={styles.view1}> 
              <View style={styles.view2}>
              <Text style={{fontSize:16, lineHeight:20, color:'#989898'}}>
                  {item.title}
                </Text>
                <Text style={{fontSize:11, lineHeight:20, color:'#989898'}}>
                  {item.des}
                </Text>
              </View>

              <TouchableOpacity>

                <AntDesign name="right" size={24} color="#55A5A7" />
              </TouchableOpacity>
              

            </View>
                
               
          
          )}
        /> 



      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 13,
    columnGap: 13,
  },
  titles: {
    width: 161,
    height: 24,
    marginTop: 24,
    fontSize: 20,
    lineHeight: 24.2,
    fontWeight: "700",
    color: "black",
  },
  view1:{
    display:'flex',
    flexDirection:"row",   
    height:60,
    columnGap:214,
    borderWidth:0.3,
    borderColor:'#55A5A7',
    justifyContent:'center',
    textAlign:"center",
    alignItems:"center",
    


    

  },
  view2:{
      display:'flex',
      flexDirection:'column',
      width:105,
      height:32,

  }
});
