import axios from "axios"

export const setCryptoCurrency = (arr) => ({
	type: "SET_CRYPTO_CURRENCY",
	payload: arr
})
export const setDifference = (newArr) => ({
	type: "SET_DIFFERENCE",
	payload: newArr
})
export const clearDifference = () => ({
	type: "CLEAR_DIFFERENCE"
})

export const getCryptoCurrency = () => (dispatch, getState) => {
	const oldArr = getState().table.cryptoCurrency
	axios.get("https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD").then(({ data }) => {
		const newArr = data.Data.reduce((acc, obj) => {
			acc.push({
				name: obj.CoinInfo.FullName,
				image: `${"https://www.cryptocompare.com" + obj.CoinInfo.ImageUrl}`,
				price: obj.RAW.USD.PRICE,
				volumeHour: obj.RAW.USD.VOLUMEHOUR.toFixed(3),
				volume24: obj.RAW.USD.VOLUME24HOUR.toFixed(3),
				shortName: obj.CoinInfo.Name
			})
			return acc
		}, [])
		if (oldArr.length === 0) {
			dispatch(setCryptoCurrency(newArr))
		} else {
			dispatch(setDifference(newArr))
			setTimeout(() => {
				dispatch(clearDifference())
			}, 5000);
		}
	})
}