//localhost:3000/aboutus
import Link from "next/link"
const About=() =>{
    const details = [

        { id : 1, name: 'Yash', role: 'Senior Developer'},
        
        { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
        
        { id : 3, name: 'Suresh', role: 'Frontend Developer'}
        
        ]
    return(
        <>
            <h2>Developers:</h2>
            <ul>
                {details.map((element) =>{
                    return <li key={element.id}><Link href={"/aboutus/"+element.id}>
                        {element.name}</Link></li>
                })}
            </ul>
        </>
    )
}
export default About;