function User({ user}){

    return(
        <>
            <p>Name: {user.name}</p>
            <p>UserName: {user.username}</p>
            <p>Email: {user.email}</p>
            <br></br>
        </>
    )
}

export default User;