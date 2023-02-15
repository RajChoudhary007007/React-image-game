import './index.css'

const FilterImage = props => {
  const {projectDetails} = props
  const {thumbnailUrl, category} = projectDetails

  return (
    <li className="filter-image-container">
      <button className="image-btn" type="button">
        <img className="filter-image" src={thumbnailUrl} alt={category} />
      </button>
    </li>
  )
}
export default FilterImage
