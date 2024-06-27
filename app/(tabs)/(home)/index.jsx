import {Text,View,StyleSheet} from "react-native"
import { Link } from "expo-router"

const HomeScreen = ()=>{
    return(
        <>
            <View style={style.container}>
                <Text>
                    Home Screen
                </Text>
                <Link href={"/home_details"}>Details</Link>
            </View>
        </>
    )
}

export default HomeScreen

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
