import { authInitialState, AuthState } from './authContext';


type AuthAction = 
    | {type: 'signIn'}
    | {type: 'chancheFavIcon', payload: string} 
    | {type: 'logout'}
    | {type: 'setUserName', payload:string}


// genera estado
export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {

    switch ( action.type ) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-username-yet'
            }

        case 'chancheFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }

        case 'setUserName':
            return {
                ...state,
                username: action.payload
            }

        default:
            return state;
    }
}