import { useParams } from "react-router-dom"

function Inputs(){
    let params = useParams()
    let forRanks = params.Numbers.split(',')[0]
                let forTeams = params.Numbers.split(',')[1]
                let inputsObj = {}
                for (let i = 0; i < forRanks; i++) {
                    for (let j = 0; j < forTeams; j++){
                        if (inputsObj[`RANK ${i + 1}`] === undefined){
                            inputsObj[`RANK ${i + 1}`] = [0]
                        }
                         else {
                            inputsObj[`RANK ${i + 1}`].push(0)
                        }
                    }
                }
                let keys = Object.keys(inputsObj)
                let values = Object.values(inputsObj)
                let Once = false;
               
    return  (
        <div className="main">
            {keys.map((rankWithNumber, kindex)=>{
               return (
                <div className="container-rank" id={kindex}>
                    <p>{rankWithNumber}</p>
                    {values[0].map(()=>{
                        return <input  className="input-user" type="text"/>
                    })}
                </div>)
            })}
            <input onClick={()=>{
                let temp = document.querySelectorAll("input[type='text']");
                let valid =  []
                temp.forEach((e)=>{valid.push(e.value)})

                if (valid.includes('')){
                    document.querySelector("#massage-inputs").style.display = "block"
                    return
                }
                else{
                document.querySelector("#massage-inputs").style.display = "none"
                let forRanks = params.Numbers.split(',')[0]
                let forTeams = params.Numbers.split(',')[1]
                let inputsObj = {}
                for (let i = 0; i < forRanks; i++) {
                    for (let j = 0; j < forTeams; j++){
                        if (inputsObj[`RANK ${i + 1}`] === undefined){
                            inputsObj[`RANK ${i + 1}`] = [0]
                        }
                         else {
                            inputsObj[`RANK ${i + 1}`].push(0)
                        }
                    }
                }
                let keys = Object.keys(inputsObj)
                let values = Object.values(inputsObj)
                Once = true;
                keys.map((e, i)=>{
                    let newArr = []
                    inputsObj[`RANK ${i + 1}`].map((e, index)=>{
                        newArr.push(document.querySelectorAll(`div[id="${i}"] input`)[index].value)
                    })
                    inputsObj[`RANK ${i + 1}`] = newArr
                })
                {values[0].map((team, i)=>{
                    let newDiv = document.createElement("div")
                    newDiv.setAttribute("class", `Team`)
                    let ContentDiv = document.createTextNode(`Team ${i + 1}`)
                    let teamElement = document.createElement("h3")
                    document.querySelector(".main").appendChild(newDiv).appendChild(teamElement).appendChild(ContentDiv)
                    values.map((element, index)=>{
                        let randomIndex = Math.floor(Math.random() * (inputsObj[`RANK ${index + 1}`].length))
                        let randomName = inputsObj[`RANK ${index + 1}`][randomIndex]
                        inputsObj[`RANK ${index + 1}`].splice(randomIndex, 1)
                        let theContent = document.createTextNode(randomName)
                        let theElement = document.createElement("p")
                        newDiv.appendChild(theElement).append(theContent)
                    })
                    
                })}
                let virtcle = document.createElement("div");
                virtcle.style.width = "300px"
                virtcle.style.height = "2px"
                virtcle.style.backgroundColor = "blue"
                document.querySelector(".main").appendChild(virtcle)
            }}} className="result-button" type="submit"/>
            <p id="massage-inputs">the inputs must not empty</p>
        </div>
    )
}
export default Inputs
