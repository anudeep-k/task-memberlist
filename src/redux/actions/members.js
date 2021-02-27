import data from '../../assets/members.json'

export const getMembers= ()=>async (dispatch)=>{

    const members =await data;
console.log(members)
const action={type:'FETCH_ALL',payload:data}
dispatch(action)

}