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





import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HomeOptions from "../../../components/home_options";

const homeContent = [
  {
    id: 1,
    title: "Gender",
    image1: require('../../../assets/icons/gender.png'),
    slug: "Gender",
    alt: "Gender",
    des: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    id: 2,
    title: "Region",
    image1: require('../../../assets/icons/Region.svg'),
    slug: "Region",
    alt: "Region",
    des: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    id: 3,
    title: "Surname",
    image1: require('../../../assets/icons/surName.svg'),
    slug: "Surname",
    alt: "Surname",
    des: "Lorem ipsum dolor sit amet, consectetur",
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [surname, setSurname] = useState("");

  const handleGenerate = () => {
    console.log("Selected Gender: ", selectedGender);
    console.log("Selected Region: ", selectedRegion);
    console.log("Surname: ", surname);
    navigation.navigate('generate', { selectedGender, selectedRegion, surname });
  };

  return (
    <ScrollView style={{ flex: 1, marginTop: 30, marginBottom: 20 }}>
      <View>
        <View style={{ display: "flex", flexDirection: "row", columnGap: 170 }}>
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

        <View
          style={{
            height: 131,
            backgroundColor: "red",
            marginTop: 28,
            marginHorizontal: 13,
            borderRadius: 5,
          }}
        >
          {/* Add any content you want in this View */}
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
        <TouchableOpacity onPress={handleGenerate} style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.generateButton}>
            Generate
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
