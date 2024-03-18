/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react"

const useDebounce = (callback, delay) =>{
    const timeoutIdRef = useRef()
    useEffect(()=>{
        return()=>{
            if(timeoutIdRef.current){
                clearTimeout(timeoutIdRef.current)
            }
        }
    },[])


    const debouncedCallBack = (...args) =>{
        if(timeoutIdRef.current){
            clearTimeout(timeoutIdRef.current)
        }

        timeoutIdRef.current = setTimeout(()=>{
            callback(...args)
        },delay)
    }
    return debouncedCallBack
}

export default useDebounce