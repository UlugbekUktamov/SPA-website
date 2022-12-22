import { useEffect, useState } from "react";
import { getAllCategories } from "../api";
import CategoryList from "../Components/CategoryList";
import Loader from "../Components/Loader"
import Search from "../Components/Search";

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([])

    const handleSearch = (str) => {
        setFilteredCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
    }

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
            setFilteredCatalog(data.categories)
        })
    }, [])
    return (
        <>
            <Search cb={handleSearch} />
            {
                !catalog.length ? (
                    <Loader />
                ) : <CategoryList catalog={filteredCatalog} />
            }
        </>
    )
}

export default Home;