import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getFilterCategory } from "../api"
import Loader from '../Components/Loader'
import MealList from '../Components/MealList'

function Category() {
    const { name } = useParams()
    const [meals, setMeals] = useState([])

    useEffect(() => {
        getFilterCategory(name).then(data => setMeals(data.meals))
    }, [name])

    return (
        <div>
            {!meals.length ? <Loader /> : <MealList meals={meals} />}
        </div>
    )
}

export default Category
