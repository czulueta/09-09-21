import React, {useState} from "react"

function Inputs() {
    const [inputs, setInputs] = useState("")

    function handleChange(){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs,[name]: value}))}

    function submitChange(e) {
        
    }

    return (
        <div>
            <input
                name={inputs}
                placeholder={todo}
                value={inputs}
                submitChange={}
            >

            </input>
            <button
                onclick={handleChange}
            >
             Add   
            </button>
        </div>
    )
}
export default  Inputs