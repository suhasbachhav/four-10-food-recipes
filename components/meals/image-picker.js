'use client';

import { useRef } from 'react';
import classes from './image-picker.module.css'

function ImagePicker({label, name}) {
    const imageInput = useRef();
    function handlePickerClick(){
        imageInput.current.click()
    }

    return ( 
        <div className={classes.picker}>
            <label htmlFor={name}>
                {label}
            </label>
            <div className={classes.controls}>
                <input 
                className={classes.input}
                type='file' 
                id={name}
                accept='image/jpeg, image/png, image/jpg' 
                name={name}
                ref={imageInput}
                />
                <button onClick={handlePickerClick} className={classes.button} type='button'>
                    Pick an Image
                </button>
            </div>

        </div>
     );
}

export default ImagePicker;