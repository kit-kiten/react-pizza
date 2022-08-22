import React from "react";
import axios from "axios";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

function Home() {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        axios.get('https://6301e0a3c6dda4f287ae88c3.mockapi.io/items').then(response => {
            setItems(response.data);
            setIsLoading(false);
        })
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
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