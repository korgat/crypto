const initialState = {
	cryptoCurrency: [],
	differences: {}
}


const table = (state = initialState, action) => {
	switch (action.type) {
		case "SET_CRYPTO_CURRENCY":
			return {
				...state,
				cryptoCurrency: action.payload
			}
		case "CLEAR_DIFFERENCE":
			return {
				...state,
				differences: {}
			}
		case "SET_DIFFERENCE":
			return {
				...state,
				differences: {
					...state.cryptoCurrency.reduce((acc, obj, index) => {
						if (obj.price > action.payload[index].price) {
							acc[obj.name] = "negative"
						}
						if (obj.price < action.payload[index].price) {
							acc[obj.name] = "positive"
						}
						return acc
					}, {})
				},
				cryptoCurrency: action.payload
			}
		default:
			return state;
	}
}

export default table