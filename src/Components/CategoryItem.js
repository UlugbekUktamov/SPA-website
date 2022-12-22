/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from "react-router-dom"

function CategoryItem(props) {
    const { strCategory, strCategoryDescription, strCategoryThumb } = props
    return (
        <div className="card">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory} />
                <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
                <h5 className="card-title">
                    <b>{strCategory}</b>
                </h5>
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${strCategory}`} className="btn">
                    Watch Category
                </Link>
            </div>
        </div >
    )
}

export default CategoryItem
