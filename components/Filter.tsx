"use client"
import { useState } from "react";
import { ArrowIcon } from "@public/assets/icons/ArrowIcon";
import { FilterIcon } from "@public/assets/icons/FilterIcon";
import { SortIcon } from "@public/assets/icons/SortIcon";
import { Button } from "./Button";

type props = {
  type: 'filter-sort' | 'sort' | 'pocket-filter';
  categories?: string[];
  currentValue?: string;
  onValueChange: (category: string) => void;
}


const Filter = ({type, categories, currentValue, onValueChange}: props) => {

  // Filter handles
  const [showPrepTime, setShowPrepTime] = useState(false)

  const handleCategories = () => {

    const [showCategories, setShowCategories] = useState(false)
    
    const [selectedRadioValue, setSelectedRadioValue] = useState('');
    const [selectedPreptimeValue, setSelectedPreptimeValue] = useState('');

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedRadioValue(e.target.value)
    };

    const handlePreptimeClick = (value: string) => {
      setSelectedPreptimeValue(value)
    }

    const categories = [
      {
        name: 'Seafood',
        image: '/assets/images/post.jpg'
      },
      {
        name: 'Soup',
        image: '/assets/images/post.jpg'
      },
      {
        name: 'Pancakes',
        image: '/assets/images/post.jpg'
      },
      {
        name: 'Meat',
        image: '/assets/images/post.jpg'
      },
      {
        name: 'Chicken',
        image: '/assets/images/post.jpg'
      },
      {
        name: 'Less than 30 min',
        image: '/assets/images/post.jpg'
      },
      {
        name: 'Pasta',
        image: '/assets/images/post.jpg'
      },
      {
        name: 'Pizza',
        image: '/assets/images/post.jpg'
      },
      {
        name: 'Cake',
        image: '/assets/images/post.jpg'
      },
      {
        name: 'Pastries',
        image: '/assets/images/post.jpg'
      },
      {
        name: 'Burger',
        image: '/assets/images/post.jpg'
      },
      {
        name: 'Vegan',
        image: '/assets/images/post.jpg'
      },
      {
        name: 'Desserts',
        image: '/assets/images/post.jpg'
      },
      {
        name: 'Smoothies',
        image: '/assets/images/post.jpg'
      },
      {
        name: 'Breakfast',
        image: '/assets/images/post.jpg'
      },
      {
        name: 'Salad',
        image: '/assets/images/post.jpg'
      },
      {
        name: 'Sandwiches',
        image: '/assets/images/post.jpg'
      },
      {
        name: 'Waffles',
        image: '/assets/images/post.jpg'
      },
      {
        name: 'Ramen',
        image: '/assets/images/post.jpg'
      },
      {
        name: 'Dips',
        image: '/assets/images/post.jpg'
      },
    ]

    return (
      <>
      <div className="filter-item-wrapper">
        <div className={showCategories ? "filter-item --active" : "filter-item"} onClick={() => setShowCategories((prev) => !prev)}>
          <div className="filter-item-desktop">
            <span>Category</span>
            <ArrowIcon />
          </div>
          <div className="filter-item-mobile">
            <FilterIcon />
          </div> 
        </div>

        
        <div className={showCategories ? "filter-container --active" : "filter-container"} id="categories-container">
          <div className="filter-container-wrapper">

            <span className="heading">Filter by:</span>
            <span className="filter-type">Category</span>
            <div className="category-group">
              {categories.map((category) => (
                <div
                  key={category.name}
                  onClick={() => onValueChange(category.name)}
                  className={currentValue === category.name ? 'category active' : 'category'}
                >
                  <img src={category.image} alt="" />
                  <span>{category.name}</span>
                </div>
              ))}
            </div>

            {/* //TODO: adaugare prep time doar la mobile */}
            <span className="filter-type">Prep time</span>
            <div className="preptime-group">
              <Button
                gap={'narrow'}
                type={'outline'}
                text={'<5 MIN'}
                color={'gray'}
                value={'less-than-5'}
                onClick={handlePreptimeClick}
              />

              <Button
                gap={'narrow'}
                type={'outline'}
                text={'5-10 MIN'}
                color={'gray'}
                value={'less-than-5'}
                onClick={handlePreptimeClick}
              />

              <Button
                gap={'narrow'}
                type={'outline'}
                text={'10-20 MIN'}
                color={'gray'}
                value={'less-than-5'}
                onClick={handlePreptimeClick}
              />

              <Button
                gap={'narrow'}
                type={'outline'}
                text={'20-30 MIN'}
                color={'gray'}
                value={'less-than-5'}
                onClick={handlePreptimeClick}
              />

              <Button
                gap={'narrow'}
                type={'outline'}
                text={'30-45 MIN'}
                color={'gray'}
                value={'less-than-5'}
                onClick={handlePreptimeClick}
              />

              <Button
                gap={'narrow'}
                type={'outline'}
                text={'45-60 MIN'}
                color={'gray'}
                value={'less-than-5'}
                onClick={handlePreptimeClick}
              />

              <Button
                gap={'narrow'}
                type={'outline'}
                text={'60-100 MIN'}
                color={'gray'}
                value={'less-than-5'}
                onClick={handlePreptimeClick}
              />

              

            </div>

          </div>
        </div>
        
      </div>

      <div className="filter-item-wrapper">
        <div className={showPrepTime ? "filter-item --active" : "filter-item"} onClick={() => setShowPrepTime((prev) => !prev)}>
          <div className="filter-item-desktop">
            <span>Prep time</span>
            <ArrowIcon />
          </div>
          <div className="filter-item-mobile">
            <SortIcon />
          </div> 
        </div>

        
        <div className={showPrepTime ? "filter-container --active" : "filter-container"}>
          <div className="radio-group">

            <label className="radio"><span dangerouslySetInnerHTML={{ __html: '&lt;5 MIN' }} />
              <input type="radio" name="sorting" value="most_rated"
                checked={selectedRadioValue === 'most_rated'}
                onChange={handleRadioChange}
              />
              <span className="checkmark"></span>
            </label>

            <label className="radio">5-10 MIN
              <input type="radio" name="sorting" value="newest"
                checked={selectedRadioValue === 'newest'}
                onChange={handleRadioChange}
              />
              <span className="checkmark"></span>
            </label>

            <label className="radio">10-20 MIN
              <input type="radio" name="sorting" value="oldest" 
                checked={selectedRadioValue === 'oldest'}
                onChange={handleRadioChange}
              />
              <span className="checkmark"></span>
            </label>

            <label className="radio">20-30 MIN
              <input type="radio" name="sorting" value="most_comments" 
                checked={selectedRadioValue === 'most_comments'}
                onChange={handleRadioChange}
              />
              <span className="checkmark"></span>
            </label>

            <label className="radio">30-45 MIN
              <input type="radio" name="sorting" value="most_comments" 
                checked={selectedRadioValue === 'most_comments'}
                onChange={handleRadioChange}
              />
              <span className="checkmark"></span>
            </label>

            <label className="radio">45-60 MIN
              <input type="radio" name="sorting" value="most_comments" 
                checked={selectedRadioValue === 'most_comments'}
                onChange={handleRadioChange}
              />
              <span className="checkmark"></span>
            </label>

            <label className="radio">60-100 MIN
              <input type="radio" name="sorting" value="most_comments" 
                checked={selectedRadioValue === 'most_comments'}
                onChange={handleRadioChange}
              />
              <span className="checkmark"></span>
            </label>


          </div>
        </div>
        
      </div>
      </>
    );
  }

  const handleSortBy = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
      setSelectedOption(e.target.value);
    };

    return (
      <>
      <div className="filter-sort-desktop">
        <select className="filter-sort" value={selectedOption} onChange={handleOptionChange}>
          <option disabled value="">Sort by</option>
          <option value="most_rated">Most rated</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="most_comments">Most comments</option>
        </select>
      </div>
      
      <div className={showPrepTime ? "filter-container filter-sort-mobile --active" : "filter-container filter-sort-mobile"}>

        <div className="radio-group">
          <span className="heading">Sort by:</span>
          <label className="radio">Most rated
            <input type="radio" name="sorting" value="most_rated"
              checked={selectedOption === 'most_rated'}
              onChange={handleOptionChange}
            />
            <span className="checkmark"></span>
          </label>

          <label className="radio">Newest
            <input type="radio" name="sorting" value="newest"
              checked={selectedOption === 'newest'}
              onChange={handleOptionChange}
            />
            <span className="checkmark"></span>
          </label>

          <label className="radio">Oldest
            <input type="radio" name="sorting" value="oldest"
              checked={selectedOption === 'oldest'}
              onChange={handleOptionChange}
            />
            <span className="checkmark"></span>
          </label>

          <label className="radio">Most comments
            <input type="radio" name="sorting" value="most_comments"
              checked={selectedOption === 'most_comments'}
              onChange={handleOptionChange}
            />
            <span className="checkmark"></span>
          </label>


        </div>

      </div>
      </>
    );
  }


  // Filter renders

  const renderFilterSort = () => {
    return (
      <>
      <div className="filter-desktop">
        <div className="filter-options">
          <span>Filter by:</span>
          {handleCategories()}
        </div>
        {handleSortBy()}
      </div>

      <div className="filter-mobile">
        {handleCategories()}
        {handleSortBy()}   
      </div>
      </>
    );
  }

  const renderSort = () => {
    return (
      <>
        {handleSortBy()}
      </>
    );
  }

  const renderPocketFilter = () => {
    return (
      <>
        
      </>
    );
  }

  
  // Display filter

  let filterContent;
  if (type === 'filter-sort') {
    filterContent = renderFilterSort();
  } else if (type === 'sort') {
    filterContent = renderSort();
  } else if (type === 'pocket-filter') {
    filterContent = renderPocketFilter();
  }

  return (
    <div className="filter-wrapper">
      {filterContent}
    </div>
  );
}

export default Filter