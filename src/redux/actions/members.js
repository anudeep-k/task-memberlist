import data from '../../assets/members.json'

export const getMembers= ()=>async (dispatch)=>{

    const members =await data;
console.log(members)
const action={type:'FETCH_ALL',payload:data}
dispatch(action)

}

export const deleteMember= (id)=>async (dispatch)=>{

    const members =await data;
console.log(id)
const action={type:'DELETE',payload:id}
dispatch(action)

}