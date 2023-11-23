import './index.css'

const VisitedCountryItem = props => {
  const {details, onRemove} = props
  const {id, imageUrl, name} = details
  const remove = () => {
    onRemove(id)
  }
  return (
    <li className="flag-item">
      <img className="flag" src={imageUrl} alt="thumbnail" />
      <div className="name-remove">
        <p className="country-name">{name}</p>
        <button type="button" className="remove" onClick={remove}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountryItem
