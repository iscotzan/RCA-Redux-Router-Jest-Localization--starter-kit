export const Actions = (type) => ({
    FETCH: {
        START: `${type}/FETCH_${type}_START`,
        SUCCESS: `${type}/FETCH_${type}_SUCCESS`,
        FAIL: `${type}/FETCH_${type}_FAIL`
    },
    FETCH_BY_ID: {
        START: `${type}/FETCH_BY_ID_${type}_START`,
        SUCCESS: `${type}/FETCH_BY_ID_${type}_SUCCESS`,
        FAIL: `${type}/FETCH_BY_ID_${type}_FAIL`
    },
    PAGINATE:{
        START: `${type}/PAGINATE_${type}_START`,
        SUCCESS: `${type}/PAGINATE_${type}_SUCCESS`,
        FAIL: `${type}/PAGINATE_${type}_FAIL`
    },
    POST: {
        START: `${type}/POST_${type}_START`,
        SUCCESS: `${type}/POST_${type}_SUCCESS`,
        FAIL: `${type}/POST_${type}_FAIL`
    },
    UPDATE: {
        START: `${type}/UPDATE_${type}_START`,
        SUCCESS: `${type}/UPDATE_${type}_SUCCESS`,
        FAIL: `${type}/UPDATE_${type}_FAIL`
    },
    DELETE: {
        START: `${type}/DELETE_${type}_START`,
        SUCCESS: `${type}/DELETE_${type}_SUCCESS`,
        FAIL: `${type}/DELETE_${type}_FAIL`
    },
    ENDPOINT:type.toLowerCase()
});

