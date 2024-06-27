import { Stack } from "expo-router";

const HomeLayout = ()=>{
    return(
        <>
            <Stack>
                <Stack.Screen name="index" options={{title:'Home',headerShown:true}} />
                <Stack.Screen name='home_details' options={{title:"Home Details",headerShown:true}}/>
            </Stack>
        
        </>
    )
}
export default HomeLayout