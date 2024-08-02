
import Checkbox from "expo-checkbox";
import { Image } from "expo-image";
import React, { useRef, useState } from "react";
import {
  Animated,
  Easing,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";

import IconFemale from "../assets/icons/feMale.png";
import Down from "../assets/icons/listArrow.svg";
import IconMale from "../assets/icons/male.png";
import Tick from '../assets/icons/tick.svg';
import Up from "../assets/icons/upArrow.svg";
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

// export default function HomeOptions({
//   data,
//   setSelectedGender,
//   setSelectedRegion,
//   setSurname,
// }) {


//   const [isExpanded, setIsExpanded] = useState(false);
//   const [inputText, setInputText] = useState("");
//   const [filteredRegions, setFilteredRegions] = useState(regionName);
//   const [selectedRegion, setLocalSelectedRegion] = useState(null);
//   const [selectedGender, setLocalSelectedGender] = useState(null);
//   const [surname, setLocalSurname] = useState("");
//   const animatedHeight = useRef(new Animated.Value(0)).current;
//   const animatedOpacity = useRef(new Animated.Value(0)).current;
//   const [contentHeight, setContentHeight] = useState(0);
//   const duration = 500;


//   const measureContent = (event) => {
//     setContentHeight(event.nativeEvent.layout.height);
//   };

//   const toggleExpand = () => {
//     if (isExpanded) {
//       Animated.parallel([
//         Animated.timing(animatedHeight, {
//           toValue: 0,
//           duration: 300,
//           useNativeDriver: false,
//           easing: Easing.in(Easing.ease),
//         }),
//         Animated.timing(animatedOpacity, {
//           toValue: 0,
//           duration: 300,
//           useNativeDriver: false,
//         }),
//       ]).start(() => setIsExpanded(false));
//     } else {
//       setIsExpanded(true);
//       Animated.parallel([
//         Animated.timing(animatedHeight, {
//           toValue: contentHeight,
//           duration: 300,
//           useNativeDriver: false,
//           easing: Easing.out(Easing.ease),
//         }),
//         Animated.timing(animatedOpacity, {
//           toValue: 1,
//           duration: 300,
//           useNativeDriver: false,
//         }),
//       ]).start();
//     }
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
//     Animated.parallel([
//       Animated.timing(animatedHeight, {
//         toValue: 0,
//         duration: duration,
//         useNativeDriver: false,
//         easing: Easing.in(Easing.ease),
//       }),
//       Animated.timing(animatedOpacity, {
//         toValue: 0,
//         duration: duration,
//         useNativeDriver: false,
//       }),
//     ]).start(() => setIsExpanded(false));
//   };

//   const handleGenderSelection = (gender) => {
//     setLocalSelectedGender(gender);
//     setSelectedGender(gender); // Pass value to parent
//     Animated.parallel([
//       Animated.timing(animatedHeight, {
//         toValue: 0,
//         duration: duration,
//         useNativeDriver: false,
//         easing: Easing.in(Easing.ease),
//       }),
//       Animated.timing(animatedOpacity, {
//         toValue: 0,
//         duration: duration,
//         useNativeDriver: false,
//       }),
//     ]).start(() => setIsExpanded(false));
//   };

//   const handleSurnameInput = (text) => {
//     setLocalSurname(text);
//     setSurname(text);
//      // Pass value to parent
//      Animated.parallel([
//       Animated.timing(animatedHeight, {
//         toValue: 0,
//         duration: duration,
//         useNativeDriver: false,
//         easing: Easing.in(Easing.ease),
//       }),
//       Animated.timing(animatedOpacity, {
//         toValue: 0,
//         duration: duration,
//         useNativeDriver: false,
//       }),
//     ]).start(() => setIsExpanded(false));
//   };

//   const getItem = (data, index) => ({
//     text: data[index].text,
//   });

//   // Function to get the total number of items
//   const getItemCount = (data) => data.length;

//   const attributes = {
//     1: [
//       <View key="attr1" nestedScrollEnabled={true} style={{marginBottom:15}}>
//         <View style={styles.attributeContainer}>
//           <View style={styles.attributeBox}>
//             <Checkbox
//               style={styles.checkbox}
//               value={selectedGender === "male"}
//               onValueChange={() => handleGenderSelection("male")}
//               color={selectedGender === "male" ? "#55A5A7" : undefined}
//             />
//             <Image
//               source={IconMale}
//               width={65}
//               height={77}
//               style={{
//                 justifyContent: "center",
//                 alignItems: "center",
//                 marginTop: 5,
//                 marginLeft: 19.5,
//                 marginBottom: 9,
//               }}
//             />
//           </View>
//           <View style={styles.attributeBox}>
//             <Checkbox
//               style={styles.checkbox}
//               value={selectedGender === "female"}
//               onValueChange={() => handleGenderSelection("female")}
//               color={selectedGender === "female" ? "#55A5A7" : undefined}
//             />
//             <Image
//               source={IconFemale}
//               width={65}
//               height={77}
//               style={{
//                 justifyContent: "center",
//                 alignItems: "center",
//                 marginTop: 4.2,
//                 marginLeft: 19.5,
//                 marginBottom: 9,
//               }}
//             />
//           </View>
//         </View>
//         <View
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             marginTop: 6,
//             justifyContent: "space-evenly",




//           }}
//         >
//           <View

//           >
//             <Text
//               style={{
//                 textAlign: "center",
//                 height: 12,
//                 fontSize: 10,
//                 lineHeight: 12,
//                 fontWeight: "600",

//                 // marginLeft: 75,
//               }}
//             >
//               Male
//             </Text>
//           </View>
//           <View style={{ justifyContent: "center", alignItems: "center" }}>
//             <Text
//               style={{
//                 textAlign: "center",
//                 height: 12,
//                 fontSize: 10,
//                 lineHeight: 12,
//                 fontWeight: "600",
//               }}
//             >
//               Female
//             </Text>
//           </View>
//         </View>
//       </View>,
//     ],
//     2: [
//       <View key="attr2" style={{marginBottom:5}}>
//         <View style={styles.searchContainer}>
//           <TextInput
//             style={styles.searchInput}
//             onChangeText={inputHandler}
//             value={inputText}
//             placeholder="Type Category"
//           />
//           <TouchableOpacity style={styles.searchButton} >
//             <Text style={{color:'white', fontSize:15, padding:2}}>Search</Text>
//           </TouchableOpacity>
//         </View>

//         <FlatList 
//           scrollEnabled={true}
//           style={styles.regionList} // Added style for region list
//           data={filteredRegions}
//           keyExtractor={(item) => item.text}
//           renderItem={({ item }) => (
//             <View style={[styles.regionText, item.text === selectedRegion && {
//               backgroundColor: "#55A5A7",
//               opacity: 1, // Set opacity between 0 and 1
//               color: "white",


//             },]}>
//               <TouchableOpacity onPress={() => handleSelectRegion(item.text)} style={{flex:1, display:'flex',}}>
//                 <Text
//                   style={[
//                     styles.regionTexts,
//                     item.text === selectedRegion && {
//                     //   backgroundColor: "#55A5A7",
//                     //   opacity: 0.7, // Set opacity between 0 and 1
//                       color: "white",


//                     },
//                   ]}
//                 >
//                   {item.text}
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         />
//       </View>,
//     ],
//     3: [
//       <View style={{display:'flex', flex:1, marginBottom:15}}>      
//         <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.searchInpus}
//           onChangeText={inputHandler}
//           value={inputText}
//           placeholder="Enter Here"
//         />
//         <View style={styles.regionTexts}>
//             <TouchableOpacity style={styles.searchButtons} onPress={handleSurnameInput}  >
//               <Tick />
//             </TouchableOpacity>
//         </View>
//       </View>
//     </View>


//     ],
//   };





//   return (
//     <SafeAreaView>
//       <>
//       <TouchableOpacity onPress={toggleExpand}>
//           <View style={styles.container}>
//             <View style={styles.image1}>
//               <data.image1 width={50} height={50} />
//             </View>
//             <View style={styles.title}>
//               <Text style={styles.titleText}>{data.title}</Text>
//               <Text style={styles.descriptionText}>{data.des}</Text>
//             </View>
//             <View style={styles.image2}>
//               <TouchableOpacity onPress={toggleExpand} >
//                 <View style={{marginLeft:30}} >{isExpanded ? <Up /> : <Down />}</View>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </TouchableOpacity>
//         {isExpanded && (
//           <Animated.View
//             style={[
//               styles.expandableList,
//               { height: animatedHeight, opacity: animatedOpacity },
//             ]}
//           >

//             <View onLayout={measureContent}  >
//               {attributes[data.id]?.map((attr, index) => (
//                 <View key={index}>{attr}</View>
//               ))}
//               {/* {attributes(data.id)} */}
//               </View>
//           </Animated.View>
//         )}
//       </>
//     </SafeAreaView>
//   );
// }




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
  const animatedHeight = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const [contentHeight, setContentHeight] = useState(0);
  const duration = 500;


  const measureContent = (event) => {
    setContentHeight(event.nativeEvent.layout.height);
  };

  const toggleExpand = () => {
    if (isExpanded) {
      Animated.parallel([
        Animated.timing(animatedHeight, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
          easing: Easing.in(Easing.ease),
        }),
        Animated.timing(animatedOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start(() => setIsExpanded(false));
    } else {
      setIsExpanded(true);
      Animated.parallel([
        Animated.timing(animatedHeight, {
          toValue: contentHeight,
          duration: 300,
          useNativeDriver: false,
          easing: Easing.out(Easing.ease),
        }),
        Animated.timing(animatedOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
    }
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
    Animated.parallel([
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: duration,
        useNativeDriver: false,
        easing: Easing.in(Easing.ease),
      }),
      Animated.timing(animatedOpacity, {
        toValue: 0,
        duration: duration,
        useNativeDriver: false,
      }),
    ]).start(() => setIsExpanded(false));
  };

  const handleGenderSelection = (gender) => {
    setLocalSelectedGender(gender);
    setSelectedGender(gender); // Pass value to parent
    Animated.parallel([
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: duration,
        useNativeDriver: false,
        easing: Easing.in(Easing.ease),
      }),
      Animated.timing(animatedOpacity, {
        toValue: 0,
        duration: duration,
        useNativeDriver: false,
      }),
    ]).start(() => setIsExpanded(false));
  };

  const handleTickPress = () => {
  //  Pass value to parent
    Animated.parallel([
      Animated.timing(animatedHeight, {
        toValue: 0,
        duration: duration,
        useNativeDriver: false,
        easing: Easing.in(Easing.ease),
      }),
      Animated.timing(animatedOpacity, {
        toValue: 0,
        duration: duration,
        useNativeDriver: false,
      }),
    ]).start(() => setIsExpanded(false));
  };

  const handleSurnameInput = (text) => {
    setLocalSurname(text);
    setSurname(text);
    
  };

  const getItem = (data, index) => ({
    text: data[index].text,
  });

  // Function to get the total number of items
  const getItemCount = (data) => data.length;

  const attributes = {
    1: [
      <View key="attr1" nestedScrollEnabled={true} style={{ marginBottom: 15 }}>
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
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 6,
            justifyContent: "space-evenly",




          }}
        >
          <View

          >
            <Text
              style={{
                textAlign: "center",
                height: 12,
                fontSize: 10,
                lineHeight: 12,
                fontWeight: "600",

                // marginLeft: 75,
              }}
            >
              Male
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                textAlign: "center",
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
      <View style={{ flex: 1 }}>
      <View key="attr2" style={{ marginBottom: 5 }}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            onChangeText={inputHandler}
            value={inputText}
            placeholder="Type Category"
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={{ color: 'white', fontSize: 15, padding: 2 }}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.regionList}>
        {filteredRegions.map((item) => (
          <TouchableOpacity key={item.text} onPress={() => handleSelectRegion(item.text)}>
            <View style={[styles.regionText, item.text === selectedRegion && { backgroundColor: "#55A5A7" }]}>
              <Text style={[styles.regionTexts, item.text === selectedRegion && { color: "white" }]}>
                {item.text}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
        
      </View>,
    ],
    3: (
      <View key="3" style={{ marginBottom: 15 }}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            value={surname}
            onChangeText={handleSurnameInput}
            placeholder="Enter Here"
          />
          <TouchableOpacity style={styles.searchButton}  onPress={handleTickPress}>
            <Tick  /> 
          </TouchableOpacity>
        </View>
      </View>
    ),
  };

  return (
    <SafeAreaView>
      <>
        <TouchableOpacity onPress={toggleExpand}>
          <View style={styles.container}>
            <View style={styles.image1}>
              <data.image1 width={50} height={50} />
            </View>
            <View style={styles.title}>
              <Text style={styles.titleText}>{data.title}</Text>
              <Text style={styles.descriptionText}>{data.des}</Text>
            </View>
            <View style={styles.image2}>
              <TouchableOpacity onPress={toggleExpand} >
                <View style={{ marginLeft: 30 }} >{isExpanded ? <Up /> : <Down />}</View>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        {isExpanded && (
          <Animated.View
            style={[
              styles.expandableList,
              { height: animatedHeight, opacity: animatedOpacity },
            ]}
          >
            <View onLayout={measureContent}>
              {attributes[data.id]}
            </View>
          </Animated.View>
        )}
      </>
    </SafeAreaView>
  );
}






const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: 90,
    backgroundColor: "white",
    columnGap: 10.76,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: "#55A5A7",
    shadowOffset: 0.5,
    shadowOpacity: 0.5,

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
    justifyContent: 'center',
    alignItems: 'centers'
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
    // width: 358,
    // height: 41,
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 0.5,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-around',
    // columnGap: 5,
    alignItems: "center",
    // marginLeft: -18,
    color: "black",
    borderRadius: 5,
    shadowColor: '#55A5A7',
    shadowOffset: 4,
    elevation: 2,
    shadowOpacity: 0.4,

  },
  searchContainer: {
    // width: 358,
    // height: 41,
    padding: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 0.5,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-around',
    // columnGap: 5,
    alignItems: "center",
    // marginLeft: -18,
    color: "black",
    borderRadius: 5,
    shadowColor: '#55A5A7',
    shadowOffset: 4,
    elevation: 2,
    shadowOpacity: 0.4,

  },
  icon: {
    marginBottom: 5,
  },
  searchInput: {
    width: 252,
    height: 28,
    marginLeft: 11,
    borderWidth: 1,
    borderColor: "#55A5A7",
    marginVertical: 7,
    padding: 4,
    shadowColor: '#55A5A7',
    shadowOffset: 4,
    elevation: 2,
    shadowOpacity: 0.4,
    color: "#55A5A7"


  },
  searchInpus: {
    width: 252,
    height: 28,
    marginLeft: 11,
    borderWidth: 1,
    borderColor: "#55A5A7",
    marginVertical: 7,
    padding: 4,
    color: "#55A5A7",
    shadowColor: '#55A5A7',
    shadowOffset: 4,
    elevation: 2,
    shadowOpacity: 1,


  },
  searchButton: {
    // height: 28,
    padding: 4,
    borderWidth: 1,
    borderColor: "#55A5A7",
    // textAlign: "center",
    // justifyContent: "center",
    // alignItems: "center",
    // textAlignVertical: "center",
    color: "white",
    fontSize: 12,
    borderRadius: 5,
    shadowColor: '#55A5A7',
    shadowOffset: 4,
    elevation: 2,
    shadowOpacity: 0.8,
    backgroundColor: "#55A5A7"

  },

  searchButtons: {
    // height: 28,
    padding: 8,
    borderWidth: 1,
    borderColor: "#55A5A7",

    color: "white",
    fontSize: 12,
    borderRadius: 5,
    shadowColor: '#55A5A7',
    shadowOffset: 4,
    elevation: 2,
    shadowOpacity: 0.8,
    backgroundColor: "#55A5A7"
  },
  regionText: {
    display: 'flex',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    color: "#818181",
    fontSize: 14,
    lineHeight: 16,
    overflow: "scroll",
    flex: 1,

    // marginBottom:150
  }, regionTexts: {


    // marginBottom:150
  },
  regionTexts: {
    display: 'flex',
    flex: 1,


  },
  expandableList: {
    padding: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 10,
    overflow: "scroll",
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
    opacity: 70,
    marginLeft: -15,
  },
  regionList: {
    height: 250,
    marginLeft: 15,
  },
});
