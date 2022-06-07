

 export const todoReducer = (state = [], action) => {

    switch ( action.type ) {
        case 'add':
            return [ ...state, action.payload];
    
        case 'delete':
            return state.filter( todo => todo.id !== action.payload); // playload es el grupo de id


        case 'toogle':
            return state.map (todo  =>

                (todo.id === action.payload ) 
                ? { ...todo, done: !todo.done}
                 :todo 
                );  

            // CASO 1
        // case 'toogle':
        //     return state.map(todo => {
                
        //         if (todo.id === action.payload){
        //                 return {
        //                     ...todo, 
        //                     done: !todo.done
        //                 }
        //         }else{
        //             return todo;
        //         }

            


            

        default:
            return state;
    }
}
