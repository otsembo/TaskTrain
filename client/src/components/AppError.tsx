const AppError = ({error, loading}: any): JSX.Element => {
    return (
        <>
            { error && !loading && <div className="alert alert-danger mt-3">{error}</div> }
        </>
    )
}

export default AppError