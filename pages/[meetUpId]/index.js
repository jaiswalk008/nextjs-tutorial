import { useRouter } from "next/router";
import { DUMMY_MEETUPS } from "../index";
import MeetupItem from "@/components/meetups/MeetupItem";
import { MongoClient , ObjectId} from "mongodb";

const MeetupDetail = ({meetup}) => {

    // const router = useRouter();
    // const meetupId = router.query.meetUpId;  
    
    console.log(meetup);
    return(
        <MeetupItem key={meetup.id} id={meetup.id} image={meetup?.image}
        title={meetup?.title} address={meetup?.address}
        showDetails={false}
      />
    )
}/*In the pages directory, the getStaticPaths function is used
 to define the dynamic paths that should be pre-rendered at build time. */
//false-means paths contain all supported meetUpId values.therefore if entereed anything else
//the user will see 404 error
//true: (default) Dynamic segments not included in generateStaticParams are generated on demand.
//- it is used when there are a lot of dynamic routes but we only want to the pre-render the most 
// used ones and it will pre-generate others when requested
export async function getStaticPaths(){
  try {
    const client = await MongoClient.connect(process.env.MONGODB_SRV);
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const meetups = await meetupCollection.find().toArray();
    client.close();
    return {
      fallback:false,
      paths:meetups.map(meetup =>{
        return {
          params:{
            meetUpId:meetup._id.toString()
          }
        }
      })
    }
    
  } catch (error) {
    console.log(error)
  }
}
export async function getStaticProps(context){
  const meetUpId = context.params.meetUpId;
  console.log(meetUpId)
  try {
    const client = await MongoClient.connect(process.env.MONGODB_SRV);
    const db = client.db();
    const meetupCollection = db.collection('meetups');
    const meetup = await meetupCollection.findOne({_id:new ObjectId(meetUpId)});
    console.log(meetup);

    client.close();
    
    return {
      props:{
        meetup:{
          id:meetup._id.toString(),
          title:meetup.title,
          address:meetup.address,
          description:meetup.description,
          image:meetup.image,
        }
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {},
    };
  }
   
}
export default MeetupDetail;