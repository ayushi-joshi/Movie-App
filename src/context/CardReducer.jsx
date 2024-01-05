const CardReducer=(state, action)=>{
    switch(action.type){
    case "GET_MOVIES":
        return{
            ...state,
movies:action.payload
        }
        case "GET_GENRES":
  return { ...state, genres: action.payload };
        default:
            return state;
    }
}
export default CardReducer