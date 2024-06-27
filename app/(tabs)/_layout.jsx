import { Tabs } from "expo-router";

export default function TabsLayout (){
    return(
        <>
            <Tabs screenOptions={{headerShown:false}}>
                <Tabs.Screen name="(home)" options={{title:"Home"}}/>
                <Tabs.Screen name="(favorite)" options={{title:"Favorite"}} />
                <Tabs.Screen name="(blogs)" options={{title:"blogs"}} />
                <Tabs.Screen name="settings" />
            </Tabs>
        </>
    )
}