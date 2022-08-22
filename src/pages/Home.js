import React from "react";
import axios from "axios";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

function Home() {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const [activeIndexCategory, setActiveIndexCategory] = React.useState(0);
    const [sortType, setSortType] = React.useState({
        name: 'популярности (убывание)',
        sortProperty: 'rating'
    });

    const onClickCategory = (indexCategory) => {
        setActiveIndexCategory(indexCategory)
    }

    React.useEffect(() => {
        const category = activeIndexCategory > 0 ? `category=${activeIndexCategory}` : '';
        const sort = sortType.sortProperty.replace('-', '');
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';

        setIsLoading(true);
        axios.get(
            `https://6301e0a3c6dda4f287ae88c3.mockapi.io/items?${category}&sortBy=${sort}&order=${order}`)
            .then(response => {
                setItems(response.data);
                setIsLoading(false);
            })
        window.scrollTo(0, 0);
    }, [activeIndexCategory, sortType])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeIndexCategory={activeIndexCategory}
                    onClickCategory={onClickCategory}
                />
                <Sort
                    sortType={sortType}
                    setSortType={setSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ?
                        (
                            [...new Array(6)].map((_, index) => (
                                <Skeleton key={index}/>
                            ))
                        ) :
                        (
                            items.map(obj => (
                                <PizzaBlock
                                    key={obj.id}
                                    {...obj}
                                />
                            ))
                        )
                }
            </div>
        </div>
    )
}

export default Home;