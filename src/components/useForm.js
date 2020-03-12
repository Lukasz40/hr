import {useState} from "react";

const useForm = (props) => {
    const [state,setState,] = useState({})

    const handleChange = e => {
        e.persist()
        setState(state => ({...state, [e.target.name]: e.target.value}))
    }

    const clearState = () => {
        setState({})
    }

    return [state,handleChange,clearState]
}

export default useForm;