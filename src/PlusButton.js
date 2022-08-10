import React from 'react';
function PlusButton (props) {
    const onChange = (e) => {
         //props.buttonOnClick(654)
            props.onChange(e.target.value)
        }
        return (
            <div>
                <input value={props.value} onChange={onChange}/>
                <button onClick={()=> props.onChange('')}>reset</button>
            </div>
        );
    };



export default PlusButton;
