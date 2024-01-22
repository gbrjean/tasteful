import { useState } from 'react';


export function useCheckedIngredients(recipeId: string) {
  const [checkedIngredients, setCheckedIngredients] = useState<string[]>(
    () => JSON.parse(localStorage.getItem(`recipe_${recipeId}_checked_ingredients`) || '[]')
  );

  const toggleIngredient = (ingredient: string) => {
    setCheckedIngredients((prevChecked) => {
      const updatedChecked = prevChecked.includes(ingredient)
        ? prevChecked.filter((item) => item !== ingredient)
        : [...prevChecked, ingredient]

      if(updatedChecked.length > 0){
        localStorage.setItem(`recipe_${recipeId}_checked_ingredients`, JSON.stringify(updatedChecked))
      } else {
        localStorage.removeItem(`recipe_${recipeId}_checked_ingredients`)
      }

      return updatedChecked
    });
  };

  return { checkedIngredients, toggleIngredient };
}