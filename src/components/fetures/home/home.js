import './home.scss';
import ViewCard from './../viewCards/viewCards.js';
import React, { useEffect, useState } from 'react';
import SearchBar from './../../shared/searchBar/searchBar.js';

const Home = () => {
    const [searchValue, setSearchValue] = useState("");
    const [foodList, setUsers] = useState([]);
    const fetchFoodList = () => {
        // https://api.nal.usda.gov/fdc/v1/foods/list?api_key=DEMO_KEY
        fetch("https://api.nal.usda.gov/fdc/v1/foods/list?api_key=DEMO_KEY")
            .then(response => {
                return response.json()
            })
            .then(data => {
                if (data.FoundationFoods.length > 0) {
                    setUsers(data.FoundationFoods)
                }

            })
    }

    useEffect(() => {
        fetchFoodList()
    }, []);

    const filterNames = ({ fdcId }) => {
        return fdcId.toString().toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    };


    return (
        <div>
            <SearchBar onSearch={setSearchValue} value={searchValue} />\
            <div className='row cardView'>
                {foodList.filter(filterNames).map((item, index) => (
                    <div className='col-lg-3 col-md-4 col-sm-6 col-sx-12 cardMR'>
                        <ViewCard data={item} />
                    </div>
                ))}
            </div>

        </div>
    )
}
export default Home;