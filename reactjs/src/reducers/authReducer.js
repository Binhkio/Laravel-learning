export const authReducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'SER_AUTH':
            return {
                ...state
            }
    }
}