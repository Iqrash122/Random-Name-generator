import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeOptions({ data }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputText, setInputText] = useState("");
  const [filteredRegions, setFilteredRegions] = useState(regionName);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const inputHandler = (text) => {
    const lowerCase = text.toLowerCase();
    setInputText(lowerCase);

    const filtered = regionName.filter((region) =>
      region.text.toLowerCase().includes(lowerCase)
    );
    setFilteredRegions(filtered);
  };

  const attributes = {
    1: [
        <View >
                <View
                style={styles.attributeContainer}
                key="attr1"
             >
                <View
                style={styles.attributeBox}
                >
                    

                </View>
                

                <View
                style={styles.attributeBox}
                ></View>

        
      </View>
            <View style={{display:"flex", flexDirection:'row', columnGap:90, marginTop:6}}>
                <View style={{justifyContent:"center", alignItems:"centers", textAlign:'center', marginLeft:29}}>
                    <Text style={{textAlign:'center', width:34, height:12, fontSize:10, lineHeight:12, fontWeight:600}}>
                        Male
                    </Text>
                </View>
                <View style={{justifyContent:"center", alignItems:"centers"}}>
                    <Text style={{textAlign:'center', width:34, height:12, fontSize:10, lineHeight:12, fontWeight:600, }}>
                        Female
                    </Text>
                </View>
            </View>


        </View>

     ,
    ],
    2: [
      <View key="attr2">
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            onChangeText={inputHandler}
            value={inputText}
            placeholder="Type Category"
          />
          <TouchableOpacity>
            <Text style={styles.searchButton}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}} >
            <FlatList
                data={filteredRegions}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Text style={styles.regionText}>{item.text}</Text>
                )}
            />

        </View>
        
      </View>,
    ],
    3: [

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            onChangeText={inputHandler}
            value={inputText}
            placeholder="Enter Here"
          />
          <TouchableOpacity>
            <Text style={styles.searchButton}>Search</Text>
          </TouchableOpacity>
        </View>
    ],
  };

  const regionName = [
    { id: 1, text: "Spanish" },
    { id: 2, text: "Urdu" },
    { id: 3, text: "Hindi" },
    { id: 4, text: "Arabic" },
    { id: 5, text: "Korean" },
    { id: 6, text: "Malay" },
    { id: 7, text: "Chinese" },
    { id: 8, text: "Irani" },
    { id: 9, text: "Afghani" },
  ];

  return (
    <>
      <View style={styles.container}>
        <View style={styles.image1}>
          <Text>{data.image1}</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>{data.title}</Text>
          <Text style={styles.descriptionText}>{data.des}</Text>
        </View>
        <TouchableOpacity onPress={toggleExpand}>
          <View style={styles.image2}>
            <Text>{data.image2}</Text>
          </View>
        </TouchableOpacity>
      </View>
      {isExpanded && (
        <View style={styles.expandableList}>
          {attributes[data.id]?.map((attr, index) => (
            <Text key={index} style={styles.attributeText}>
              {attr}
            </Text>
          ))}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: 360,
    height: 97,
    backgroundColor: "white",
    columnGap: 10.76,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
  },
  image1: {
    display: "flex",
    justifyContent: "center",
    marginLeft: 5,
  },
  title: {
    display: "flex",
    justifyContent: "center",
  },
  image2: {
    display: "flex",
    justifyContent: "center",
    marginTop: 40,
  },
  titleText: {
    width: 58,
    height: 19,
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
    color: "#7A7A7A",
  },
  descriptionText: {
    height: 13,
    fontSize: 12,
    lineHeight: 13,
    fontWeight: "400",
    color: "#A7A7A7",
  },
  
  attributeText: {
    fontSize: 14,
    lineHeight: 18,
    color: "#333",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    width: 358,
    height: 41,
    backgroundColor: "#FFFFFF",
    borderRadius: 0.5,
    opacity: 70,
    display: "flex",
    flexDirection: "row",
    columnGap: 3,
    alignItems: "center",
  },
  searchInput: {
    width: 262,
    height: 28,
    marginLeft: 11,
    borderWidth: 1,
    borderColor: "#55A5A7",
    marginVertical: 7,
    padding: 4,
  },
  searchButton: {
    width: 77,
    height: 28,
    marginVertical: 7,
    backgroundColor: "#55A5A7",
    borderWidth: 1,
    borderColor: "#55A5A7",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    color:"white"
  },
  regionText: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  
  expandableList: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 10,

  },
  attributeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 30,
    alignItems: "center",
  },
  attributeBox: {
    width: 92,
    height: 92,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#55A5A7",
  },
});
