import React from "react";

function Categories() {
    const [activeIndexCategory, setActiveIndexCategory] = React.useState(0)

    const CATEGORIES = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые'
    ]

    const onClickCategory = (indexCategory) => {
        setActiveIndexCategory(indexCategory)
    }

    return (
        <div className="categories">
            <ul>
                {
                    CATEGORIES.map((item, index) => (
                        <li onClick={() => onClickCategory(index)} className={activeIndexCategory === index ? 'active' : ''}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories;