import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getMembers} from '../redux/actions/members'
const Members = () => {

   const members=  useSelector(state=>state.members)
//    const [members,setMembers] =useState({})
   const dispatch =useDispatch();
   console.log(members)
    useEffect(()=>{
    dispatch(getMembers())
    },[dispatch])
    return (
        <div>
            
        </div>
    )
}

export default Members
