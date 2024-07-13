import { AntDesign, Octicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Regenerate from "../../assets/icons/regenerate.svg";
const baseUrl = "https://chatgpt-api.shn.hk/v1/";
const GenerateScreen = () => {
  const FavoriteList = [
    { id: 1, title: "Marie Sofia", des: "Gender, Jews, Marie" },
    { id: 2, title: "John Doe", des: "Gender, English, John" },
    { id: 3, title: "Jane Smith", des: "Gender, American, Jane" },
    { id: 4, title: "Marie Sofia", des: "Gender, Jews, Marie" },
    { id: 5, title: "Marie Sofia", des: "Gender, Jews, Marie" },
    { id: 6, title: "Marie Sofia", des: "Gender, Jews, Marie" },
    { id: 7, title: "Marie Sofia", des: "Gender, Jews, Marie" },
    { id: 8, title: "Marie Sofia", des: "Gender, Jews, Marie" },
  ];
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [surname, setSurname] = useState("");
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorFlag, setErrorFlag] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const loadSelectedItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem("selectedItems");
        if (storedItems) {
          setSelectedItems(JSON.parse(storedItems));
        }
      } catch (error) {
        console.error("Failed to load selected items from storage:", error);
      }
    };

    loadSelectedItems();
  }, []);

  useEffect(() => {
    const storeSelectedItems = async () => {
      try {
        await AsyncStorage.setItem(
          "selectedItems",
          JSON.stringify(selectedItems)
        );
      } catch (error) {
        console.error("Failed to store selected items:", error);
      }
    };

    storeSelectedItems();
  }, [selectedItems]);

  const toggleHeart = (item) => {
    if (selectedItems.some((selectedItem) => selectedItem.id === item.id)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem.id !== item.id)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    const url = `${baseUrl}/api/names`;

    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url, {
          signal: abortController.signal,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer https://chatgpt-api.shn.hk/v1/`, // Replace with your actual API key
          },
        });

        if (response.status === 200) {
          setUser(response.data.data);
        } else {
          throw new Error("Failed to fetch name");
        }
      } catch (error) {
        if (abortController.signal.aborted) {
          console.log("Data fetching cancelled");
        } else {
          setErrorFlag(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
    console.log(fetchUsers());

    return () => abortController.abort("Data fetching cancelled");
  }, [selectedGender, selectedRegion, surname]);

  const handleGenerate = () => {
    navigation.navigate("generate", {
      selectedGender: selectedGender,
      selectedRegion: selectedRegion,
      surname: surname,
    });
  };

  const handleNavigateToFavorite = () => {
    navigation.navigate("favorite", { selectedItems });
  };

  const { params } = route;
  const routeSelectedGender = params?.selectedGender || null;
  const routeSelectedRegion = params?.selectedRegion || null;
  const routeSurname = params?.surname || "";

  const generatedName =
    routeSelectedGender && routeSelectedRegion && routeSurname
      ? `Generate Name ${routeSelectedGender}-${routeSelectedRegion}-${routeSurname}`
      : "Please select options to generate a name.";

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.logo}>
        <TouchableOpacity>
          <Link href={"/(home)"} style={{ marginTop: 14, marginLeft: 13 }}>
            <Octicons name="chevron-left" size={24} color="white" />
          </Link>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 16,
            width: 85,
            height: 19,
            fontSize: 16.09,
            lineHeight: 19.47,
            fontWeight: 600,
            color: "white",
          }}
        >
          Your Name
        </Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.container}>
          <Text style={styles.containerText}>{generatedName}</Text>
          <Text style={styles.containerText1}>
            {routeSelectedRegion} {routeSelectedGender}
          </Text>
        </View>

        <View style={styles.containerMean}>
          <Text style={styles.containerMeanText}>
            Meaning of this name is lorem Ipsum dolar, lorem Ipsum dolar lorem
            Ipsum, lorem Ipsum dolar lorem Ipsum, lorem Ipsum dolar lorem Ipsum
          </Text>
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <Text
          style={{
            marginLeft: 13,
            marginTop: 24,
            fontSize: 20,
            color: "#55A5A7",
            fontWeight: "700",
          }}
        >
          Suggested Names
        </Text>
        <View style={{ flex: 1 }}>
          <FlatList
            style={{ marginTop: 16 }}
            data={FavoriteList}
            keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique id
            renderItem={({ item }) => (
              <View style={styles.view1}>
                <View style={styles.view2}>
                  <Text
                    style={{ fontSize: 16, lineHeight: 20, color: "#989898" }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{ fontSize: 11, lineHeight: 20, color: "#989898" }}
                  >
                    {item.des}
                  </Text>
                </View>

                <TouchableOpacity onPress={() => toggleHeart(item)}>
                  <AntDesign
                    name={
                      selectedItems.some(
                        (selectedItem) => selectedItem.id === item.id
                      )
                        ? "heart"
                        : "hearto"
                    } // Change icon based on state
                    size={24}
                    color="#55A5A7"
                  />
                </TouchableOpacity>
              </View>
            )}
            scrollEnabled={true}
          />
        </View>
      </View>
      <View style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}>

        <TouchableOpacity onPress={handleGenerate} style={styles.generateButton}>
          <Regenerate
            style={{
              
            }}
            selectedGender={selectedGender}
            selectedRegion={selectedRegion}
            surname={surname}
          />
  
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity style={styles.generateButton} >
        <Regenerate  selectedGender={selectedGender}
          selectedRegion={selectedRegion}
          surname={surname}/>
       
      </TouchableOpacity> */}
    </View>
  );
};

