import './index.css'

const CountryItem = props => {
  const {details, onVisited} = props
  const {id, name, isVisited} = details
  const visitIt = () => {
    onVisited(id)
  }
  return (
    <li className="country-visit">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited">Visited</p>
      ) : (
        <button type="button" className="btn" onClick={visitIt}>
          Visit
        </button>
      )}
    </li>
  )
}
export default CountryItem
