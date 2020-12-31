import React from 'react';
import style from './FormsControls.module.css'

const FormControl = ({ iput, meta: { touched, error }, child, ...props }) => {
    const hasError = touched && error;
    return (
        <div className={style.formControl + ' ' +(hasError ? style.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{error}</span>}
        </div>

    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl>
};

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
};