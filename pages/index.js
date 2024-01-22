import MeetupList from "@/components/meetups/MeetupList";
import axios from "axios";
import { useEffect } from "react";
import { MongoClient } from "mongodb";
// import { useEffect, useState } from "react";
export const DUMMY_MEETUPS=[
    {
        id:'m1',
        title:'A First Meetup',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/800px-Colosseo_2020.jpg',
        address:"some address 2111",
        description:"This is a first meetup"
    },
    {
        id:'m2',
        title:'A second Meetup',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/800px-Colosseo_2020.jpg',
        address:"some address4545",
        description:"This is a second meetup"
    },
    {
        id:'m3',
        title:'A third Meetup',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/800px-Colosseo_2020.jpg',
        address:"spme addrwes -33333",
        description:"This is the third meetup"
    }
]
function HomePage(props){
    // const [loadedMeetups,setLoadedMeetups] = useState([]);
    // useEffect(()=>{
    //     //react useffect will take place due to which DUMMY_MEETUPS wont appear
    //     //in site source data so bad SEO, also only the data on the first render
    //     //goes for SEO
    //     setLoadedMeetups(DUMMY_MEETUPS);
    // },[])
   
    return <MeetupList meetups={props.meetups}/>
}
/* this function is called before the compopnent function
used for getting the data that the component needs so that the data can be used for pre-rendering
this function is executed during the BUILD process --> not on the server neither on the client
should be used when  the data doesnot changes frequently
*/

export async function getStaticProps(){
     //fetch data from api
     //read file from file system
     //return an object = has to be named props
//revalidate runs the function after some time as provided so that the data gets updated.
        // can do authentication
        let result;
        try{
        console.log(process.env.MONGODB_SRV);
            const client = await MongoClient.connect(process.env.MONGODB_SRV);
            const db = client.db();
            const meetupsCollection = db.collection('meetups');
            result =await meetupsCollection.find().toArray();
            console.log(result)
         
            client.close();
        }
        catch(error){
            console.log(error);
        }
        
        return {
            props:{
                meetups:result.map(meetup =>({
                    title:meetup.title,
                    address:meetup.address,
                    image:meetup.image,
                    id:meetup._id.toString(),
                })),
            },
            revalidate:10
        }
}

// export async function getServerSideProps(context){
//     //fetch data from api or db
//     //runs on server so can run server side code
    
// }

export default HomePage;