export default {
    allMark() {
        return {
            type: "ALLMARK"
        }
    },
    markById(id) {
        return (dispatch) => {
            dispatch({
                type: "START"
            })
            setTimeout(() => {
                dispatch({
                    type: "MARKBYID",
                    id
                })
                dispatch({
                    type: "FINISH"
                })
            }, 1500)
        }
    }
}