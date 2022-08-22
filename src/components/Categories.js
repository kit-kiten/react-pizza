import React from "react";

function Categories({activeIndexCategory, onClickCategory}) {

    const CATEGORIES = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые'
    ]

    return (
        <div className="categories">
            <ul>
                {
                    CATEGORIES.map((item, index) => (
                        <li onClick={() => onClickCategory(index)} className={activeIndexCategory === index ? 'active' : ''} key={index}>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories;