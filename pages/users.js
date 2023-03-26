import User from '../components/user';
function users({users}){
    return (
        <>
            <h1>User Lists</h1>
            { users.map((user)=>{
               return(
               <div key={user.id}>
                    <User user={user}></User>
                </div>
               )
            })}
        </>
    )
}

export default users;
export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data)
    return {
        props: {
            users: data,
        }
    }
}