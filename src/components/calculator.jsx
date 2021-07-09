import React from 'react'
import { useDispatch } from 'react-redux'
import { Dropdown, Input } from 'semantic-ui-react'
import { createSelector1, createSelector2, setInput1, setInput2 } from '../store/actions/setCalculator'

const Calculator = (props) => {
	const { selector1, input1, selector2, input2 } = props
	const dispatch = useDispatch()
	const options = [
		{ key: "BTC", text: "BTC", value: "BTC" },
		{ key: "ETH", text: "ETH", value: "ETH" },
		{ key: "CHZ", text: "CHZ", value: "CHZ" },
		{ key: "BNB", text: "BNB", value: "BNB" },
		{ key: "ADA", text: "ADA", value: "ADA" },
		{ key: "XRP", text: "XRP", value: "XRP" },
		{ key: "DOGE", text: "DOGE", value: "DOGE" },
		{ key: "DOT", text: "DOT", value: "DOT" },
		{ key: "LTC", text: "LTC", value: "LTC" },
		{ key: "BUSD", text: "BUSD", value: "BUSD" },
	]

	const onSelector1Click = (e) => {
		dispatch(createSelector1(e.target.innerText))
	}
	const onSelector2Click = (e) => {
		dispatch(createSelector2(e.target.innerText))
	}
	const onInput1Change = (value) => {
		dispatch(setInput1(value))
	}
	const onInput2Change = (value) => {
		dispatch(setInput2(value))
	}

	return (
		<div className="calculator">
			<Input type="number" value={input1} onChange={(e) => onInput1Change(e.currentTarget.value)}
				action={
					<Dropdown onClose={onSelector1Click} button basic floating options={options} value={selector1.name} />
				}
				placeholder='Amount...'
			/>
			<br />
			<br />
			<Input type="number" value={input2} onChange={(e) => onInput2Change(e.currentTarget.value)}
				action={
					<Dropdown onClose={onSelector2Click} button basic floating options={options} value={selector2.name} />
				}
				placeholder='Amount...'
			/>
		</div>
	)
}

export default Calculator
