import {View,Text,StyleSheet,ScrollView} from "react-native"
import BlogsCard from "../../../components/blogs_cards"

const BlogsContent = [
    {
        id:1,
        title:"blogs one",
        image: 'image',
        slug:"blogs_one",
        alt:"blogs_one",
        des:"Some text goes here"
    },
    {
        id:2,
        title:"blogs two",
        image: 'image',
        slug:"blogs_two",
        alt:"blogs_two",
        des:"Some text goes here"
    },
    {
        id:3,
        title:"blogs three",
        slug:"blogs_three",
        image:'image',
        alt:"blogs_three",
        des:"Some text goes here"
    },
    {
        id:4,
        title:"blogs four",
        slug:"blogs_four",
        image: 'image',
        alt:"blogs_four",
        des:"Some text goes here"
    },
    {
        id:5,
        title:"blogs five",
        slug:"blogs_five",
        image: 'image',
        alt:"blogs_five",
        des:"Some text goes here"
    },
    {
        id:6,
        title:"blogs six",
        slug:"blogs_six",
        image: 'image',
        alt:"blogs_six",
        des:"Some text goes here"
    }
]

export default function Blogs(){
    return(
        <>
            <View style={style.container}>
                <ScrollView contentContainerStyle={{columnGap:20,flexDirection:"column",width:"100%",height:"100%"}}>
                    {
                        BlogsContent.map(items=>(
                                <BlogsCard data={items} key={items.id} />
                            )
                        )
                    }
                </ScrollView>
            </View>
            
        </>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-start",
        alignContent:"flex-start"
    }
})