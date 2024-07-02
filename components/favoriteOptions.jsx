import { Text, View } from "react-native"


export default function FavoriteList({data}){
    
    
    return(
        <>
            
                <View style={{elevation:4,backgroundColor:"#FFF", padding:20}}>
                    <View>
                        <Text>{data.name}</Text>
                        <View>
                            <Text>{data.des}</Text>
                            <Text>{data.image}</Text>
                        </View>
                    </View>                    
                </View>
            
        </>
    )
}