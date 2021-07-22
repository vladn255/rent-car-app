const fetchEntity = () => (_dispatch, _getState, api) => (
    api.get(`/db/car`)
        .then(({ data }) => {
            console.log(data)
        })
        .catch((err) => console.log(err))
)

export {
    fetchEntity
}