export default GenerateScreen;

const styles = StyleSheet.create({
  logo: {
    display: "flex",
    flexDirection: "row",
    columnGap: 13.78,
    backgroundColor: "#55A5A7",
    height: 48,
    marginTop: 1.12,
    textAlignVertical: "center",
    marginTop: 1.12,
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
    marginLeft: 320,
  },
  container: {
    width: 308,
    height: 132,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#AAAAAA",
    marginTop: 11,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",

    rowGap: 11,
  },
  view1: {
    display: "flex",
    flexDirection: "row",
    height: 60,
    columnGap: 214,
    borderWidth: 0.3,
    borderColor: "#55A5A7",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  view2: {
    display: "flex",
    flexDirection: "column",
    width: 105,
    height: 32,
  },
  containerText: {
    width: 144,
    height: 22,
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
  },
  containerText1: {
    height: 10,
    fontSize: 8,
    lineHeight: 10,
    color: "#818181",
  },
  containerMean: {
    width: 307,
    height: 69,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#AAAAAA",
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  containerMeanText: {
    width: 286,
    height: 39,
    fontSize: 10,
    textAlign: "center",
    lineHeight: 12.5,
    color: "#818181",
  },
  generateButton: {
    backgroundColor: "#55A5A7",
    width: 234,
    height: 37,
    borderRadius: 22,
    color: "white",
    fontSize: 14,
    lineHeight: 17,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  container1: {
    width: 308,
    height: 132,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#AAAAAA",
    marginTop: 11,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginLeft: 38,
    rowGap: 11,
    marginTop: 75,
  },
});

// import { EvilIcons, Octicons } from '@expo/vector-icons';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import axios from "axios";
// import { Link } from 'expo-router';
// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// const baseUrl = 'https://chatgpt-api.shn.hk/v1'

// const GenerateScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedGender, setSelectedGender] = useState(null);
//   const [selectedRegion, setSelectedRegion] = useState(null);
//   const [surname, setSurname] = useState("");
//   const [generatedName, setGeneratedName] = useState("");

//   useEffect(() => {
//     if (route.params) {
//       const { selectedGender, selectedRegion, surname } = route.params;
//       setSelectedGender(selectedGender);
//       setSelectedRegion(selectedRegion);
//       setSurname(surname);

//       const fetchGeneratedName = async () => {
//         try {
//           setLoading(true);
//           const response = await axios.post(`${baseUrl}/api/names`, {
//             gender: selectedGender,
//             region: selectedRegion,
//             surname: surname,
//           });
//           setGeneratedName(response.data.generatedName);
//         } catch (error) {
//           setError("Failed to generate name");
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchGeneratedName();
//       console.log(fetchGeneratedName())
//     }
//   }, [route.params]);

//   return (
//     <View style={{ flex: 1 }}>
//             <View style={styles.logo}>
//                <TouchableOpacity>
//                  <Link href={"/(home)"} style={{marginTop:14, marginLeft:13}}>
//                    <Octicons name="chevron-left" size={24} color="white" />
//                  </Link>
//                </TouchableOpacity>
//                <Text style={{marginTop:16, width:85,height:19, fontSize:16.09, lineHeight:19.47, fontWeight:600, color:'white'}}>
//                  Your Name
//               </Text>
//              </View>

//              <View style={styles.container}>
//                <Text style={styles.containerText}>{generatedName} MR Sally Ramos</Text>
//                <Text style={styles.containerText1}>Spanish boy</Text>
//              </View>

//              <View style={styles.containerMean}>
//                <Text style={styles.containerMeanText}>
//                  Meaning of this name is lorem Ipsum dolar, lorem Ipsum dolar
//                  lorem Ipsum, lorem Ipsum dolar lorem Ipsum, lorem Ipsum
//                  dolar lorem Ipsum
//                </Text>
//              </View>
//              <TouchableOpacity style={styles.generateButton} >
//                <EvilIcons name="refresh" size={37} color="white" />
//              </TouchableOpacity>
//          </View>
//       );
//     };

//     export default GenerateScreen;

//     const styles = StyleSheet.create({
//       logo:{
//         display:'flex',
//         flexDirection:"row",
//         columnGap:13.78,
//         backgroundColor:"#55A5A7",
//         width:385,
//         height:48,
//         marginTop:1.12,
//         textAlignVertical:"center",
//         marginTop:36
//       },
//       container:{
//         width:308,
//         height:132,
//         borderRadius:5,
//         borderWidth:1,
//         borderColor:"#AAAAAA",
//         marginTop:11,
//         justifyContent:'center',
//         alignItems:'center',
//         display:'flex',
//         marginLeft:38,
//         rowGap:11
//       },
//       containerText:{
//         width:144,
//         height:22,
//         fontSize:18,
//         lineHeight:22,
//         textAlign:'center'
//       },
//       containerText1:{
//         width:46,
//         height:10,
//         fontSize:8,
//         lineHeight:10,
//         color:'#818181'
//       },
//       containerMean:{
//         width:307,
//         height:69,
//         borderRadius:5,
//         borderWidth:1,
//         borderColor:"#AAAAAA",
//         marginTop:5,
//         justifyContent:'center',
//         alignItems:'center',
//         display:'flex',
//         marginLeft:38,
//       },
//       containerMeanText:{
//         width:286,
//         height:39,
//         fontSize:10,
//         textAlign:'center',
//         lineHeight:12.5,
//         color:'#818181'
//       },
//       generateButton: {
//         backgroundColor: "#55A5A7",
//         width: 234,
//         height: 37,
//         borderRadius: 22,
//         color: "white",
//         fontSize:14,
//         lineHeight:17,
//         alignItems:"center",
//         justifyContent:"center",
//         marginLeft:73,
//         marginTop:274,
//       },
//       loadingContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
//       errorText: {
//         fontSize: 18,
//         color: 'red',
//       },
//       container1:{
//         width:308,
//         height:132,
//         borderRadius:5,
//         borderWidth:1,
//         borderColor:"#AAAAAA",
//         marginTop:11,
//         justifyContent:'center',
//         alignItems:'center',
//         display:'flex',
//         marginLeft:38,
//         rowGap:11,
//         marginTop:75
//       },
//     });

// // import { useRoute } from '@react-navigation/native';
// // import React, { useEffect, useState } from 'react';
// // import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

// // const GenerateScreen = () => {
// //   const route = useRoute();
// //   const { selectedGender, selectedRegion, surname } = route.params;

// //   const [generatedName, setGeneratedName] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch(`https://api.parser.name/?endpoint=generate&results=3&gender=${selectedGender}&region=${selectedRegion}&surname=${surname}`, {
// //           headers: {
// //             'Authorization': 'Bearer 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'
// //           }
// //         });
// //         console.log('Response:', response); // Log the response object

// //         if (!response.ok) {
// //           throw new Error('Failed to fetch data');
// //         }

// //         const data = await response.json();
// //         console.log('Response JSON:', data); // Log the JSON data from the response

// //         setGeneratedName(data.name);
// //         console.log('Generated Name:', data.name); // Log the generated name to console
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //         setError(error.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, [selectedGender, selectedRegion, surname]);

// //   if (loading) {
// //     return (
// //       <View style={styles.loadingContainer}>
// //         <ActivityIndicator size="large" color="#55A5A7" />
// //       </View>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <View style={styles.container}>
// //         <Text style={styles.errorText}>Error: {error}</Text>
// //       </View>
// //     );
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.generatedName}>{generatedName}</Text>
// //     </View>
// //   );
// // };

// // export default GenerateScreen;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   loadingContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   generatedName: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#55A5A7',
// //   },
// //   errorText: {
// //     fontSize: 18,
// //     color: 'red',
// //   },
// // });

// import { EvilIcons, Octicons } from '@expo/vector-icons';
// import { useNavigation, useRoute } from '@react-navigation/native';
// import axios from 'axios';
// import { Link } from 'expo-router';
// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// const GenerateScreen = () => {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [generatedName, setGeneratedName] = useState("");
//   const { selectedGender, selectedRegion, surname } = route.params || {};

//   useEffect(() => {
//     if (selectedGender && selectedRegion && surname) {
//       handleGenerate();
//     }
//   }, [selectedGender, selectedRegion, surname]);

//   const handleGenerate = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await axios.post('https://api.openai.com/v1/chat/completions',
//          {

//         gender: selectedGender,
//         region: selectedRegion,
//         surname: surname,
//       });

//       setGeneratedName(response.data.generatedName);
//     } catch (err) {
//       setError("Failed to generate name. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <View style={styles.logo}>
//         <TouchableOpacity>
//           <Link href={"/(home)"} style={{ marginTop: 14, marginLeft: 13 }}>
//             <Octicons name="chevron-left" size={24} color="white" />
//           </Link>
//         </TouchableOpacity>
//         <Text style={styles.logoText}>Your Name</Text>
//       </View>

//       {loading ? (
//         <View style={styles.loadingContainer}>
//           <ActivityIndicator size="large" color="#0000ff" />
//         </View>
//       ) : error ? (
//         <View style={styles.errorContainer}>
//           <Text style={styles.errorText}>{error}</Text>
//         </View>
//       ) : (
//         <View style={styles.container}>
//           <Text style={styles.containerText}>{generatedName || "Please select options to generate a name."}</Text>
//         </View>
//       )}

//       <TouchableOpacity style={styles.generateButton} onPress={handleGenerate}>
//         <EvilIcons name="refresh" size={37} color="white" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default GenerateScreen;

// const styles = StyleSheet.create({
//   logo: {
//     display: 'flex',
//     flexDirection: "row",
//     columnGap: 13.78,
//     backgroundColor: "#55A5A7",
//     width: '100%',
//     height: 48,
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     marginTop: 36
//   },
//   logoText: {
//     marginLeft: 13,
//     fontSize: 16,
//     lineHeight: 19,
//     fontWeight: '600',
//     color: 'white'
//   },
//   container: {
//     width: 308,
//     height: 132,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: "#AAAAAA",
//     marginTop: 11,
//     justifyContent: 'center',
//     alignItems: 'center',
//     display: 'flex',
//     marginLeft: 38,
//     rowGap: 11
//   },
//   containerText: {
//     width: 144,
//     height: 22,
//     fontSize: 18,
//     lineHeight: 22,
//     textAlign: 'center'
//   },
//   generateButton: {
//     backgroundColor: "#55A5A7",
//     width: 234,
//     height: 37,
//     borderRadius: 22,
//     alignItems: "center",
//     justifyContent: "center",
//     marginLeft: 73,
//     marginTop: 24,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   errorText: {
//     fontSize: 18,
//     color: 'red',
//   },
// });
