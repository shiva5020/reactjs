
const reducerhook = (state, action) => {
    console.log(state);
   switch(action.type) {
       case "BUY_CAKE" :
           return {
               ...state,
               numberOfCakes: state.numberOfCakes -1
           }
        default: 
        return state;
   }
}

export default reducerhook
