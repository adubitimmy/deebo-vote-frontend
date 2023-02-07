import React, { useState, useEffect } from "react"
import axios from "axios";

const Candidate = () =>{
    // const [candidates, setCandidates] = React.useState([])
    // useEffect(()=>{
    //     axios
    //         .get("http://127.0.0.1:2200/voting/list-candidate/")
    //         .then(response =>{
    //             console.log(response)
    //             let apidata = setCandidates(response.data)
    //         })
    //         .catch(err =>{
    //             console.log(err)
    //         })
    // },[])

    return(
        <>
            {/* <ul className="list-group">
                {(candidate =>(
                    <li className="list-item" key={candidate.id}>{candidate.candidates_name} </li>
                ))}
            </ul>*/}
        </> 
    )
}
export default Candidate