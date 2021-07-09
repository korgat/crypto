const initialState = {

	queue: true,
	input1: "",
	selector1: {
		name: "BTC",
		price: 35221.32
	},
	input2: "",
	selector2: {
		name: "BTC",
		price: 35221.32
	}
}


const calculator = (state = initialState, action) => {
	switch (action.type) {
		case "SET_SELECTOR":
			if (state.queue) {
				return {
					...state,
					selector1: {
						name: action.payload.name,
						price: action.payload.price
					},
					queue: false
				}
			} else {
				return {
					...state,
					selector2: {
						name: action.payload.name,
						price: action.payload.price
					},
					queue: true
				}
			}
		case "SET_INPUT1":
			return {
				...state,
				input1: action.payload,
				input2: action.payload * state.selector1.price / state.selector2.price
			}
		case "SET_INPUT2":
			return {
				...state,
				input2: action.payload,
				input1: action.payload * state.selector2.price / state.selector1.price
			}
		case "SET_SELECTOR1":
			return {
				...state,
				selector1: {
					name: action.payload.name,
					price: action.payload.price
				},
				input2: state.input1 * state.selector1.price / state.selector2.price
			}
		case "SET_SELECTOR2":
			return {
				...state,
				selector2: {
					name: action.payload.name,
					price: action.payload.price
				},
				input1: state.input2 * state.selector2.price / state.selector1.price
			}
		default:
			return state;
	}
}

export default calculator