
//localhost:3000/aboutus/1

import { useRouter } from "next/router";

const Developer = () =>{
    const router = useRouter();
    const devId = router.query.developerId;
    const details = [

        { id : 1, name: 'Yash', role: 'Senior Developer'},
        
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
        
        ]
    const dev = details.filter((dev) => +devId===dev.id)[0];
    // console.log(dev)
    /*How Links work internally? 
    Link renders an anchor tag but when we click on that link,
     it does not request a new page  instead renders the component that needs 
     to be rendered and changes the URL */
    return (
        dev? <h1>{dev.name}- {dev.role}</h1>:
        <h1>Developer doesn't exist</h1>
        
    )
}
export default Developer;