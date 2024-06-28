import { Text, View } from "react-native"


export default function RegionList({data}){
    
    
    return(
        <>
            
                <View style={{elevation:4,backgroundColor:"#FFF", padding:20}}>
                    <View>
                        <Text>{data.text}</Text>
                    </View>                    
                </View>
            
        </>
    )
}