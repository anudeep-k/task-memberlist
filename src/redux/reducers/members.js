const membersReducer=(members=[],action)=>{
    let newMembers =[...members]
    switch(action.type){
    
        case 'DELETE':
            return newMembers.filter((p)=>p._id !==action.payload)
        case 'UPDATE':
            return newMembers.map((post)=>post._id===action.payload._id?action.payload:post)
        case 'FETCH_ALL':
           return action.payload
        case 'CREATE':
            return newMembers.push(action.payload);
        default:
            return newMembers 
    }
    
}

export default membersReducer;