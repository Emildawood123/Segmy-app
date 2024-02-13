import { useState } from "react"
import { Link } from "react-router-dom"

function FormPage(){
    let [NumbersOfRanks, setRanks] = useState();
    let [NumbersOfTeams, setTeams] = useState();
    let RanksFunction = (e) => {
        setRanks(e.target.value)
    }
    let teamsFunction = (e) => {
        setTeams(e.target.value)
    }
    return (
        <>
        <p className='title'>SEGMY APP</p>
        <form>
           <div>
             <label>Numbers of teams </label>
             <input onInput={teamsFunction} type='number' />
           </div>
           <div>
               <label>Members on one </label>
               <input onInput={RanksFunction} type='number'/>
           </div>
           {NumbersOfTeams <= 0 || NumbersOfTeams <= 0 || NumbersOfRanks === undefined || NumbersOfTeams === undefined? 
           <Link onClick={()=>{
            document.querySelector("#massage").style.display = "block"
           }} to={`/`}>Segment</Link> :
           <Link to={`solve/${NumbersOfRanks},${NumbersOfTeams}`}>Segment</Link>
           }
          <p id="massage">must all numbers greater than 0 and not empty</p>
        </form>
        </>
    )
}
export default FormPage
