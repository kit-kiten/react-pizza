import React from "react";
import axios from "axios";

import {useSelector, useDispatch} from "react-redux";
import {setCategoryId} from "../redux/slices/filterSlice";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import {SearchContext} from "../App";

function Home() {
    const categoryId = useSelector(store => store.filter.categoryId);
    const sortType = useSelector(store => store.filter.sortType);
    const dispatch = useDispatch();

    const [items, setItems] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [isLoading, setIsLoading] = React.useState(true);

    const {searchValue} = React.useContext(SearchContext);

    const skeletons = [...new Array(6)].map((_, index) => (
        <Skeleton key={index}/>
    ))
    const pizzas = items.map(obj => (
            <PizzaBlock
                key={obj.id}
                {...obj}
            />
        ))

    const onClickCategory = (indexCategory) => {
        dispatch(setCategoryId(indexCategory));
    }

    React.useEffect(() => {
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sort = sortType.sortProperty.replace('-', '');
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';

        setIsLoading(true);
        axios.get(
            `https://6301e0a3c6dda4f287ae88c3.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sort}&order=${order}&search=${searchValue}`)
            .then(response => {
                setItems(response.data);
                setIsLoading(false);
            })
        window.scrollTo(0, 0);
    }, [categoryId, sortType, searchValue, currentPage])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeIndexCategory={categoryId}
                    onClickCategory={onClickCategory}
                />
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? skeletons : pizzas
                }
            </div>
            <Pagination onChangePage={(number) => setCurrentPage(number + 1)}/>
        </div>
    )
}

export default Home;