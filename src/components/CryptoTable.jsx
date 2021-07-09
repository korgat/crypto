import React from 'react'
import { useDispatch } from 'react-redux'
import { Table } from 'semantic-ui-react'
import { setSelector } from '../store/actions/setCalculator'

const CryptoTable = ({ cryptoCurrency, differences }) => {
	const dispatch = useDispatch()
	const onRowClick = (name, price) => {
		dispatch(setSelector({ name, price }))
	}

	return (
		<div>
			<Table celled selectable>
				<Table.Header>
					<Table.Row >
						<Table.HeaderCell width={1}>Icon</Table.HeaderCell>
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>Price</Table.HeaderCell>
						<Table.HeaderCell>VOLUMEHOUR</Table.HeaderCell>
						<Table.HeaderCell>VOLUME24HOUR</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body >
					{cryptoCurrency.map((obj, index) => <Table.Row onClick={() => onRowClick(obj.shortName, obj.price)} key={obj.name} >
						<Table.Cell width={1}><img className="cryptoIcon" src={obj.image} alt="crypto icon"></img></Table.Cell>
						<Table.Cell>{obj.name}</Table.Cell>
						<Table.Cell negative={differences[obj.name] === "negative"} positive={differences[obj.name] === "positive"}>{obj.price}</Table.Cell>
						<Table.Cell>{obj.volumeHour}</Table.Cell>
						<Table.Cell>{obj.volume24}</Table.Cell>
					</Table.Row >)}
				</Table.Body>
			</Table>
		</div>
	)
}

export default CryptoTable
