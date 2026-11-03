import { useRef } from 'react';

export default function MyTextarea({
    labelText,
    labelStyle,
    handleChange,
    inputValue,
    inputName,
    inputType,
    inputStyle,
    inputKey,
    disable,
    rows,
    columns
})
{

    return (
        <div
            className='my_textarea'
            style={{
                ...inputStyle
            }}
            >
                
            {(labelText==='')?<></>:
                <label htmlFor={inputName} style={labelStyle}>{labelText}</label>            
            }

            <textarea
                key={inputKey}
                // style={(inputFieldStyle===undefined)?{width:'30%'}:inputFieldStyle}
                disabled={disable}
                name={inputName}
                onChange={handleChange}  
                id={inputName} 
                type={inputType}
                value={inputValue}
                rows={rows}
                cols={columns}
            >                
            </textarea>
        </div>
    )
}