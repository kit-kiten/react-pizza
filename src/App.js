import './scss/app.scss'

import React from "react";
import axios from "axios";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

function App() {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://6301e0a3c6dda4f287ae88c3.mockapi.io/items').then(response => {
            setItems(response.data);
        })
    }, [])

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                      <Categories />
                      <Sort />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {
                          items.map(obj => (
                              <PizzaBlock
                                  key={obj.id}
                                  {...obj}
                              />
                          ))
                        }
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
