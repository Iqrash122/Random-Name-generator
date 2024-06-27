import { Stack } from "expo-router";


export default function FavoriteLayout(){
    return(
        <>
            <Stack>
                <Stack.Screen name="index" options={{title:"Favorite",headerShown:true}} />
                <Stack.Screen name='fav_details' options={{title:"Favorite Details",headerShown:true}}/>
            </Stack>
        </>
    )
}
