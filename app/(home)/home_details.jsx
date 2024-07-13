import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Back from '../../assets/icons/back.svg';
export default function Favorite() {
  const route = useRoute();
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const loadSelectedItems = async () => {
      try {
        const storedItems = await AsyncStorage.getItem('selectedItems');
        if (storedItems) {
          setSelectedItems(JSON.parse(storedItems));
        }
      } catch (error) {
        console.error("Failed to load selected items from storage:", error);
      }
    };

    loadSelectedItems();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={styles.header}>
          <Link href={"/(home)"} style={{marginTop:7 }}>
            {/* <AntDesign name="left" size={24} color="#55A5A7" /> */}
            <Back />
          </Link>
          <Text style={styles.titles}>Favorite</Text>
        </View>
        <FlatList
          style={{ marginTop: 46 }}
          data={selectedItems}
          renderItem={({ item }) => (
            <View style={styles.view1}>
              <View style={styles.view2}>
                <Text style={{ fontSize: 16, lineHeight: 20, color: '#989898' }}>
                  {item.title}
                </Text>
                <Text style={{ fontSize: 11, lineHeight: 20, color: '#989898' }}>
                  {item.des}
                </Text>
              </View>
              <TouchableOpacity>
                <AntDesign name="heart" size={24} color="#55A5A7" />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 13,
    columnGap: 13,
  },
  titles: {
    // width: 161,
    // height: 24,
    fontSize: 20,
    fontWeight: "700",
    color: "black",
  },
  view1: {
    display: 'flex',
    flexDirection: "row",
    height: 60,
    columnGap: 214,
    borderWidth: 0.3,
    borderColor: '#55A5A7',
    justifyContent: 'center',
    textAlign: "center",
    alignItems: "center",
  },
  view2: {
    display: 'flex',
    flexDirection: 'column',
    width: 105,
    height: 32,
  }
});
