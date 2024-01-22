import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import axios from "axios";
import { useRouter } from "next/router";
function NewMeetUpPage(){
    const router = useRouter();
    async function addMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData);
        try {
            const res = await axios.post('/api/new-meetup' , enteredMeetupData);
            console.log(res.data);
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return <NewMeetupForm onAddMeetup = {addMeetupHandler} />
}
export default NewMeetUpPage;