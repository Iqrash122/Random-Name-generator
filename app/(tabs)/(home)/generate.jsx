import { StyleSheet, Text, View } from 'react-native';

export default function Generate(){
    return (
        <>
            <View style={style.container}>
                <Text>
                    Generate 
                </Text>
            </View>

        
        </>

    );
} ;

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignContent:"center"
    }
})

