import MeetupList from "@/components/meetups/MeetupList";
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
    }
]
function HomePage(){
    return <MeetupList meetups={DUMMY_MEETUPS}/>
}
export default HomePage;