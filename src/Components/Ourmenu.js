import React from 'react';

function Ourmenu(){
    return (
        <>
            <h1 className='head'>Our Menu</h1>
            <div className='ourmenu'>
           
            <div className='menudata'>
           
            <h3>Bread Basket</h3>
            <p className='para1'>Assortment of fresh baked fruit breads and muffins 5.50

            </p>
            <h3>Honey Almond Granola with Fruits</h3>
            <p className='para1'>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00
            </p>

            <h3>Belgian Waffle</h3>
            <p className='para1'>Vanilla flavored batter with malted flour 7.50
            </p>

            <h3>Scrambled eggs</h3>
            <p className='para1'>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50
            </p>
            <h3>Blueberry Pancakes</h3>
            <p className='para1'>With syrup, butter and lots of berries 8.50</p>

            

        </div>
                
                <div className='menuimg'>
                    <img className='img' src='../../Images/tablesetting.jpg' alt='Menu'></img></div>
            </div>
            <hr></hr></>

    );
}
export default Ourmenu;