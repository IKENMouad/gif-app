import React from 'react'

const InputForm = ({
    hasPlaceHolder = true,
    label,
    value,
    autoFocus = false,
    type = "text",
    onChange,
    required = false,
    rows = 3

}) => {


    return (
        <div>
            {type !== "textarea" ?
                <div className="form-group">
                    <label htmlFor={value}> {label} </label>
                    <input
                        type={type}
                        className="form-control"
                        name={value}
                        id={value}
                        required={required}
                        placeholder={hasPlaceHolder ? label : null}
                        autoFocus={autoFocus}
                        onChange={onChange}
                    />
                </div>
                :
                <div className="form-group">
                    <label htmlFor={value}>  {label} </label>
                    <textarea
                        className="form-control"
                        name={value}
                        id={value}
                        rows={rows}
                        onChange={onChange} />
                </div>
            }
        </div>
    )
}

export default InputForm