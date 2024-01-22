import { useRouter } from "next/router";
import { DUMMY_MEETUPS } from "../index";
import MeetupItem from "@/components/meetups/MeetupItem";

const MeetupDetail = (props) => {

    const router = useRouter();
    const meetupId = router.query.meetUpId;  
    const meetup = props.meetup.find(meetup => meetup.id === meetupId);
    // console.log(meetup);
    return(
        <MeetupItem
        key={meetup.id}
        id={meetup.id}
        image={meetup.image}
        title={meetup.title}
        address={meetup.address}
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
  return {
    fallback:false,
    paths:[
      {
        params:{
          meetUpId:'m1'
        }
      },
      {
        params:{
          meetUpId:'m2'
        }
      },
      {
        params:{
          meetUpId:'m3'
        }
      }
    ]
  }
}
export async function getStaticProps(context){
  const meetUpId = context.params.meetUpId;
  console.log(meetUpId);
  return {
    props:{
      meetup:DUMMY_MEETUPS
    }
  }
}
export default MeetupDetail;