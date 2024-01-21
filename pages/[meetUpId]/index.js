import { useRouter } from "next/router";
import { DUMMY_MEETUPS } from "../index";
import MeetupItem from "@/components/meetups/MeetupItem";

const MeetupDetail = () => {

    const router = useRouter();
    const meetupId = router.query.meetUpId;  
    const meetup = DUMMY_MEETUPS.find(meetup => meetup.id === meetupId);
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
}
export default MeetupDetail;