export const initialSatate = null;

export const reducer = (state, action) => {
    if(action.type === "USER") {
        console.log(reducer)
        return action.payload;
        
    }
    return state;
}