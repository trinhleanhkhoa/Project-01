import * as types from '../Contants/ActionsTypes'


export const addItemDeals=(Array)=>{
    return {
        type: types.ITEM_DEALS,
        Array
    }
}
export const onDelete=(id)=>{
    return {
        type: types.DELETE_ITEM,
        id
    }
}
