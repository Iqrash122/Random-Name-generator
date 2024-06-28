import { Link } from "expo-router";
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
    image1: "image1",
    slug: "Gender",
    alt: "Gender",
    des: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    id: 2,
    title: "Region",
    image1: "image1",
    slug: "Region",
    alt: "Region",
    des: "Lorem ipsum dolor sit amet, consectetur",
  },
  {
    id: 3,
    title: "Surname",
    slug: "Surname",
    image1: "image1",
    alt: "Surname",
    des: "Lorem ipsum dolor sit amet, consectetur",
  },
];



const HomeScreen = () => {
  return (
    <ScrollView style={{flex:1, marginTop:30, marginBottom:20}}>
      <>
        <View>
          <View
            style={{ display: "flex",flexDirection: "row", columnGap: 135 }}
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

            <Link
              href={"/home_details"}
              style={{ marginTop: 24, marginRight: 21 }}
            >
              Favorite
            </Link>
          </View>

          <View
            style={{
              
              height: 131,
              backgroundColor: "red",
              marginTop: 28,
              marginHorizontal:13,
              borderRadius:5
            }}
          >

          </View>

          <View>
            <Text
              style={{
                width: 112,
                height: 19,
                marginLeft: 13,
                marginTop: 23,
                size: 16,
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
                  <HomeOptions data={items} key={items.id} />
                ))}
              </ScrollView>
            </View>
          </View>
          <TouchableOpacity>
            <Link
              href={"/generate"}
              style={{
                backgroundColor: "#55A5A7",
                width: 234,
                height: 37,
                borderRadius: 22,
                color: "white",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginLeft: 63,
                fontSize:14,
                fontWeight:600,
                lineHeight:17,
                textAlignVertical: "center",
              }}
            >
              Generate
            </Link>
          </TouchableOpacity>
        </View>
      </>
    </ScrollView>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  container: {},
});
