import styles from './style.module.scss';
import React from "react";
import {SearchContext} from "../../App";

function Search() {
    const {searchValue, setSearchValue} = React.useContext(SearchContext);

    return (
        <div className={styles.root}>
            <img className={styles.icon} width={24} height={24} src="img/search-icon.svg" alt="search-icon"/>
            <input value={searchValue}
                   onChange={event => setSearchValue(event.target.value)}
                   type="text"
                   className={styles.input} placeholder="Введите название пиццы..."
            />
            {
                searchValue && (
                    <img onClick={() => setSearchValue('')} className={styles.delete} width={24} height={24} src="img/icon-delete.svg" alt="delete-icon"/>
                )
            }
        </div>
    )
}

export default Search;