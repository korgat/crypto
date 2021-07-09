import './App.css';
import { Container, Grid } from 'semantic-ui-react'
import { useEffect } from 'react';
import { getCryptoCurrency } from './store/actions/setTable';
import { useDispatch, useSelector } from 'react-redux';
import CryptoTable from './components/CryptoTable';
import Calculator from './components/calculator';





function App() {
	const dispatch = useDispatch()
	const { cryptoCurrency, differences, calculator } = useSelector(state => ({
		cryptoCurrency: state.table.cryptoCurrency,
		differences: state.table.differences,
		calculator: state.calculator
	}))

	useEffect(() => {
		dispatch(getCryptoCurrency())
		setInterval(() => {
			dispatch(getCryptoCurrency())
		}, 30000);

	}, [])
	return (
		<div className="main">
			<Container>
				<Grid divided='vertically'>
					<Grid.Row columns={2}>
						<Grid.Column width={11}>
							<CryptoTable cryptoCurrency={cryptoCurrency} differences={differences} />
						</Grid.Column>
						<Grid.Column width={2}>
							<Calculator {...calculator} />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	);
}

export default App;
