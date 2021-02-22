import React from "react"
import { useForm } from "react-hook-form"

export default function Search(props) {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        props.setWord(data.word)
    };

    return (
        <div>
            <form>
                <input name="word" defaultValue="" ref={register} onChange={handleSubmit(onSubmit)}/>
            </form>
        </div>
    )
}
