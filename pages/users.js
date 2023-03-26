function users({users}){
    return (
        <>
            <h1>User Lists</h1>
            { users.map((user)=>{
               return(
               <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>UserName: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <br></br>
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