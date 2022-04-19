export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQAJaJNsfrPOu-mhQAFDp1pDP40v0IJ2kNgLUqSXxdZeYbJFi6QvcFAoTO4R89n_eIqoKyrWxYlWBLsd4Dt7kYAVcjogf4vtbSUQlM942bl4cbmtOEmnSoukIQxcfUvNL9GrbhLopMgfeuC4ntbjS0qEHBetRKGpzEmIGh5lGgmbwwd8fBNo'
}

const reducer = (state, action) => {
console.log(action)

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }


        default:
            return state
    }
}

export default reducer