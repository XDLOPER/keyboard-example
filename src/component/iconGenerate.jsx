import React,{useState} from 'react'
import {INDEX_ICON_MODULE} from "./dynamic_import";

 const IconGenerate = (props) => {
    const { title } = props;

    return(
        title ? INDEX_ICON_MODULE[title]() : null
    )
}

export default IconGenerate;
