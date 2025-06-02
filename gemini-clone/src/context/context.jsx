import { createContext, useEffect, useState } from "react"
export const Context = createContext();
import runChat from "../config/gemini";

const ContextProvider=(props)=>{
    const [input,setInput]=useState("");
    const [recentPrompt,setRecentPrompt]=useState("");
    const[prevPrompts,setPrevPrompts]=useState([]);
    const [showResult,setShowResult]=useState(false);
    const [loading,setLoading]=useState(false);
    const [resultData,setResultData]=useState("");
    useEffect(() => {
        const storedPrompts = localStorage.getItem("recentPrompts");
        if (storedPrompts) {
            setPrevPrompts(JSON.parse(storedPrompts));
        }
    }, []);

    // ✅ Save recent prompts to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("recentPrompts", JSON.stringify(prevPrompts));
    }, [prevPrompts]);

    const clearHistory = () => {
    localStorage.removeItem("recentPrompts");
    setPrevPrompts([]);
    };



    const delayPara =(index,nextWord)=>{
        setTimeout(function(){
            setResultData(prev=>prev+nextWord);
        },75*index)
    }
    const newChat=()=>{
        setLoading(false)
        setShowResult(false)
    }

    const onSent=async(prompt)=>{
         setResultData("")
         setLoading(true)
         setShowResult(true)
         
         let currentPrompt=prompt!=undefined?prompt:input;
         setRecentPrompt(currentPrompt);
         if (prompt === undefined) {
        setPrevPrompts(prev => {
            const updated = [...prev, input];
            localStorage.setItem("recentPrompts", JSON.stringify(updated));
            return updated;
        });
         }

    const response = await runChat(currentPrompt)
         let responseArray =response.split("**");
         let newResponse="";
         for(let i=0;i< responseArray.length;i++)
         {
            if(i%2===0){
                newResponse+=responseArray[i];
            }
            else{
                newResponse+="<b>"+responseArray[i]+"</b>";
            }
         }
         let newResponse2 = newResponse.split("*").join("</br")
         let newResponseArray = newResponse2.split(" ");
         for( let i=0; i<newResponseArray.length;i++)
         {
            const nextWord=newResponseArray[i];
            delayPara(i,nextWord+" ")
         }
         setLoading(false)
         setInput("")
    }
    const contextValue={
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat,
        clearHistory
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider