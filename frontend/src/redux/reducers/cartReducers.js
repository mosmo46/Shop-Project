import * as actionTypes from '../constants/cartConstants';

export  const cartReducer = (state={cartItems:[] }, action)=>{

    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            const exitItem = state.cartItems.find((x)=>x.product === item.product)
            if(exitItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map((x)=>
                    x.product === exitItem.product ? item : x)
                }
            }else{
                return{
                    ...state,
                    cartItems: [...state.cartItems,item],
                };
            }
            case actionTypes.REMOVE_FROM_CART:
                return{
                    ...state,
                    cartItems: state.cartItems.filter((x)=> x.product !== action.payload)
                }
        default:
            return state;
    }

}
// actionTypes.ADD_TO_CART