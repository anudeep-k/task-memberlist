const membersReducer=(members=[ 
    {"id":1,"name":"Ram", "age":23,"email":"Ram@gmail.com" ,"phone":1235900,"company":"ABC","events":[{"eventId":100,company:"SAP",org:"Anudeep",about:"We are awesome!",schedule:"Test",duration:"30 mins",capacity:3}]},  
    {"id":2,"name":"Bob","age":24, "email":"bob32@gmail.com" ,"phone":1235900,"company":"XYZ","events":[{id:102,company:"BEL",org:"Sam",about:"We are awesome!",schedule:"Test1",duration:"30 mins",capacity:2}]},
    {"id":3,"name":"Anu", "age":25,"email":"Ram@gmail.com" ,"phone":1235900,"company":"ABC","events":[{id:102,company:"BEL",org:"Sam",about:"We are awesome!",schedule:"Test1",duration:"30 mins",capacity:2}]},
    {"id":4,"name":"Sachin", "age":34,"email":"Ram@gmail.com" ,"phone":1235900,"company":"ABC","events":[{id:102,company:"BEL",org:"Sam",about:"We are awesome!",schedule:"Test1",duration:"30 mins",capacity:2}]},
    {"id":5,"name":"Rafa", "age":35,"email":"Ram@gmail.com" ,"phone":1235900,"company":"ABC","events":[{id:102,company:"BEL",org:"Sam",about:"We are awesome!",schedule:"Test1",duration:"30 mins",capacity:2}]},
    {"id":6,"name":"Roger", "age":36,"email":"Ram@gmail.com" ,"phone":1235900,"company":"ABC","events":[{"eventId":100,company:"SAP",org:"Anudeep",about:"We are awesome!",schedule:"Test",duration:"30 mins",capacity:3}]} ],action)=>{
    let newMembers =[...members]
    switch(action.type){
    
        case 'DELETE':
            const filteredMembers= newMembers.filter((p)=>p.id !==action.payload);
            console.log(filteredMembers)
            return newMembers.filter((p)=>p.id !==action.payload)
        case 'UPDATE':
            return newMembers.map((member)=>member.id===action.payload.id?action.payload:member)     
       case 'FETCH_ALL':
           return newMembers
        case 'CREATE':
            return newMembers.push(action.payload);
        default:
            return newMembers 
    }
    
}

export default membersReducer;