"use client"
import { useEffect, useState } from "react";
import { ArrowIcon } from "@public/assets/icons/ArrowIcon";
import { FilterIcon } from "@public/assets/icons/FilterIcon";
import { SortIcon } from "@public/assets/icons/SortIcon";
import { Button } from "../Button";
import { categories } from "@constants/categories";

type selectedFilters = {
  categories: string[];
  preptime: string;
  sortby: string;
}

type props = {
  type: 'filter-sort' | 'sort' | 'pocket-filter';
  currentValue: selectedFilters;
  onValueChange: (newValue: selectedFilters) => void;
}


const Filter = ({type, currentValue, onValueChange}: props) => {

  // Filter handles
  const [showPrepTime, setShowPrepTime] = useState(false)


  const handleCategories = () => {

    const [showCategories, setShowCategories] = useState(false)

    const [localPreptime, setLocalPreptime] = useState("");

    
    const handleCategoryChange = (category: string) => {
      const updatedCategories = [...currentValue.categories];
    
      // Check if the category is already selected
      const categoryIndex = updatedCategories.indexOf(category);
    
      if (categoryIndex === -1) {
        // Category is not selected, add it
        updatedCategories.push(category);
      } else {
        // Category is already selected, remove it
        updatedCategories.splice(categoryIndex, 1);
      }
    
      // Create the updated filters object
      const updatedFilters = {
        ...currentValue,
        categories: updatedCategories,
      };
    
      // Call the parent component's callback to update the filters
      onValueChange(updatedFilters);
    };

    const handleCategoryContainer = () => {
      setShowCategories(prev => !prev)
      if(showPrepTime) {
        setShowPrepTime(false)
      }
    }

    const handlePrepTimeContainer = () => {
      setShowPrepTime(prev => !prev)
      if(showCategories) {
        setShowCategories(false)
      }
    }

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalPreptime(e.target.value);
      onValueChange({ ...currentValue, preptime: e.target.value });
    };


    const handlePreptimeClick = (value: string) => {
      setLocalPreptime(value);
      onValueChange({...currentValue, preptime: value})
    }
    

    return (
      <>
      <div className="filter-item-wrapper">
        <div className={showCategories ? "filter-item --active" : "filter-item"} onClick={handleCategoryContainer}>
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
                  onClick={() => handleCategoryChange(category.name)}
                  className={currentValue.categories.includes(category.name) ? 'category active' : 'category'}
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
                color={localPreptime === "lt-5" ? 'colorful' : 'gray'}
                onClick={() => handlePreptimeClick("lt-5")}
              />

              <Button
                gap={'narrow'}
                type={'outline'}
                text={'5-10 MIN'}
                color={localPreptime === "5-10" ? 'colorful' : 'gray'}
                onClick={() => handlePreptimeClick("5-10")}
              />

              <Button
                gap={'narrow'}
                type={'outline'}
                text={'10-20 MIN'}
                color={localPreptime === "10-20" ? 'colorful' : 'gray'}
                onClick={() => handlePreptimeClick("10-20")}
              />

              <Button
                gap={'narrow'}
                type={'outline'}
                text={'20-30 MIN'}
                color={localPreptime === "20-30" ? 'colorful' : 'gray'}
                onClick={() => handlePreptimeClick("20-30")}
              />

              <Button
                gap={'narrow'}
                type={'outline'}
                text={'30-45 MIN'}
                color={localPreptime === "30-45" ? 'colorful' : 'gray'}
                onClick={() => handlePreptimeClick("30-45")}
              />

              <Button
                gap={'narrow'}
                type={'outline'}
                text={'45-60 MIN'}
                color={localPreptime === "45-60" ? 'colorful' : 'gray'}
                onClick={() => handlePreptimeClick("45-60")}
              />

              <Button
                gap={'narrow'}
                type={'outline'}
                text={'60-100 MIN'}
                color={localPreptime === "60-100" ? 'colorful' : 'gray'}
                onClick={() => handlePreptimeClick("60-100")}
              />

              

            </div>

          </div>
        </div>
        
      </div>

      <div className="filter-item-wrapper">
        <div className={showPrepTime ? "filter-item --active" : "filter-item"} onClick={handlePrepTimeContainer}>
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
              <input type="radio" name="sorting" value="lt-5"
                checked={localPreptime === "lt-5"}
                onChange={handleRadioChange}
              />
              <span className="checkmark"></span>
            </label>

            <label className="radio">5-10 MIN
              <input type="radio" name="sorting" value="5-10"
                checked={localPreptime === "5-10"}
                onChange={handleRadioChange}
              />
              <span className="checkmark"></span>
            </label>

            <label className="radio">10-20 MIN
              <input type="radio" name="sorting" value="10-20" 
                checked={localPreptime === "10-20"}
                onChange={handleRadioChange}
              />
              <span className="checkmark"></span>
            </label>

            <label className="radio">20-30 MIN
              <input type="radio" name="sorting" value="20-30" 
                checked={localPreptime === "20-30"}
                onChange={handleRadioChange}
              />
              <span className="checkmark"></span>
            </label>

            <label className="radio">30-45 MIN
              <input type="radio" name="sorting" value="30-45" 
                checked={localPreptime === "30-45"}
                onChange={handleRadioChange}
              />
              <span className="checkmark"></span>
            </label>

            <label className="radio">45-60 MIN
              <input type="radio" name="sorting" value="45-60" 
                checked={localPreptime === "45-60"}
                onChange={handleRadioChange}
              />
              <span className="checkmark"></span>
            </label>

            <label className="radio">60-100 MIN
              <input type="radio" name="sorting" value="60-100" 
                checked={localPreptime === "60-100"}
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

    const [localSortValue, setLocalSortValue] = useState("")


    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
      setLocalSortValue(e.target.value)
      onValueChange({...currentValue, sortby: e.target.value});
    };

    useEffect(() => {
      setLocalSortValue(currentValue.sortby);
    }, [currentValue.sortby]);

    return (
      <>
      <div className="filter-sort-desktop">
        <select className="filter-sort" value={currentValue.sortby} onChange={handleOptionChange}>
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
              checked={currentValue.sortby === 'most_rated' || localSortValue === 'most_rated'}
              onChange={handleOptionChange}
            />
            <span className="checkmark"></span>
          </label>

          <label className="radio">Newest
            <input type="radio" name="sorting" value="newest"
              checked={currentValue.sortby === 'newest' || localSortValue === 'newest'}
              onChange={handleOptionChange}
            />
            <span className="checkmark"></span>
          </label>

          <label className="radio">Oldest
            <input type="radio" name="sorting" value="oldest"
              checked={currentValue.sortby === 'oldest' || localSortValue === 'oldest'}
              onChange={handleOptionChange}
            />
            <span className="checkmark"></span>
          </label>

          <label className="radio">Most comments
            <input type="radio" name="sorting" value="most_comments"
              checked={currentValue.sortby === 'most_comments' || localSortValue === 'most_comments'}
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