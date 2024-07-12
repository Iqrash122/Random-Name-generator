import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Image } from "expo-image";
import IconFemale from "../assets/icons/feMale.png";
import IconMale from "../assets/icons/male.png";

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

export default function HomeOptions({
  data,
  setSelectedGender,
  setSelectedRegion,
  setSurname,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputText, setInputText] = useState("");
  const [filteredRegions, setFilteredRegions] = useState(regionName);
  const [selectedRegion, setLocalSelectedRegion] = useState(null);
  const [selectedGender, setLocalSelectedGender] = useState(null);
  const [surname, setLocalSurname] = useState("");

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

  const handleSelectRegion = (region) => {
    setLocalSelectedRegion(region);
    setSelectedRegion(region); // Pass value to parent
    setTimeout(() => {
      setIsExpanded(false); 
    }, 600);
  };

  const handleGenderSelection = (gender) => {
    setLocalSelectedGender(gender);
    setSelectedGender(gender); // Pass value to parent
    setTimeout(() => {
      setIsExpanded(false); 
      
    }, 600);
  };

  const handleSurnameInput = (text) => {
    setLocalSurname(text);
    setSurname(text); // Pass value to parent
  };

  const attributes = {
    1: [
      <View key="attr1" nestedScrollEnabled={true}>
        <View style={styles.attributeContainer}>
          <View style={styles.attributeBox}>
            <Checkbox
              style={styles.checkbox}
              value={selectedGender === "male"}
              onValueChange={() => handleGenderSelection("male")}
              color={selectedGender === "male" ? "#55A5A7" : undefined}
            />
            <Image
              source={IconMale}
              width={65}
              height={77}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
                marginLeft: 19.5,
                marginBottom: 9,
              }}
            />
            {/* <IconMale width={65} height={60} style={{justifyContent:"center", alignItems:'center',marginTop:5, marginLeft:12, marginBottom:9}} /> */}
          </View>
          <View style={styles.attributeBox}>
            <Checkbox
              style={styles.checkbox}
              value={selectedGender === "female"}
              onValueChange={() => handleGenderSelection("female")}
              color={selectedGender === "female" ? "#55A5A7" : undefined}
            />
            <Image
              source={IconFemale}
              width={65}
              height={77}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 4.2,
                marginLeft: 19.5,
                marginBottom: 9,
              }}
            />
            {/* <IconFemale width={65} height={60} style={{justifyContent:"center", alignItems:'center',marginTop:5, marginLeft:12, marginBottom:9}}  /> */}
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 6,
            columnGap: 87,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                width: 34,
                height: 12,
                fontSize: 10,
                lineHeight: 12,
                fontWeight: "600",
                marginLeft: 83,
              }}
            >
              Male
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                textAlign: "center",
                width: 34,
                height: 12,
                fontSize: 10,
                lineHeight: 12,
                fontWeight: "600",
              }}
            >
              Female
            </Text>
          </View>
        </View>
      </View>,
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
        <FlatList
          scrollEnabled={false}
          data={filteredRegions}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectRegion(item.text)}>
              <Text
                style={[
                  styles.regionText,
                  item.text === selectedRegion && {
                    backgroundColor: "#55A5A7",
                    opacity: 70,
                    color: "white",
                  },
                ]}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>,
    ],
    3: [
      <View key="attr3" style={styles.searchContainers}>
        <TextInput
          style={styles.searchInput}
          onChangeText={handleSurnameInput}
          value={surname}
          placeholder="Enter Here"
        />
        <TouchableOpacity>
          <FontAwesome6
            name="check"
            size={24}
            color="white"
            style={styles.searchButton}
          />
        </TouchableOpacity>
      </View>,
    ],
  };

  return (
    <SafeAreaView>
      <>
        <View style={styles.container}>
          <View style={styles.image1}>
            <data.image1 width={50} height={50} />
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>{data.title}</Text>
            <Text style={styles.descriptionText}>{data.des}</Text>
          </View>
          <TouchableOpacity onPress={toggleExpand}>
            <View style={styles.image2}>
              {isExpanded ? (
                <AntDesign name="up" size={24} color="#55A5A7" />
              ) : (
                <AntDesign name="down" size={24} color="#55A5A7" />
              )}
            </View>
          </TouchableOpacity>
        </View>
        {isExpanded && (
          <View style={styles.expandableList}>
            {attributes[data.id]?.map((attr, index) => (
              <View key={index}>{attr}</View>
            ))}
          </View>
        )}
      </>
    </SafeAreaView>
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
    marginLeft: 20,
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
    marginLeft: -20,
  },
  icon: {
    marginBottom: 5,
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
    color: "white",
  },
  regionText: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    color: "#818181",
    fontSize: 14,
    lineHeight: 16,
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
    width: 105,
    height: 108,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#55A5A7",
    backgroundColor: "white",
  },
  checkbox: {
    marginLeft: 74,
    marginTop: 5,
    borderColor: "#55A5A7",
  },
  searchContainers: {
    width: 358,
    height: 41,
    backgroundColor: "#FFFFFF",
    borderRadius: 0.5,
    opacity: 70,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -20,
    opacity: 70,
    marginLeft: -20,
  },
});

