import { Stack } from "expo-router";

export default function BlogsLayout(){
    return(
        <>
            <Stack>
                <Stack.Screen name='index' options={{title:"Blogs"}} />
                <Stack.Screen name="single/[name]" options={{title:"Blog Single"}} />
            </Stack>
        </>
    )
}