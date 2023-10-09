import React, { useState } from 'react'

export const useForm = (initialValues,onSubmit) => {

    const [values,setValues] = useState(initialValues);

    const handleChange = (e) => {
        const {name,value} = e.target;
        setValues({...values,[name]:value});
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     onSubmit(values);
    // }

    return {
        values,
        // handleSubmit,
        handleChange,
    }
}
