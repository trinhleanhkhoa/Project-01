import * as Types from '../Contants/ActionsTypes'

var initialState=[]
var idItemDeals=(state=initialState,action)=>{
    var Array=action.Array;

    var index=-1
    switch(action.type){
        case Types.ITEM_DEALS:
            index=timIdTinhSL(state,action.Array.id)
            if(index !== -1){
                state[index].quantity +=1
            }else{
            state.push(Array)
            }
         
            return state
        case Types.DELETE_ITEM:
            index=timIdTinhSL(state,action.id)
            state.splice(index,1)
            return state     
        default: return state;//switch case phai co truong hop mac dinh
    }
}

var timIdTinhSL=(state,id)=>{
    var index=-1
    if(state.length>0){
       for(let i=0;i<state.length;i++){
           if(state[i].id=== id){
               index=i
               break
           }
       }

    }
    return index
}

export default idItemDeals;