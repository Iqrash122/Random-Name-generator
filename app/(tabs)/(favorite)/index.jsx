import {View,Text,StyleSheet} from "react-native"
import { Link } from "expo-router"

export default function  Favorite(){
    return(
        <>
            <View>
                <Text>Favorite</Text>
                <Link href="/fav_details">Details</Link>
            </View>
        </>
    )
} 

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignContent:"center"
    }
})