// import { AntDesign } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
// import Checkbox from 'expo-checkbox';
// import React, { useState } from "react";
// import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// const regionName = [
//   { id: 1, text: "Spanish" },
//   { id: 2, text: "Urdu" },
//   { id: 3, text: "Hindi" },
//   { id: 4, text: "Arabic" },
//   { id: 5, text: "Korean" },
//   { id: 6, text: "Malay" },
//   { id: 7, text: "Chinese" },
//   { id: 8, text: "Irani" },
//   { id: 9, text: "Afghani" },
// ];

// export default function HomeOptions({ data, setSelectedGender, setSelectedRegion, setSurname }) {
//   const navigation = useNavigation();
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [inputText, setInputText] = useState("");
//   const [filteredRegions, setFilteredRegions] = useState(regionName);
//   const [selectedRegion, setLocalSelectedRegion] = useState(null);
//   const [selectedGender, setLocalSelectedGender] = useState(null);
//   const [surname, setLocalSurname] = useState("");

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const inputHandler = (text) => {
//     const lowerCase = text.toLowerCase();
//     setInputText(lowerCase);

//     const filtered = regionName.filter((region) =>
//       region.text.toLowerCase().includes(lowerCase)
//     );
//     setFilteredRegions(filtered);
//   };

//   const handleSelectRegion = (region) => {
//     setLocalSelectedRegion(region);
//     setSelectedRegion(region); // Pass value to parent
//     setTimeout(() => {
//       setIsExpanded(false); // Close the expandable list after 3 seconds
//     }, 500);
//   };

//   const handleGenderSelection = (gender) => {
//     setLocalSelectedGender(gender);
//     setSelectedGender(gender); // Pass value to parent
//     setTimeout(() => {
//       setIsExpanded(false); // Close the expandable list after 3 seconds
//     }, 500);
//   };

//   const handleSurnameInput = (text) => {
//     setLocalSurname(text);
//     setSurname(text); // Pass value to parent
//   };

//   const attributes = {
//     1: [
//       <View key="attr1" nestedScrollEnabled={true}>
//         <View style={styles.attributeContainer}>
//           <View style={styles.attributeBox}>
//             <Checkbox
//               style={styles.checkbox}
//               value={selectedGender === 'male'}
//               onValueChange={() => handleGenderSelection('male')}
//               color={selectedGender === 'male' ? '#55A5A7' : undefined}
//             />
//           </View>
//           <View style={styles.attributeBox}>
//             <Checkbox
//               style={styles.checkbox}
//               value={selectedGender === 'female'}
//               onValueChange={() => handleGenderSelection('female')}
//               color={selectedGender === 'female' ? '#55A5A7' : undefined}
//             />
//           </View>
//         </View>
//         <View style={{ display: "flex", flexDirection: 'row', marginTop: 6, columnGap: 87 }}>
//           <View style={{ justifyContent: "center", alignItems: "center", textAlign: 'center' }}>
//             <Text style={{ textAlign: 'center', width: 34, height: 12, fontSize: 10, lineHeight: 12, fontWeight: '600', marginLeft: 83 }}>
//               Male
//             </Text>
//           </View>
//           <View style={{ justifyContent: "center", alignItems: "center" }}>
//             <Text style={{ textAlign: 'center', width: 34, height: 12, fontSize: 10, lineHeight: 12, fontWeight: '600' }}>
//               Female
//             </Text>
//           </View>
//         </View>
//       </View>,
//     ],
//     2: [
//       <View key="attr2">
//         <View style={styles.searchContainer}>
//           <TextInput
//             style={styles.searchInput}
//             onChangeText={inputHandler}
//             value={inputText}
//             placeholder="Type Category"
//           />
//           <TouchableOpacity>
//             <Text style={styles.searchButton}>Search</Text>
//           </TouchableOpacity>
//         </View>
//         <FlatList
//           scrollEnabled={false}
//           data={filteredRegions}
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={() => handleSelectRegion(item.text)}>
//               <Text style={styles.regionName}>{item.text}</Text>
//             </TouchableOpacity>
//           )}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       </View>,
//     ],
//     3: [
//       <View key="attr3" style={styles.surnameContainer}>
//         <TextInput
//           style={styles.surnameInput}
//           placeholder="Enter Surname"
//           value={surname}
//           onChangeText={handleSurnameInput}
//         />
//       </View>,
//     ],
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header} onPress={toggleExpand}>
//         <Text style={styles.title}>{data.title}</Text>
//         <TouchableOpacity onPress={toggleExpand}>
//           <AntDesign name={isExpanded ? 'up' : 'down'} size={24} color="#55A5A7" />
//         </TouchableOpacity>
//       </View>
//       {isExpanded && <View style={styles.content}>{attributes[data.id]}</View>}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#FFF",
//     borderRadius: 5,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 15,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333",
//   },
//   content: {
//     marginTop: 10,
//   },
//   attributeContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 10,
//   },
//   attributeBox: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//   },
//   searchContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   searchInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "#CCC",
//     padding: 5,
//     borderRadius: 5,
//   },
//   searchButton: {
//     backgroundColor: "#55A5A7",
//     color: "#FFF",
//     padding: 5,
//     borderRadius: 5,
//     marginLeft: 10,
//   },
//   regionName: {
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#CCC",
//   },
//   surnameContainer: {
//     marginTop: 10,
//   },
//   surnameInput: {
//     borderWidth: 1,
//     borderColor: "#CCC",
//     padding: 5,
//     borderRadius: 5,
//   },
// });
