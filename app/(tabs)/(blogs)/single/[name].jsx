import { Link } from "expo-router"
import {Text,View,StyleSheet} from "react-native"
import { useLocalSearchParams } from "expo-router";
import { useNavigation } from "expo-router";


export default function BlogSingle(){
    const {name} = useLocalSearchParams();
    const navigation = useNavigation();
    
    return(
        <>
            <View style={style.container}>
                <Text style={{textAlign:"center"}}>{name}</Text>
                <Link href={'/'}>Go to blogs</Link>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})