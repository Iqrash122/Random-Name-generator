import {View,Text} from "react-native"
import { Link } from "expo-router"


export default function BlogsCard({data}){
    return(
        <>
            <Link href={
                    {
                        pathname:`/single/[name]`,
                        params:{name: data.title},
                    }
                } key={data.id}>
                <View style={{elevation:4,backgroundColor:"#FFF", padding:20}}>
                    <View>
                        <Text>{data.image}</Text>
                    </View>
                    <View>
                        <Text>{data.title}</Text>
                        <Text>{data.des}</Text>
                    </View>
                </View>
            </Link>
        </>
    )
}