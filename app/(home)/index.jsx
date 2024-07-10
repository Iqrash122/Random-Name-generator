// import { AntDesign } from '@expo/vector-icons';
// import { useNavigation } from "@react-navigation/native";
// import { Link } from "expo-router";
// import React, { useState } from "react";

// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import HomeOptions from "../../../components/home_options";

// import { Image } from 'expo-image';

// const homeContent = [
//   {
//     id: 1,
//     title: "Gender",
//     image1: "Gender",
//     slug: "Gender",
//     alt: "Gender",
//     des: "Lorem ipsum dolor sit amet, consectetur",
//   },
//   {
//     id: 2,
//     title: "Region",
//     image1: "image1",
//     slug: "Region",
//     alt: "Region",
//     des: "Lorem ipsum dolor sit amet, consectetur",
//   },
//   {
//     id: 3,
//     title: "Surname",
//     slug: "Surname",
//     image1: "image1",
//     alt: "Surname",
//     des: "Lorem ipsum dolor sit amet, consectetur",
//   },
// ];

// const HomeScreen = () => {
//   const navigation = useNavigation();
//   const [selectedGender, setSelectedGender] = useState(null);
//   const [selectedRegion, setSelectedRegion] = useState(null);
//   const [surname, setSurname] = useState("");

//   const handleGenerate = () => {
//     console.log("Selected Gender: ", selectedGender);
//     console.log("Selected Region: ", selectedRegion);
//     console.log("Surname: ", surname);
//     navigation.navigate('generate', { selectedGender, selectedRegion, surname });
//   };

//   return (
//     <ScrollView style={{flex:1, marginTop:30, marginBottom:20}}>
//       <>
//         <View>
//           <View
//             style={{ display: "flex",flexDirection: "row", columnGap: 149 }}
//           >
//             <Text
//               style={{
//                 width: 161,
//                 height: 24,
//                 marginTop: 21,
//                 marginLeft: 13,
//                 fontSize: 20,
//                 lineHeight: 24.2,
//                 fontWeight: 700,
//                 color: "#55A5A7",
//               }}
//             >
//               Name Generator
//             </Text>

//             <Link
//               href={"/home_details"}
//               style={{ marginTop: 24 }}
//             >
//               <AntDesign name="hearto" size={24} color="#55A5A7" />
//             </Link>
//           </View>

//           <View
//             style={{

//               height: 131,
//               backgroundColor: "red",
//               marginTop: 28,
//               marginHorizontal:13,
//               borderRadius:5,
//             }}
//           >
//             <Image
//                 source="https://picsum.photos/seed/696/3000/2000"

//             />

//           </View>

//           <View>
//             <Text
//               style={{
//                 width: 112,
//                 height: 19,
//                 marginLeft: 13,
//                 marginTop: 23,
//                 size: 16,
//                 lineHeight: 19.38,
//                 fontWeight: 600,
//                 color: "#55A5A7",
//               }}
//             >
//               Select options
//             </Text>

//             <View style={{ display: "flex", flexDirection: "row" }}>
//               <ScrollView
//                 contentContainerStyle={{
//                   marginTop: 12,
//                   display: "flex",
//                   flexDirection: "column",
//                   padding: 12,
//                   rowGap: 10,
//                 }}
//               >
//                 {homeContent.map((items) => (
//                   <HomeOptions
//                         data={items}
//                         key={items.id}
//                         setSelectedGender={setSelectedGender}
//                         setSelectedRegion={setSelectedRegion}
//                         setSurname={setSurname}
//                       />
//                 ))}
//               </ScrollView>
//             </View>
//           </View>
//            <TouchableOpacity  onPress={handleGenerate} style={{ justifyContent: 'center', alignItems: 'center' }}>
//                   <Text
//                   style={styles.generateButton}
//                 >
//                   Generate
//                   </Text>
//               </TouchableOpacity>
//         </View>
//       </>
//     </ScrollView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   generateButton: {
//                 backgroundColor: "#55A5A7",
//                 width: 234,
//                 height: 37,
//                 borderRadius: 22,
//                 color: "white",
//                 textAlign: "center",
//                 fontSize:14,
//                 lineHeight:17,
//                 textAlignVertical: "center",
//               },
// });

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  PanResponder,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import myIcon from "../../assets/icons/Gender.svg";
import myIcon2 from "../../assets/icons/Region.svg";
import backImage from "../../assets/icons/backImage.png";
import slider from "../../assets/icons/slider.png";
import myIcon3 from "../../assets/icons/surName.svg";
import HomeOptions from "../../components/home_options";
const image = { uri: "../../assets/icons/sliderArrow.svg" };
const homeContent = [
  {
    id: 1,
    title: "Gender",
    image1: myIcon,
    slug: "Gender",
    alt: "Gender",
    des: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    id: 2,
    title: "Region",
    image1: myIcon2,
    slug: "Region",
    alt: "Region",
    des: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    id: 3,
    title: "Surname",
    image1: myIcon3,
    slug: "Surname",
    alt: "Surname",
    des: "Lorem ipsum dolor sit amet, consectetur",
  },
];

