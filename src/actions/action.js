export const incNumber=(itemObj)=>{
    return{
        type: "INCREMENT",
        payload: itemObj
    }
}

export const decNumber=(itemId)=>{
    return{
        type: "DECREMENT",
        payload: itemId
    }
}

export const addAmountFunc=(amount)=>{
    return{
        type: "INCREMENTBYAMOUNT",
        payload: amount
    }
}

export const incCurrent=(id)=>{
    return{
        type: "INCCURRENT",
        payload: id
    }
}

export const decCurrent=(id)=>{
    return{
        type: "DECCURRENT",
        payload: id
    }
}

export const removeAll=()=>{
    return{
        type: "REMOVEALL"
    }
}
export const editNumber=({pushData, replaceIndex})=>{
    return{
        type: "REPLACEDATA",
        payload: {pushData, replaceIndex}
    }
}