const eventsReducer =(events=[{id:100,company:"SAP",org:"Anudeep",about:"We are awesome!",schedule:"Test",duration:"30 mins",capacity:3},{id:101,company:"SAP",org:"Anudeep",about:"We are awesome!",schedule:"Test",duration:"30 mins",capacity:2},
{id:102,company:"BEL",org:"Sam",about:"We are awesome!",schedule:"Test1",duration:"30 mins",capacity:2},{id:103,company:"SAP",org:"Anudeep",about:"We are awesome!",schedule:"Test",duration:"30 mins",capacity:2}
],action)=>{
    let newEvents =[...events]
    switch(action.type){
       
        case 'DELETE':
            // const filteredevents= newEvents.filter((p)=>p.id !==action.payload);
            // console.log(filteredevents)
            return newEvents.filter((p)=>p.id !==action.payload)
        case 'UPDATE':
            return newEvents.map((event)=>event.id===action.payload.id?action.payload:event)
        case 'FETCH_ALL':
           return events
        case 'CREATE':
            return newEvents.push(action.payload);
        default:
            return newEvents 
    }

}

export default eventsReducer;