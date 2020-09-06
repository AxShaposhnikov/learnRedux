export function createStore(rootReducer, initialState) {
    let state = rootReducer(initialState, {type: '__INIT__'})
    const subsribers = []

    return {
        // action === {type: 'INCREMENT'}
        dispatch(action) {
            state = rootReducer(state, action)
            subsribers.forEach(sub => sub())
        },
        subscribe(callback){
            subsribers.push(callback)
        },
        getState(){
            return state
        }
    }
}