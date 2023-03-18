const initialState={
    list:[]
}
export const addToDOList=(state=initialState,action)=>{
    switch(action.type)
    {
        case 'ADD_TODO':
            const {id, data}=action.payload;
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
        case 'REMOVE_TODO':
            const newlist=state.list.filter((elm)=>elm.id!==action.id)
            return{
                ...state,
                list:newlist
            }
       
        default :
        return state;
            
        
        
    }
}