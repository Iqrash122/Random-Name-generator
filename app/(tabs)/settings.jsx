import { Link } from "expo-router";
import {View,Text,StyleSheet} from "react-native"

const Settings = ()=>{
    return(
        <>
            <View style={style.container}>
                <Text>
                    Settings
                </Text>
                <Link href={"/details"}>Details</Link>
            </View>
        </>
    )
}
export default Settings;

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
        
    }
})