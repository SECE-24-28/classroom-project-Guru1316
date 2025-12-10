import './App.css';
const TableRow = ({item}) => {
    return(
        <>
          <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
          </tr>
        </>
    )
}

export default TableRow;