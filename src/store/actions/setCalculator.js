
export const setSelector = (obj) => ({
	type: "SET_SELECTOR",
	payload: obj
})
export const setInput1 = (value) => ({
	type: "SET_INPUT1",
	payload: value
})
export const setInput2 = (value) => ({
	type: "SET_INPUT2",
	payload: value
})
export const setSelector1 = (obj) => ({
	type: "SET_SELECTOR1",
	payload: obj
})
export const setSelector2 = (obj) => ({
	type: "SET_SELECTOR2",
	payload: obj
})


export const createSelector1 = (name) => (dispatch, getState) => {
	const obj = getState().table.cryptoCurrency.find(element => element.shortName === name);
	dispatch(setSelector1({ name, price: obj.price }))
}
export const createSelector2 = (name) => (dispatch, getState) => {
	const obj = getState().table.cryptoCurrency.find(element => element.shortName === name);
	dispatch(setSelector2({ name, price: obj.price }))
}