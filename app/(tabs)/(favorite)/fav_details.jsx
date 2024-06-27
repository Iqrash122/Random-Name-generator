import {Text,View,StyleSheet} from "react-native"


export default function Details(){
    return(
        <>
            <View style={style.container}>
                <Text style={{textAlign:"center"}}>Favorite Details Page</Text>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:"center"
    }
})