import React, { useState } from 'react';
import portfolios from '../components/allportfolios';
import Categories from '../components/Categories';
import MenuItem from '../components/MenuItem';
import Title from '../components/Title';

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];

const PortfoliosPage = () => {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(portfolios)
            return;
        }
        const filteredData  = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }
    return (
        <div className="PortfolioPage">
        <div className="title">
            <Title title={'Portfolios'} span={'portfolios'} />
        </div>
        <div className="portfolios-data">
            <Categories filter={filter} categories={categories} />
            <MenuItem menuItem={menuItems} />
        </div>
    </div>
    );
};

export default PortfoliosPage;