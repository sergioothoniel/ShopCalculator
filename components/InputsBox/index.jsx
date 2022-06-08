import { View } from "react-native"
import { useState } from "react"
import Input from "../Input"
import { InputBoxContainer, InputsNumber } from "./styles"

const InputBox = () =>{

    const [qty, setQty] = useState(1)
    
    return(
        <InputBoxContainer>
            <Input/>

            <InputsNumber>
                <Input/>
                <Input onChangeText={setQty} placeholder = '1'/>
            </InputsNumber>
            
        </InputBoxContainer>
    )
}

export default InputBox