import { FETCH_OUR_TEAM } from 'actions/ActionTypes'

const initStateOurTeam = {
    list: [],
    isLoading: false,
}

const OurTeam = (state = initStateOurTeam, action) => {
    switch (action.type) {
        case FETCH_OUR_TEAM + '_LOADING':
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_OUR_TEAM + '_SUCCESS':
            return {
                ...state,
                isLoading: false,
                list: action.payload,
            }
        default:
            return state
    }
}

export default OurTeam
