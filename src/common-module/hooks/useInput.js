const useInput = () => {
    const changeInputStateValue = (event, key, state, setState) => {
        setState({ ...state, [key]: event.target.value })
    }
    return changeInputStateValue
}

export default useInput