const names = [
  { name: "Daania", description: "Gender, Jews, Marie" },
  { name: "John", description: "Male, Christian, Smith" },
  { name: "Sara", description: "Female, Muslim, Ali" },
  { name: "Iqrash", description: "Male, Muslim, Ahmad" },
  // Add more names as needed
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [surname, setSurname] = useState("");
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const animatedValue = useState(new Animated.Value(0))[0];
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setValue(0);
      },
      onPanResponderMove: (evt, gestureState) => {
        // Calculate swipe progress based on gesture distance
        const swipeProgress = gestureState.dx / 200; // Adjust this value for sensitivity

        // Update animatedValue based on swipe progress
        animatedValue.setValue(swipeProgress);
      },
      onPanResponderRelease: (evt, gestureState) => {
        // Determine swipe direction and change name accordingly
        if (gestureState.dx > 100) {
          changeName(-1); // Swipe to the left
        } else if (gestureState.dx < -100) {
          changeName(1); // Swipe to the right
        } else {
          // If swipe is not significant, reset animation
          Animated.timing(animatedValue, {
            toValue: 0,
            duration: 300,
            easing: Easing.ease,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const changeName = (direction) => {
    const newIndex = (currentIndex + direction + names.length) % names.length;
    setCurrentIndex(newIndex);

    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const handleGenerate = () => {
    console.log("Selected Gender: ", selectedGender);
    console.log("Selected Region: ", selectedRegion);
    console.log("Surname: ", surname);
    navigation.navigate("generate", {
      selectedGender,
      selectedRegion,
      surname,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 15, marginBottom:5 }}>
      <ScrollView >
        <View>
          <View
            style={{ display: "flex", flexDirection: "row", columnGap: 170 }}
          >
            <Text
              style={{
                width: 161,
                height: 24,
                marginTop: 21,
                marginLeft: 13,
                fontSize: 20,
                lineHeight: 24.2,
                fontWeight: 700,
                color: "#55A5A7",
              }}
            >
              Name Generator
            </Text>

            <Link href={"/home_details"} style={{ marginTop: 24 }}>
              <AntDesign name="hearto" size={24} color="#55A5A7" />
            </Link>
          </View>

          <View style={styles.container}>
            <Image source={backImage} style={styles.backgroundImage} />
            <View style={styles.overlayContainer} {...panResponder.panHandlers}>
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Animated.Text
                  style={[
                    styles.overlayText,
                    {
                      opacity: animatedValue.interpolate({
                        inputRange: [-1, 0, 1],
                        outputRange: [0, 1, 0],
                      }),
                    },
                  ]}
                >
                  {names[currentIndex].name}
                </Animated.Text>
                <Text style={styles.descriptionText}>
                  {names[currentIndex].description}
                </Text>
              </View>
              <TouchableOpacity onPress={() => changeName(1)}>
                <View style={styles.sliderContainer}>
                  <Image source={slider} style={styles.sliderImage} />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text
              style={{
                width: 112,
                height: 19,
                marginLeft: 13,
                marginTop: 23,
                fontSize: 16,
                lineHeight: 19.38,
                fontWeight: 600,
                color: "#55A5A7",
              }}
            >
              Select options
            </Text>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <ScrollView
                contentContainerStyle={{
                  marginTop: 12,
                  display: "flex",
                  flexDirection: "column",
                  padding: 12,
                  rowGap: 10,
                }}
              >
                {homeContent.map((items) => (
                  <HomeOptions
                    data={items}
                    key={items.id}
                    setSelectedGender={setSelectedGender}
                    setSelectedRegion={setSelectedRegion}
                    setSurname={setSurname}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
          <TouchableOpacity
            onPress={handleGenerate}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Text style={styles.generateButton}>Generate</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  generateButton: {
    backgroundColor: "#55A5A7",
    width: 234,
    height: 37,
    borderRadius: 22,
    color: "white",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 17,
    textAlignVertical: "center",
  },
  container: {
    height: 131,
    backgroundColor: "#EAAFAF",
    marginTop: 28,
    marginHorizontal: 13,
    borderRadius: 5,
    overflow: "hidden", // Ensures the background image is clipped to the border radius
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    left: 0,
  },
  descriptionText: {
    fontSize: 11,
    color: "white",
  },
  overlayContainer: {
    flex: 1,
    flexDirection: "row", // Align items in a row
    alignItems: "center", // Center items vertically
    justifyContent: "space-between", // Space items between
    paddingHorizontal: 13, // Adjust padding to position the elements correctly
    // Adjust padding to position the slider correctly
  },
  sliderContainer: {
    width: 24,
    height: 24,
    backgroundColor: "#55A5A7",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  sliderImage: {
    width: 9,
    height: 14,
  },
  overlayText: {
    color: "#fff", // Adjust text color as needed
    fontSize: 24, // Adjust font size as needed
  },
});

// import { AntDesign } from '@expo/vector-icons';
// import { useNavigation } from "@react-navigation/native";
// import { Link } from "expo-router";
// import React, { useState } from "react";

// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// import HomeOptions from "../../../components/home_options";

// const homeContent = [
//   {
//     id: 1,
//     title: "Gender",
//     image1: "Gender",
//     slug: "Gender",
//     alt: "Gender",
//     des: "Lorem ipsum dolor sit amet, consectetur",
//   },
//   {
//     id: 2,
//     title: "Region",
//     image1: "image1",
//     slug: "Region",
//     alt: "Region",
//     des: "Lorem ipsum dolor sit amet, consectetur",
//   },
//   {
//     id: 3,
//     title: "Surname",
//     slug: "Surname",
//     image1: "image1",
//     alt: "Surname",
//     des: "Lorem ipsum dolor sit amet, consectetur",
//   },
// ];

// const HomeScreen = () => {
//   const navigation = useNavigation();
//   const [selectedGender, setSelectedGender] = useState(null);
//   const [selectedRegion, setSelectedRegion] = useState(null);
//   const [surname, setSurname] = useState("");

//   const handleGenerate = () => {
//     console.log("Selected Gender: ", selectedGender);
//     console.log("Selected Region: ", selectedRegion);
//     console.log("Surname: ", surname);
//     navigation.navigate('generate', { selectedGender, selectedRegion, surname });
//   };

//   return (
//     <ScrollView style={{flex:1, marginTop:30, marginBottom:20}}>
//       <>
//         <View>
//           <View
//             style={{ display: "flex",flexDirection: "row", columnGap: 149 }}
//           >
//             <Text
//               style={{
//                 width: 161,
//                 height: 24,
//                 marginTop: 21,
//                 marginLeft: 13,
//                 fontSize: 20,
//                 lineHeight: 24.2,
//                 fontWeight: 700,
//                 color: "#55A5A7",
//               }}
//             >
//               Name Generator
//             </Text>

//             <Link
//               href={"/home_details"}
//               style={{ marginTop: 24 }}
//             >
//               <AntDesign name="hearto" size={24} color="#55A5A7" />
//             </Link>
//           </View>

//           <View
//             style={{
//               height: 131,
//               backgroundColor: "red",
//               marginTop: 28,
//               marginHorizontal:13,
//               borderRadius:5,
//             }}
//           >

//           </View>

//           <View>
//             <Text
//               style={{
//                 width: 112,
//                 height: 19,
//                 marginLeft: 13,
//                 marginTop: 23,
//                 size: 16,
//                 lineHeight: 19.38,
//                 fontWeight: 600,
//                 color: "#55A5A7",
//               }}
//             >
//               Select options
//             </Text>

//             <View style={{ display: "flex", flexDirection: "row" }}>
//               <ScrollView
//                 contentContainerStyle={{
//                   marginTop: 12,
//                   display: "flex",
//                   flexDirection: "column",
//                   padding: 12,
//                   rowGap: 10,
//                 }}
//               >
//                 {homeContent.map((items) => (
//                   <HomeOptions
//                     data={items}
//                     key={items.id}
//                     setSelectedGender={setSelectedGender}
//                     setSelectedRegion={setSelectedRegion}
//                     setSurname={setSurname}
//                   />
//                 ))}
//               </ScrollView>
//             </View>
//           </View>
//            <TouchableOpacity  onPress={handleGenerate} style={{ justifyContent: 'center', alignItems: 'center' }}>
//                   <Text
//                   style={styles.generateButton}
//                 >
//                   Generate
//                   </Text>
//               </TouchableOpacity>
//         </View>
//       </>
//     </ScrollView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   generateButton: {
//                 backgroundColor: "#55A5A7",
//                 width: 234,
//                 height: 37,
//                 borderRadius: 22,
//                 color: "white",
//                 textAlign: "center",
//                 fontSize:14,
//                 lineHeight:17,
//                 textAlignVertical: "center",
//               },
// });
