const initialState = {
    loading: false,
    list: [
        {
            "id": 1,
            title: "1",
            read: false
        },
        {
            "id": 2,
            title: "2",
            read: false
        },
        {
            "id": 3,
            title: "3",
            read: true
        },
        {
            "id": 4,
            title: "4",
            read: true
        },
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'ALLMARK':  //标记所有已读
            var newState = JSON.parse(JSON.stringify(state));
            newState.list.forEach((item) => {
                item.read = true;
            })
            return newState;


        case "MARKBYID":
            // eslint-disable-next-line no-redeclare
            var newState = JSON.parse(JSON.stringify(state))
            newState.list.forEach((item) => {
                if (item.id === action.id) {
                    item.read = true
                }
            })
            return newState;
        case 'START':
            return { ...state, loading: true };
        case 'FINISH':
            return { ...state, loading: false }
        default:
            return state
    }
}
