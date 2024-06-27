import {Text,View,StyleSheet} from "react-native"

export default function  DetailsScreen() {
    return(
        <>
            <View style={style.container}>
                <Text style={{textAlign:"center"}}>
                    Home Details Screen
                </Text>
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