export const dummyRecipes = [
  //! Pasta
  {
    title: 'Spaghetti Carbonara',
    slug: 'spaghetti-carbonara',
    author: 'johndoe@app.dev',
    description: 'Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.',
    category: 'Pasta',
    photo: '/assets/images/recipes_album/carbonara_pasta.jpg',
    prep_time: '30-45',
    ingredients: [
      {
        material: 'Pasta',
        elements: [
          {
            ingredient: 'Spaghetti',
            quantity: '200',
            unit: 'grams'
          }
        ]
      },
      {
        material: 'Sauce',
        elements: [
          {
            ingredient: 'Eggs',
            quantity: '2',
            unit: 'pieces'
          },
          {
            ingredient: 'Pancetta',
            quantity: '100',
            unit: 'grams'
          },
          {
            ingredient: 'Parmesan cheese',
            quantity: '50',
            unit: 'grams'
          },
          {
            ingredient: 'Black pepper',
            quantity: '1',
            unit: 'teaspoon'
          }
        ]
      }
    ],
    instructions: [
      {
        instruction: 'Cook spaghetti according to package instructions.'
      },
      {
        instruction: 'In a separate pan, cook pancetta until crispy.'
      },
      {
        instruction: 'In a bowl, whisk together eggs, grated Parmesan, and black pepper.'
      },
      {
        instruction: 'Drain cooked pasta and add it to the pan with pancetta.'
      },
      {
        instruction: 'Quickly pour the egg mixture over the pasta and toss to combine.'
      },
      {
        instruction: 'Serve with extra Parmesan and black pepper on top.'
      }
    ]
  },
  
  // Pasta Recipe 1
  {
    title: 'Fettuccine Alfredo',
    slug: 'fettuccine-alfredo',
    author: 'susanwhite@app.dev',
    description: 'Creamy and indulgent Fettuccine Alfredo with Parmesan cheese and butter.',
    category: 'Pasta',
    photo: '/assets/images/recipes_album/Fettuccine Alfredo.jpg',
    prep_time: '20-30',
    ingredients: [
      {
        material: 'Pasta',
        elements: [
          {
            ingredient: 'Fettuccine',
            quantity: '250',
            unit: 'grams'
          }
        ]
      },
      {
        material: 'Sauce',
        elements: [
          {
            ingredient: 'Butter',
            quantity: '100',
            unit: 'grams'
          },
          {
            ingredient: 'Heavy Cream',
            quantity: '200',
            unit: 'ml'
          },
          {
            ingredient: 'Parmesan cheese',
            quantity: '100',
            unit: 'grams'
          },
          {
            ingredient: 'Salt',
            quantity: '1/2',
            unit: 'teaspoon'
          },
          {
            ingredient: 'Black pepper',
            quantity: '1/4',
            unit: 'teaspoon'
          }
        ]
      }
    ],
    instructions: [
      {
        instruction: 'Cook fettuccine according to package instructions.'
      },
      {
        instruction: 'In a saucepan, melt butter over low heat.'
      },
      {
        instruction: 'Stir in heavy cream and grated Parmesan cheese until smooth.'
      },
      {
        instruction: 'Season with salt and black pepper.'
      },
      {
        instruction: 'Toss cooked pasta in the creamy Alfredo sauce.'
      },
      {
        instruction: 'Serve hot with extra Parmesan on top.'
      }
    ]
  },

  // Pasta Recipe 2
  {
    title: 'Penne alla Vodka',
    slug: 'penne-alla-vodka',
    author: 'susanwhite@app.dev',
    description: 'Delicious Penne alla Vodka with a creamy tomato and vodka sauce.',
    category: 'Pasta',
    photo: '/assets/images/recipes_album/Penne-alla-Vodka-SQ.jpg',
    prep_time: '30-45',
    ingredients: [
      {
        material: 'Pasta',
        elements: [
          {
            ingredient: 'Penne',
            quantity: '300',
            unit: 'grams'
          }
        ]
      },
      {
        material: 'Sauce',
        elements: [
          {
            ingredient: 'Olive Oil',
            quantity: '2',
            unit: 'tablespoons'
          },
          {
            ingredient: 'Onion',
            quantity: '1',
            unit: 'small, chopped'
          },
          {
            ingredient: 'Garlic',
            quantity: '2',
            unit: 'cloves, minced'
          },
          {
            ingredient: 'Vodka',
            quantity: '1/4',
            unit: 'cup'
          },
          {
            ingredient: 'Tomato Sauce',
            quantity: '1',
            unit: 'cup'
          },
          {
            ingredient: 'Heavy Cream',
            quantity: '1/2',
            unit: 'cup'
          },
          {
            ingredient: 'Parmesan cheese',
            quantity: '1/2',
            unit: 'cup, grated'
          },
          {
            ingredient: 'Fresh Basil',
            quantity: '2',
            unit: 'tablespoons, chopped'
          },
          {
            ingredient: 'Salt',
            quantity: '1/2',
            unit: 'teaspoon'
          },
          {
            ingredient: 'Red Pepper Flakes',
            quantity: '1/4',
            unit: 'teaspoon'
          }
        ]
      }
    ],
    instructions: [
      {
        instruction: 'Cook penne pasta according to package instructions.'
      },
      {
        instruction: 'In a large skillet, heat olive oil and sauté onion and garlic until translucent.'
      },
      {
        instruction: 'Add vodka and cook until reduced by half.'
      },
      {
        instruction: 'Stir in tomato sauce, heavy cream, Parmesan cheese, basil, salt, and red pepper flakes.'
      },
      {
        instruction: 'Simmer for a few minutes until the sauce thickens.'
      },
      {
        instruction: 'Toss cooked penne in the creamy vodka sauce.'
      },
      {
        instruction: 'Serve with extra Parmesan and fresh basil.'
      }
    ]
  },
   //! Category: Seafood
  {
    title: 'Grilled Salmon',
    slug: 'grilled-salmon',
    author: 'jessicayoung@app.dev',
    description: 'Healthy and delicious grilled salmon with lemon and herbs.',
    category: 'Seafood',
    photo: '/assets/images/recipes_album/salmon.jpg',
    prep_time: '20-30',
    ingredients: [
      {
        material: 'Salmon fillets',
        elements: [
          {
            ingredient: 'Salmon',
            quantity: '4',
            unit: 'fillets'
          }
        ]
      },
      {
        material: 'Lemon',
        elements: [
          {
            ingredient: 'Lemon',
            quantity: '1',
            unit: 'piece'
          }
        ]
      },
      {
        material: 'Fresh herbs',
        elements: [
          {
            ingredient: 'Dill',
            quantity: '1',
            unit: 'tablespoon'
          },
          {
            ingredient: 'Parsley',
            quantity: '1',
            unit: 'tablespoon'
          }
        ]
      }
    ],
    instructions: [
      {
        instruction: 'Preheat the grill to medium-high heat.'
      },
      {
        instruction: 'Season the salmon fillets with salt, pepper, and olive oil.'
      },
      {
        instruction: 'Grill the salmon for 4-5 minutes on each side or until cooked through.'
      },
    ]
  },

  {
    title: 'Lemon Garlic Shrimp',
    slug: 'lemon-garlic-shrimp',
    author: 'patriciahernandez@app.dev',
    description: 'Quick and flavorful lemon garlic shrimp with a hint of spice.',
    category: 'Seafood',
    photo: '/assets/images/recipes_album/Lemon Garlic Shrimp.jpg',
    prep_time: '10-20',
    ingredients: [
      {
        material: 'Shrimp',
        elements: [
          {
            ingredient: 'Large shrimp',
            quantity: '1',
            unit: 'pound'
          }
        ]
      },
      {
        material: 'Lemon',
        elements: [
          {
            ingredient: 'Lemon juice',
            quantity: '2',
            unit: 'tablespoons'
          },
          {
            ingredient: 'Lemon zest',
            quantity: '1',
            unit: 'teaspoon'
          }
        ]
      },
      {
        material: 'Garlic',
        elements: [
          {
            ingredient: 'Garlic cloves',
            quantity: '4',
            unit: 'cloves, minced'
          }
        ]
      },
      {
        material: 'Butter',
        elements: [
          {
            ingredient: 'Butter',
            quantity: '2',
            unit: 'tablespoons'
          }
        ]
      },
      {
        material: 'Red pepper flakes',
        elements: [
          {
            ingredient: 'Red pepper flakes',
            quantity: '1/4',
            unit: 'teaspoon'
          }
        ]
      },
      {
        material: 'Fresh parsley',
        elements: [
          {
            ingredient: 'Fresh parsley',
            quantity: '2',
            unit: 'tablespoons, chopped'
          }
        ]
      }
    ],
    instructions: [
      {
        instruction: 'In a skillet, melt butter over medium heat.'
      },
      {
        instruction: 'Add minced garlic and red pepper flakes; sauté for 1-2 minutes.'
      },
      {
        instruction: 'Add shrimp and cook until pink and opaque.'
      },
      {
        instruction: 'Stir in lemon juice, lemon zest, and fresh parsley.'
      },
      {
        instruction: 'Season with salt and pepper, if desired.'
      },
      {
        instruction: 'Serve immediately.'
      }
    ]
  },
  
  // Seafood Recipe 2
  {
    title: 'Crab Cakes',
    slug: 'crab-cakes',
    author: 'lindamartinez@app.dev',
    description: 'Delicious homemade crab cakes with a crispy crust and tender crabmeat.',
    category: 'Seafood',
    photo: '/assets/images/recipes_album/crab-cakes.jpg',
    prep_time: '30-45',
    ingredients: [
      {
        material: 'Crab Meat',
        elements: [
          {
            ingredient: 'Crab meat',
            quantity: '1',
            unit: 'pound'
          }
        ]
      },
      {
        material: 'Breadcrumbs',
        elements: [
          {
            ingredient: 'Breadcrumbs',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Mayonnaise',
        elements: [
          {
            ingredient: 'Mayonnaise',
            quantity: '1/4',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Dijon Mustard',
        elements: [
          {
            ingredient: 'Dijon mustard',
            quantity: '1',
            unit: 'tablespoon'
          }
        ]
      },
      {
        material: 'Egg',
        elements: [
          {
            ingredient: 'Egg',
            quantity: '1',
            unit: 'large'
          }
        ]
      },
      {
        material: 'Green onions',
        elements: [
          {
            ingredient: 'Green onions',
            quantity: '2',
            unit: 'tablespoons, chopped'
          }
        ]
      }
    ],
    instructions: [
      {
        instruction: 'In a bowl, combine crab meat, breadcrumbs, mayonnaise, Dijon mustard, egg, and green onions.'
      },
      {
        instruction: 'Form the mixture into crab cakes.'
      },
      {
        instruction: 'Heat oil in a skillet over medium-high heat.'
      },
      {
        instruction: 'Fry crab cakes until golden brown on both sides.'
      },
      {
        instruction: 'Serve with tartar sauce or aioli.'
      }
    ]
  },

  //! Category: Soup
  {
    title: 'Tomato Basil Soup',
    slug: 'tomato-basil-soup',
    author: 'jamesbrown@app.dev',
    description: 'Classic tomato soup with fresh basil and a hint of garlic.',
    category: 'Soup',
    photo: '/assets/images/recipes_album/Tomato Basil Soup.jpeg',
    prep_time: '30-45',
    ingredients: [
      {
        material: 'Tomatoes',
        elements: [
          {
            ingredient: 'Ripe tomatoes',
            quantity: '6',
            unit: 'pieces'
          }
        ]
      },
      {
        material: 'Fresh basil',
        elements: [
          {
            ingredient: 'Basil leaves',
            quantity: '1',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Garlic',
        elements: [
          {
            ingredient: 'Garlic cloves',
            quantity: '3',
            unit: 'cloves'
          }
        ]
      }
    ],
    instructions: [
      {
        instruction: 'In a large pot, heat olive oil and sauté garlic until fragrant.'
      },
      {
        instruction: 'Add chopped tomatoes and cook for 10 minutes.'
      },
      {
        instruction: 'Add basil and simmer for an additional 10 minutes.'
      },
    ]
  },

  // Soup Recipe 1
  {
    title: 'Chicken Noodle Soup',
    slug: 'chicken-noodle-soup',
    author: 'jamesbrown@app.dev',
    description: 'Comforting and hearty chicken noodle soup to warm your soul.',
    category: 'Soup',
    photo: '/assets/images/recipes_album/chicken-noodle-soup.jpg',
    prep_time: '30-45',
    ingredients: [
      {
        material: 'Chicken',
        elements: [
          {
            ingredient: 'Chicken breast',
            quantity: '2',
            unit: 'pieces'
          }
        ]
      },
      {
        material: 'Noodles',
        elements: [
          {
            ingredient: 'Egg noodles',
            quantity: '8',
            unit: 'ounces'
          }
        ]
      },
      {
        material: 'Carrots',
        elements: [
          {
            ingredient: 'Carrots',
            quantity: '2',
            unit: 'large, diced'
          }
        ]
      },
      {
        material: 'Celery',
        elements: [
          {
            ingredient: 'Celery stalks',
            quantity: '3',
            unit: 'stalks, sliced'
          }
        ]
      },
      {
        material: 'Onion',
        elements: [
          {
            ingredient: 'Onion',
            quantity: '1',
            unit: 'medium, chopped'
          }
        ]
      },
      {
        material: 'Garlic',
        elements: [
          {
            ingredient: 'Garlic cloves',
            quantity: '2',
            unit: 'cloves, minced'
          }
        ]
      }
    ],
    instructions: [
      {
        instruction: 'Start by cooking the chicken breasts in a large pot until fully cooked; remove and shred.'
      },
      {
        instruction: 'In the same pot, sauté onions, garlic, carrots, and celery until tender.'
      },
      {
        instruction: 'Add shredded chicken and egg noodles to the pot.'
      },
      {
        instruction: 'Cook until noodles are tender.'
      },
      {
        instruction: 'Season with salt, pepper, and fresh herbs.'
      },
      {
        instruction: 'Serve hot.'
      }
    ]
  },

  // Soup Recipe 2
  {
    title: 'Minestrone Soup',
    slug: 'minestrone-soup',
    author: 'michaelsmith@app.dev',
    description: 'Hearty Italian minestrone soup packed with vegetables and pasta.',
    category: 'Soup',
    photo: '/assets/images/recipes_album/Minestrone Soup.jpg',
    prep_time: '45-60',
    ingredients: [
      {
        material: 'Pasta',
        elements: [
          {
            ingredient: 'Pasta',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Kidney beans',
        elements: [
          {
            ingredient: 'Kidney beans',
            quantity: '1',
            unit: 'can (15 oz)'
          }
        ]
      },
      {
        material: 'Zucchini',
        elements: [
          {
            ingredient: 'Zucchini',
            quantity: '1',
            unit: 'medium, diced'
          }
        ]
      },
      {
        material: 'Green beans',
        elements: [
          {
            ingredient: 'Green beans',
            quantity: '1/2',
            unit: 'cup, chopped'
          }
        ]
      },
      {
        material: 'Carrots',
        elements: [
          {
            ingredient: 'Carrots',
            quantity: '2',
            unit: 'large, diced'
          }
        ]
      },
      {
        material: 'Tomatoes',
        elements: [
          {
            ingredient: 'Tomatoes',
            quantity: '2',
            unit: 'large, diced'
          }
        ]
      },
      {
        material: 'Vegetable broth',
        elements: [
          {
            ingredient: 'Vegetable broth',
            quantity: '6',
            unit: 'cups'
          }
        ]
      }
    ],
    instructions: [
      {
        instruction: 'In a large pot, sauté onions, carrots, and garlic until softened.'
      },
      {
        instruction: 'Add zucchini, green beans, and tomatoes; cook for 5 minutes.'
      },
      {
        instruction: 'Pour in vegetable broth and bring to a boil.'
      },
      {
        instruction: 'Stir in pasta and simmer until cooked.'
      },
      {
        instruction: 'Add kidney beans and cook for an additional 5 minutes.'
      },
      {
        instruction: 'Season with salt, pepper, and fresh basil.'
      },
      {
        instruction: 'Serve hot with a sprinkle of grated Parmesan cheese.'
      }
    ]
  },

  // Soup Recipe 3
  {
    title: 'Potato Leek Soup',
    slug: 'potato-leek-soup',
    author: 'marydavis@app.dev',
    description: 'Creamy and comforting potato leek soup with a touch of cream.',
    category: 'Soup',
    photo: '/assets/images/recipes_album/Potato Leek Soup.jpeg',
    prep_time: '30-45',
    ingredients: [
      {
        material: 'Potatoes',
        elements: [
          {
            ingredient: 'Potatoes',
            quantity: '4',
            unit: 'medium, peeled and diced'
          }
        ]
      },
      {
        material: 'Leeks',
        elements: [
          {
            ingredient: 'Leeks',
            quantity: '2',
            unit: 'large, chopped'
          }
        ]
      },
      {
        material: 'Chicken broth',
        elements: [
          {
            ingredient: 'Chicken broth',
            quantity: '4',
            unit: 'cups'
          }
        ]
      },
      {
        material: 'Heavy cream',
        elements: [
          {
            ingredient: 'Heavy cream',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Butter',
        elements: [
          {
            ingredient: 'Butter',
            quantity: '2',
            unit: 'tablespoons'
          }
        ]
      }
    ],
    instructions: [
      {
        instruction: 'In a large pot, melt butter and sauté leeks until softened.'
      },
      {
        instruction: 'Add diced potatoes and chicken broth; simmer until potatoes are tender.'
      },
      {
        instruction: 'Blend the soup until smooth using an immersion blender.'
      },
      {
        instruction: 'Stir in heavy cream and heat until warm.'
      },
      {
        instruction: 'Season with salt, pepper, and a sprinkle of chopped chives.'
      },
      {
        instruction: 'Serve hot.'
      }
    ]
  },

  //! Category: Pancakes
  {
    title: 'Blueberry Pancakes',
    slug: 'blueberry-pancakes',
    author: 'susanwhite@app.dev',
    description: 'Fluffy blueberry pancakes with maple syrup.',
    category: 'Pancakes',
    photo: '/assets/images/recipes_album/pancakes.jpg',
    prep_time: '10-20',
    ingredients: [
      {
        material: 'All-purpose flour',
        elements: [
          {
            ingredient: 'Flour',
            quantity: '1',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Blueberries',
        elements: [
          {
            ingredient: 'Blueberries',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Maple syrup',
        elements: [
          {
            ingredient: 'Maple syrup',
            quantity: '1/4',
            unit: 'cup'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'In a mixing bowl, combine flour, sugar, baking powder, and salt.'
      },
      {
        instruction: 'In a separate bowl, whisk together milk, eggs, and melted butter.'
      },
      {
        instruction: 'Pour the wet mixture into the dry mixture and stir until just combined.'
      },
      // Add more instructions as needed
    ]
  },

  //! Category: Waffles
  {
    title: 'Homemade Waffles',
    slug: 'homemade-waffles',
    author: 'michaelsmith@app.dev',
    description: 'Crispy homemade waffles served with fresh berries.',
    category: 'Waffles',
    photo: '/assets/images/recipes_album/Homemade Waffles.jpg',
    prep_time: '20-30',
    ingredients: [
      {
        material: 'Waffle mix',
        elements: [
          {
            ingredient: 'Waffle mix',
            quantity: '2',
            unit: 'cups'
          }
        ]
      },
      {
        material: 'Fresh berries',
        elements: [
          {
            ingredient: 'Mixed berries',
            quantity: '1',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Whipped cream',
        elements: [
          {
            ingredient: 'Whipped cream',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Preheat your waffle iron according to the manufacturer\'s instructions.'
      },
      {
        instruction: 'In a mixing bowl, combine waffle mix and water.'
      },
      {
        instruction: 'Pour the batter onto the preheated waffle iron and cook until golden brown.'
      },
      // Add more instructions as needed
    ]
  },

  //! Category: Pizza
  {
    title: 'Margherita Pizza',
    slug: 'margherita-pizza',
    author: 'williamclark@app.dev',
    description: 'Classic Margherita pizza with tomato, mozzarella, and basil.',
    category: 'Pizza',
    photo: '/assets/images/recipes_album/Margherita Pizza.jpg',
    prep_time: '20-30',
    ingredients: [
      {
        material: 'Pizza dough',
        elements: [
          {
            ingredient: 'Pizza dough',
            quantity: '1',
            unit: 'ball'
          }
        ]
      },
      {
        material: 'Tomato sauce',
        elements: [
          {
            ingredient: 'Tomato sauce',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Mozzarella cheese',
        elements: [
          {
            ingredient: 'Mozzarella cheese',
            quantity: '1',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Fresh basil leaves',
        elements: [
          {
            ingredient: 'Basil leaves',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Preheat your oven to its highest temperature.'
      },
      {
        instruction: 'Roll out the pizza dough on a floured surface into a thin circle.'
      },
      {
        instruction: 'Spread tomato sauce evenly over the dough.'
      },
      {
        instruction: 'Sprinkle mozzarella cheese over the sauce.'
      },
      {
        instruction: 'Bake in the preheated oven for 10-12 minutes or until crust is golden brown.'
      },
      {
        instruction: 'Remove from the oven, top with fresh basil leaves, and serve.'
      }
      // Add more instructions as needed
    ]
  },

    // Pizza Recipe 1
  {
    title: 'Pepperoni Pizza',
    slug: 'pepperoni-pizza',
    author: 'susanwhite@app.dev',
    description: 'Classic pepperoni pizza with a generous amount of pepperoni slices.',
    category: 'Pizza',
    photo: '/assets/images/recipes_album/pepperonipizza.jpg',
    prep_time: '20-30',
    ingredients: [
      {
        material: 'Pizza dough',
        elements: [
          {
            ingredient: 'Pizza dough',
            quantity: '1',
            unit: 'ball'
          }
        ]
      },
      {
        material: 'Tomato sauce',
        elements: [
          {
            ingredient: 'Tomato sauce',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Mozzarella cheese',
        elements: [
          {
            ingredient: 'Mozzarella cheese',
            quantity: '1',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Pepperoni slices',
        elements: [
          {
            ingredient: 'Pepperoni slices',
            quantity: '1',
            unit: 'cup'
          }
        ]
      }
    ],
    instructions: [
      {
        instruction: 'Preheat your oven to its highest temperature.'
      },
      {
        instruction: 'Roll out the pizza dough on a floured surface into a thin circle.'
      },
      {
        instruction: 'Spread tomato sauce evenly over the dough.'
      },
      {
        instruction: 'Sprinkle mozzarella cheese over the sauce.'
      },
      {
        instruction: 'Distribute pepperoni slices evenly over the pizza.'
      },
      {
        instruction: 'Bake in the preheated oven for 10-12 minutes or until crust is golden brown.'
      },
      {
        instruction: 'Remove from the oven and serve hot.'
      }
    ]
  },

  // Pizza Recipe 2
  {
    title: 'Vegetarian Pizza',
    slug: 'vegetarian-pizza',
    author: 'jessicayoung@app.dev',
    description: 'Delicious vegetarian pizza with a variety of fresh vegetables.',
    category: 'Pizza',
    photo: '/assets/images/recipes_album/vegetarian pizza.jpg',
    prep_time: '20-30',
    ingredients: [
      {
        material: 'Pizza dough',
        elements: [
          {
            ingredient: 'Pizza dough',
            quantity: '1',
            unit: 'ball'
          }
        ]
      },
      {
        material: 'Tomato sauce',
        elements: [
          {
            ingredient: 'Tomato sauce',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Mozzarella cheese',
        elements: [
          {
            ingredient: 'Mozzarella cheese',
            quantity: '1',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Mixed vegetables',
        elements: [
          {
            ingredient: 'Bell peppers',
            quantity: '1/2',
            unit: 'cup, sliced'
          },
          {
            ingredient: 'Mushrooms',
            quantity: '1/2',
            unit: 'cup, sliced'
          },
          {
            ingredient: 'Olives',
            quantity: '1/4',
            unit: 'cup, sliced'
          }
        ]
      }
    ],
    instructions: [
      {
        instruction: 'Preheat your oven to its highest temperature.'
      },
      {
        instruction: 'Roll out the pizza dough on a floured surface into a thin circle.'
      },
      {
        instruction: 'Spread tomato sauce evenly over the dough.'
      },
      {
        instruction: 'Sprinkle mozzarella cheese over the sauce.'
      },
      {
        instruction: 'Distribute mixed vegetables evenly over the pizza.'
      },
      {
        instruction: 'Bake in the preheated oven for 10-12 minutes or until crust is golden brown.'
      },
      {
        instruction: 'Remove from the oven and serve hot.'
      }
    ]
  },

  // Pizza Recipe 3
  {
    title: 'Hawaiian Pizza',
    slug: 'hawaiian-pizza',
    author: 'jessicayoung@app.dev',
    description: 'Sweet and savory Hawaiian pizza with pineapple and ham.',
    category: 'Pizza',
    photo: '/assets/images/recipes_album/hawaiian pizza.jpg',
    prep_time: '20-30',
    ingredients: [
      {
        material: 'Pizza dough',
        elements: [
          {
            ingredient: 'Pizza dough',
            quantity: '1',
            unit: 'ball'
          }
        ]
      },
      {
        material: 'Tomato sauce',
        elements: [
          {
            ingredient: 'Tomato sauce',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Mozzarella cheese',
        elements: [
          {
            ingredient: 'Mozzarella cheese',
            quantity: '1',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Pineapple chunks',
        elements: [
          {
            ingredient: 'Pineapple chunks',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Ham',
        elements: [
          {
            ingredient: 'Ham',
            quantity: '1/2',
            unit: 'cup, diced'
          }
        ]
      }
    ],
    instructions: [
      {
        instruction: 'Preheat your oven to its highest temperature.'
      },
      {
        instruction: 'Roll out the pizza dough on a floured surface into a thin circle.'
      },
      {
        instruction: 'Spread tomato sauce evenly over the dough.'
      },
      {
        instruction: 'Sprinkle mozzarella cheese over the sauce.'
      },
      {
        instruction: 'Distribute pineapple chunks and diced ham evenly over the pizza.'
      },
      {
        instruction: 'Bake in the preheated oven for 10-12 minutes or until crust is golden brown.'
      },
      {
        instruction: 'Remove from the oven and serve hot.'
      }
    ]
  },

  // Pizza Recipe 4
  {
    title: 'Supreme Pizza',
    slug: 'supreme-pizza',
    author: 'patriciahernandez@app.dev',
    description: 'A supreme pizza loaded with a variety of toppings.',
    category: 'Pizza',
    photo: '/assets/images/recipes_album/supreme pizza.jpg',
    prep_time: '20-30',
    ingredients: [
      {
        material: 'Pizza dough',
        elements: [
          {
            ingredient: 'Pizza dough',
            quantity: '1',
            unit: 'ball'
          }
        ]
      },
      {
        material: 'Tomato sauce',
        elements: [
          {
            ingredient: 'Tomato sauce',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Mozzarella cheese',
        elements: [
          {
            ingredient: 'Mozzarella cheese',
            quantity: '1',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Toppings',
        elements: [
          {
            ingredient: 'Sausage',
            quantity: '1/4',
            unit: 'cup, crumbled'
          },
          {
            ingredient: 'Bell peppers',
            quantity: '1/4',
            unit: 'cup, sliced'
          },
          {
            ingredient: 'Onions',
            quantity: '1/4',
            unit: 'cup, sliced'
          },
          {
            ingredient: 'Black olives',
            quantity: '1/4',
            unit: 'cup, sliced'
          },
          {
            ingredient: 'Mushrooms',
            quantity: '1/4',
            unit: 'cup, sliced'
          }
        ]
      }
    ],
    instructions: [
      {
        instruction: 'Preheat your oven to its highest temperature.'
      },
      {
        instruction: 'Roll out the pizza dough on a floured surface into a thin circle.'
      },
      {
        instruction: 'Spread tomato sauce evenly over the dough.'
      },
      {
        instruction: 'Sprinkle mozzarella cheese over the sauce.'
      },
      {
        instruction: 'Distribute a variety of toppings evenly over the pizza.'
      },
      {
        instruction: 'Bake in the preheated oven for 10-12 minutes or until crust is golden brown.'
      },
      {
        instruction: 'Remove from the oven and serve hot.'
      }
    ]
  },

  //! Category: Cake
  {
    title: 'Chocolate Cake',
    slug: 'chocolate-cake',
    author: 'patriciahernandez@app.dev',
    description: 'Decadent chocolate cake with rich chocolate ganache.',
    category: 'Cake',
    photo: '/assets/images/recipes_album/Chocolate Cake.jpg',
    prep_time: '45-60',
    ingredients: [
      {
        material: 'All-purpose flour',
        elements: [
          {
            ingredient: 'Flour',
            quantity: '1 3/4',
            unit: 'cups'
          }
        ]
      },
      {
        material: 'Cocoa powder',
        elements: [
          {
            ingredient: 'Cocoa powder',
            quantity: '3/4',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Butter',
        elements: [
          {
            ingredient: 'Unsalted butter',
            quantity: '1 3/4',
            unit: 'cups'
          }
        ]
      },
      {
        material: 'Chocolate chips',
        elements: [
          {
            ingredient: 'Chocolate chips',
            quantity: '1',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Heavy cream',
        elements: [
          {
            ingredient: 'Heavy cream',
            quantity: '1',
            unit: 'cup'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Preheat your oven to 175°C.'
      },
      {
        instruction: 'In a large mixing bowl, sift together the flour and cocoa powder.'
      },
      {
        instruction: 'In a separate bowl, cream together the butter and sugar until light and fluffy.'
      },
      {
        instruction: 'Gradually add the dry ingredients to the wet mixture and mix until well combined.'
      },
      {
        instruction: 'Stir in the chocolate chips.'
      },
      {
        instruction: 'Pour the batter into a greased and floured cake pan.'
      },
      {
        instruction: 'Bake for 30-35 minutes or until a toothpick inserted into the center comes out clean.'
      },
      {
        instruction: 'While the cake is cooling, heat the heavy cream and pour it over the chocolate chips to make the ganache.'
      },
      {
        instruction: 'Pour the ganache over the cooled cake and let it set before serving.'
      }
      // Add more instructions as needed
    ]
  },

    // Cake Recipe 1
  {
    title: 'Red Velvet Cake',
    slug: 'red-velvet-cake',
    author: 'elizabethrobinson@app.dev',
    description: 'Classic red velvet cake with cream cheese frosting and a hint of cocoa.',
    category: 'Cake',
    photo: '/assets/images/recipes_album/Red Velvet Cake.jpg',
    prep_time: '45-60',
    ingredients: [
      {
        material: 'All-purpose flour',
        elements: [
          {
            ingredient: 'Flour',
            quantity: '2 1/2',
            unit: 'cups'
          }
        ]
      },
      {
        material: 'Cocoa powder',
        elements: [
          {
            ingredient: 'Cocoa powder',
            quantity: '2',
            unit: 'tablespoons'
          }
        ]
      },
      {
        material: 'Buttermilk',
        elements: [
          {
            ingredient: 'Buttermilk',
            quantity: '1 1/2',
            unit: 'cups'
          }
        ]
      },
      {
        material: 'Unsalted butter',
        elements: [
          {
            ingredient: 'Unsalted butter',
            quantity: '1 1/2',
            unit: 'cups'
          }
        ]
      },
      {
        material: 'Cream cheese',
        elements: [
          {
            ingredient: 'Cream cheese',
            quantity: '8',
            unit: 'ounces'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Preheat your oven to 175°C.'
      },
      {
        instruction: 'In a large mixing bowl, sift together the flour and cocoa powder.'
      },
      {
        instruction: 'In a separate bowl, cream together the butter, sugar, and eggs until light and fluffy.'
      },
      {
        instruction: 'Gradually add the dry ingredients to the wet mixture and mix until well combined.'
      },
      {
        instruction: 'Add buttermilk and red food coloring, mixing until the batter is evenly colored.'
      },
      {
        instruction: 'Pour the batter into greased and floured cake pans.'
      },
      {
        instruction: 'Bake for 25-30 minutes or until a toothpick inserted into the center comes out clean.'
      },
      {
        instruction: 'While the cakes cool, beat cream cheese and powdered sugar to make the frosting.'
      },
      {
        instruction: 'Frost the cooled cakes and enjoy!'
      }
      // Add more instructions as needed
    ]
  },

  // Cake Recipe 2
  {
    title: 'Carrot Cake',
    slug: 'carrot-cake',
    author: 'marydavis@app.dev',
    description: 'Moist carrot cake with cream cheese frosting and chopped walnuts.',
    category: 'Cake',
    photo: '/assets/images/recipes_album/carrot cake.jpg',
    prep_time: '45-60',
    ingredients: [
      {
        material: 'All-purpose flour',
        elements: [
          {
            ingredient: 'Flour',
            quantity: '2',
            unit: 'cups'
          }
        ]
      },
      {
        material: 'Carrots',
        elements: [
          {
            ingredient: 'Carrots',
            quantity: '2',
            unit: 'cups, grated'
          }
        ]
      },
      {
        material: 'Unsalted butter',
        elements: [
          {
            ingredient: 'Unsalted butter',
            quantity: '1',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Cream cheese',
        elements: [
          {
            ingredient: 'Cream cheese',
            quantity: '8',
            unit: 'ounces'
          }
        ]
      },
      {
        material: 'Walnuts',
        elements: [
          {
            ingredient: 'Walnuts',
            quantity: '1/2',
            unit: 'cup, chopped'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Preheat your oven to 175°C.'
      },
      {
        instruction: 'In a large mixing bowl, combine flour, sugar, baking powder, and spices.'
      },
      {
        instruction: 'In a separate bowl, mix together eggs, oil, and grated carrots.'
      },
      {
        instruction: 'Gradually add the wet mixture to the dry mixture and mix until well combined.'
      },
      {
        instruction: 'Fold in chopped walnuts.'
      },
      {
        instruction: 'Pour the batter into a greased cake pan.'
      },
      {
        instruction: 'Bake for 30-35 minutes or until a toothpick inserted into the center comes out clean.'
      },
      {
        instruction: 'While the cake cools, beat cream cheese and powdered sugar to make the frosting.'
      },
      {
        instruction: 'Frost the cooled cake and garnish with additional walnuts.'
      }
      // Add more instructions as needed
    ]
  },

  // Cake Recipe 3
  {
    title: 'Lemon Cake',
    slug: 'lemon-cake',
    author: 'jennifergarcia@app.dev',
    description: 'Refreshing lemon cake with tangy lemon glaze and lemon zest.',
    category: 'Cake',
    photo: '/assets/images/recipes_album/lemon-cake.jpg',
    prep_time: '45-60',
    ingredients: [
      {
        material: 'All-purpose flour',
        elements: [
          {
            ingredient: 'Flour',
            quantity: '2',
            unit: 'cups'
          }
        ]
      },
      {
        material: 'Lemons',
        elements: [
          {
            ingredient: 'Lemons',
            quantity: '2',
            unit: 'pieces, zested and juiced'
          }
        ]
      },
      {
        material: 'Unsalted butter',
        elements: [
          {
            ingredient: 'Unsalted butter',
            quantity: '1',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Powdered sugar',
        elements: [
          {
            ingredient: 'Powdered sugar',
            quantity: '2',
            unit: 'cups'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Preheat your oven to 175°C.'
      },
      {
        instruction: 'In a large mixing bowl, cream together butter, sugar, and lemon zest.'
      },
      {
        instruction: 'Beat in eggs one at a time, then stir in lemon juice.'
      },
      {
        instruction: 'Gradually mix in the dry ingredients until just incorporated.'
      },
      {
        instruction: 'Pour the batter into a greased and floured cake pan.'
      },
      {
        instruction: 'Bake for 30-35 minutes or until a toothpick inserted into the center comes out clean.'
      },
      {
        instruction: 'While the cake is cooling, prepare the lemon glaze by mixing lemon juice and powdered sugar.'
      },
      {
        instruction: 'Drizzle the glaze over the cooled cake and let it set before serving.'
      }
      // Add more instructions as needed
    ]
  },

  // Cake Recipe 4
  {
    title: 'Strawberry Shortcake',
    slug: 'strawberry-shortcake',
    author: 'jennifergarcia@app.dev',
    description: 'Delicious strawberry shortcake with fresh berries and whipped cream.',
    category: 'Cake',
    photo: '/assets/images/recipes_album/Strawberry Shortcake.jpeg',
    prep_time: '45-60',
    ingredients: [
      {
        material: 'All-purpose flour',
        elements: [
          {
            ingredient: 'Flour',
            quantity: '2',
            unit: 'cups'
          }
        ]
      },
      {
        material: 'Strawberries',
        elements: [
          {
            ingredient: 'Strawberries',
            quantity: '1',
            unit: 'pound, hulled and sliced'
          }
        ]
      },
      {
        material: 'Whipped cream',
        elements: [
          {
            ingredient: 'Whipped cream',
            quantity: '2',
            unit: 'cups'
          }
        ]
      },
      {
        material: 'Vanilla extract',
        elements: [
          {
            ingredient: 'Vanilla extract',
            quantity: '1',
            unit: 'teaspoon'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Preheat your oven to 175°C.'
      },
      {
        instruction: 'In a large mixing bowl, combine flour, sugar, baking powder, and salt.'
      },
      {
        instruction: 'Cut in butter until the mixture resembles coarse crumbs.'
      },
      {
        instruction: 'Stir in milk and vanilla extract to form a dough.'
      },
      {
        instruction: 'Roll out the dough and cut into rounds.'
      },
      {
        instruction: 'Bake for 15-20 minutes or until golden brown.'
      },
      {
        instruction: 'Split the shortcakes, fill with sliced strawberries, and top with whipped cream.'
      },
      {
        instruction: 'Serve and enjoy!'
      }
      // Add more instructions as needed
    ]
  },

  //! Category: Chicken
  {
    title: 'Lemon Garlic Roasted Chicken',
    slug: 'lemon-garlic-roasted-chicken',
    author: 'josephturner@app.dev',
    description: 'Delicious lemon garlic roasted chicken with crispy skin.',
    category: 'Chicken',
    photo: '/assets/images/recipes_album/Lemon Garlic Roasted Chicken.jpeg',
    prep_time: '45-60',
    ingredients: [
      {
        material: 'Whole Chicken',
        elements: [
          {
            ingredient: 'Whole Chicken',
            quantity: '1',
            unit: 'piece'
          }
        ]
      },
      {
        material: 'Lemon',
        elements: [
          {
            ingredient: 'Lemon',
            quantity: '2',
            unit: 'pieces'
          }
        ]
      },
      {
        material: 'Garlic',
        elements: [
          {
            ingredient: 'Garlic cloves',
            quantity: '6',
            unit: 'cloves'
          }
        ]
      },
      {
        material: 'Olive Oil',
        elements: [
          {
            ingredient: 'Olive Oil',
            quantity: '2',
            unit: 'tbsp'
          }
        ]
      },
      {
        material: 'Fresh Rosemary',
        elements: [
          {
            ingredient: 'Fresh Rosemary',
            quantity: '2',
            unit: 'sprigs'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Preheat the oven to 375°F (190°C).'
      },
      {
        instruction: 'Rub the chicken with olive oil, salt, and pepper.'
      },
      {
        instruction: 'Place lemon halves and garlic inside the chicken cavity.'
      },
      {
        instruction: 'Roast for 1 hour or until the skin is crispy and golden brown.'
      },
      {
        instruction: 'Garnish with fresh rosemary before serving.'
      }
      // Add more instructions as needed
    ]
  },

  {
    title: 'Honey Mustard Chicken',
    slug: 'honey-mustard-chicken',
    author: 'josephturner@app.dev',
    description: 'Tender honey mustard chicken with a sweet and tangy glaze.',
    category: 'Chicken',
    photo: '/assets/images/recipes_album/Honey Mustard Chicken.jpeg',
    prep_time: '30-45',
    ingredients: [
      {
        material: 'Chicken Breasts',
        elements: [
          {
            ingredient: 'Chicken breasts',
            quantity: '4',
            unit: 'pieces'
          }
        ]
      },
      {
        material: 'Honey',
        elements: [
          {
            ingredient: 'Honey',
            quantity: '1/4',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Dijon Mustard',
        elements: [
          {
            ingredient: 'Dijon mustard',
            quantity: '2',
            unit: 'tbsp'
          }
        ]
      },
      {
        material: 'Garlic Powder',
        elements: [
          {
            ingredient: 'Garlic powder',
            quantity: '1',
            unit: 'tsp'
          }
        ]
      },
      {
        material: 'Paprika',
        elements: [
          {
            ingredient: 'Paprika',
            quantity: '1',
            unit: 'tsp'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Preheat your oven to 375°F (190°C).'
      },
      {
        instruction: 'In a small bowl, whisk together honey, Dijon mustard, garlic powder, and paprika.'
      },
      {
        instruction: 'Season chicken breasts with salt and pepper.'
      },
      {
        instruction: 'Brush the honey mustard mixture over the chicken.'
      },
      {
        instruction: 'Bake for 25-30 minutes or until the chicken is cooked through.'
      },
      {
        instruction: 'Serve with extra sauce for dipping.'
      }
      // Add more instructions as needed
    ]
  },
  
  // Chicken Recipe 2
  {
    title: 'Teriyaki Chicken Stir-Fry',
    slug: 'teriyaki-chicken-stir-fry',
    author: 'jamesbrown@app.dev',
    description: 'Savory teriyaki chicken stir-fry with colorful vegetables and rice.',
    category: 'Chicken',
    photo: '/assets/images/recipes_album/Teriyaki Chicken Stir-Fry.jpg',
    prep_time: '30-45',
    ingredients: [
      {
        material: 'Chicken Thighs',
        elements: [
          {
            ingredient: 'Chicken thighs',
            quantity: '4',
            unit: 'pieces, boneless and skinless'
          }
        ]
      },
      {
        material: 'Teriyaki Sauce',
        elements: [
          {
            ingredient: 'Teriyaki sauce',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Soy Sauce',
        elements: [
          {
            ingredient: 'Soy sauce',
            quantity: '2',
            unit: 'tbsp'
          }
        ]
      },
      {
        material: 'Mixed Vegetables',
        elements: [
          {
            ingredient: 'Mixed vegetables',
            quantity: '3',
            unit: 'cups, sliced'
          }
        ]
      },
      {
        material: 'Cooked Rice',
        elements: [
          {
            ingredient: 'Cooked rice',
            quantity: '2',
            unit: 'cups'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'In a bowl, combine teriyaki sauce and soy sauce.'
      },
      {
        instruction: 'Slice chicken thighs into bite-sized pieces.'
      },
      {
        instruction: 'In a large skillet, stir-fry chicken until no longer pink.'
      },
      {
        instruction: 'Add mixed vegetables and continue to stir-fry until tender.'
      },
      {
        instruction: 'Pour the teriyaki sauce mixture over the chicken and veggies.'
      },
      {
        instruction: 'Serve the stir-fry over cooked rice.'
      }
      // Add more instructions as needed
    ]
  },

  //! Category: Meat
  {
    title: 'Filet Mignon Steak',
    slug: 'filet-mignon-steak',
    author: 'jamesbrown@app.dev',
    description: 'Tender filet mignon steak cooked to perfection.',
    category: 'Meat',
    photo: '/assets/images/recipes_album/Filet Mignon Steak.jpg',
    prep_time: '20-30',
    ingredients: [
      {
        material: 'Filet Mignon Steaks',
        elements: [
          {
            ingredient: 'Filet Mignon Steaks',
            quantity: '2',
            unit: 'pieces'
          }
        ]
      },
      {
        material: 'Butter',
        elements: [
          {
            ingredient: 'Butter',
            quantity: '2',
            unit: 'tbsp'
          }
        ]
      },
      {
        material: 'Garlic',
        elements: [
          {
            ingredient: 'Garlic cloves',
            quantity: '3',
            unit: 'cloves'
          }
        ]
      },
      {
        material: 'Thyme',
        elements: [
          {
            ingredient: 'Fresh Thyme',
            quantity: '2',
            unit: 'sprigs'
          }
        ]
      },
      {
        material: 'Salt',
        elements: [
          {
            ingredient: 'Salt',
            quantity: '1',
            unit: 'tsp'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Season the steaks with salt and pepper.'
      },
      {
        instruction: 'Heat butter in a skillet and add minced garlic and thyme.'
      },
      {
        instruction: 'Sear the steaks for 4-5 minutes on each side for medium-rare.'
      },
      {
        instruction: 'Rest for a few minutes before serving.'
      }
      // Add more instructions as needed
    ]
  },

    // Meat Recipe 1
  {
    title: 'Beef Stroganoff',
    slug: 'beef-stroganoff',
    author: 'jessicayoung@app.dev',
    description: 'Creamy beef stroganoff with tender strips of beef and mushrooms.',
    category: 'Meat',
    photo: '/assets/images/recipes_album/Beef Stroganoff.jpeg',
    prep_time: '30-45',
    ingredients: [
      {
        material: 'Beef Sirloin',
        elements: [
          {
            ingredient: 'Beef sirloin',
            quantity: '1',
            unit: 'pound, thinly sliced'
          }
        ]
      },
      {
        material: 'Mushrooms',
        elements: [
          {
            ingredient: 'Mushrooms',
            quantity: '8',
            unit: 'ounces, sliced'
          }
        ]
      },
      {
        material: 'Onion',
        elements: [
          {
            ingredient: 'Onion',
            quantity: '1',
            unit: 'medium, finely chopped'
          }
        ]
      },
      {
        material: 'Sour Cream',
        elements: [
          {
            ingredient: 'Sour cream',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Paprika',
        elements: [
          {
            ingredient: 'Paprika',
            quantity: '1',
            unit: 'tbsp'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'In a large skillet, cook beef until browned. Remove and set aside.'
      },
      {
        instruction: 'In the same skillet, sauté onions and mushrooms until tender.'
      },
      {
        instruction: 'Return beef to the skillet and stir in sour cream and paprika.'
      },
      {
        instruction: 'Simmer for a few minutes until heated through.'
      },
      {
        instruction: 'Serve over cooked egg noodles or rice.'
      }
      // Add more instructions as needed
    ]
  },

  // Meat Recipe 2
  {
    title: 'Balsamic Glazed Pork Chops',
    slug: 'balsamic-glazed-pork-chops',
    author: 'lindamartinez@app.dev',
    description: 'Juicy pork chops with a sweet and tangy balsamic glaze.',
    category: 'Meat',
    photo: '/assets/images/recipes_album/Balsamic Glazed Pork Chops.jpg',
    prep_time: '30-45',
    ingredients: [
      {
        material: 'Pork Chops',
        elements: [
          {
            ingredient: 'Pork chops',
            quantity: '4',
            unit: 'pieces'
          }
        ]
      },
      {
        material: 'Balsamic Vinegar',
        elements: [
          {
            ingredient: 'Balsamic vinegar',
            quantity: '1/4',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Honey',
        elements: [
          {
            ingredient: 'Honey',
            quantity: '2',
            unit: 'tbsp'
          }
        ]
      },
      {
        material: 'Rosemary',
        elements: [
          {
            ingredient: 'Fresh rosemary',
            quantity: '2',
            unit: 'sprigs'
          }
        ]
      },
      {
        material: 'Garlic',
        elements: [
          {
            ingredient: 'Garlic cloves',
            quantity: '4',
            unit: 'cloves, minced'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Season pork chops with salt, pepper, and minced garlic.'
      },
      {
        instruction: 'In a bowl, whisk together balsamic vinegar, honey, and rosemary.'
      },
      {
        instruction: 'Grill or pan-fry pork chops until cooked, brushing with the glaze.'
      },
      {
        instruction: 'Serve with extra glaze drizzled on top.'
      }
      // Add more instructions as needed
    ]
  },

  // Meat Recipe 3
  {
    title: 'Lamb Kebabs',
    slug: 'lamb-kebabs',
    author: 'williamclark@app.dev',
    description: 'Delicious grilled lamb kebabs with a blend of spices and herbs.',
    category: 'Meat',
    photo: '/assets/images/recipes_album/Lamb Kebabs.png',
    prep_time: '45-60',
    ingredients: [
      {
        material: 'Lamb',
        elements: [
          {
            ingredient: 'Boneless lamb cubes',
            quantity: '1',
            unit: 'pound'
          }
        ]
      },
      {
        material: 'Yogurt',
        elements: [
          {
            ingredient: 'Greek yogurt',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Spices',
        elements: [
          {
            ingredient: 'Ground cumin',
            quantity: '1',
            unit: 'tsp'
          },
          {
            ingredient: 'Paprika',
            quantity: '1',
            unit: 'tsp'
          },
          {
            ingredient: 'Ground coriander',
            quantity: '1/2',
            unit: 'tsp'
          },
          {
            ingredient: 'Cayenne pepper',
            quantity: '1/4',
            unit: 'tsp'
          }
        ]
      },
      {
        material: 'Fresh Mint',
        elements: [
          {
            ingredient: 'Fresh mint leaves',
            quantity: '2',
            unit: 'tbsp, chopped'
          }
        ]
      },
      {
        material: 'Red Onion',
        elements: [
          {
            ingredient: 'Red onion',
            quantity: '1',
            unit: 'medium, diced'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'In a bowl, mix together yogurt, spices, and chopped mint.'
      },
      {
        instruction: 'Add lamb cubes to the marinade and refrigerate for at least 30 minutes.'
      },
      {
        instruction: 'Thread marinated lamb onto skewers, alternating with diced red onion.'
      },
      {
        instruction: 'Grill kebabs until lamb is cooked and slightly charred.'
      },
      {
        instruction: 'Serve with pita bread and a yogurt sauce.'
      }
      // Add more instructions as needed
    ]
  },

  //! Category: Pastries
  {
    title: 'Croissant',
    slug: 'croissant',
    author: 'williamclark@app.dev',
    description: 'Homemade flaky and buttery croissants.',
    category: 'Pastries',
    photo: '/assets/images/recipes_album/croissant.jpg',
    prep_time: '60-100',
    ingredients: [
      {
        material: 'All-Purpose Flour',
        elements: [
          {
            ingredient: 'All-Purpose Flour',
            quantity: '4',
            unit: 'cups'
          }
        ]
      },
      {
        material: 'Butter',
        elements: [
          {
            ingredient: 'Unsalted Butter',
            quantity: '1',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Yeast',
        elements: [
          {
            ingredient: 'Active Dry Yeast',
            quantity: '2',
            unit: 'tsp'
          }
        ]
      },
      {
        material: 'Milk',
        elements: [
          {
            ingredient: 'Milk',
            quantity: '1',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Salt',
        elements: [
          {
            ingredient: 'Salt',
            quantity: '1',
            unit: 'tsp'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Mix yeast and warm milk, then add flour and salt to make the dough.'
      },
      {
        instruction: 'Roll out the dough and fold in layers with butter.'
      },
      {
        instruction: 'Chill the dough and repeat folding several times.'
      },
      {
        instruction: 'Shape into croissants and bake at 375°F (190°C) until golden brown.'
      },
      {
        instruction: 'Enjoy your homemade croissants!'
      }
      // Add more instructions as needed
    ]
  },

  //! Category: Burger
  {
    title: 'Classic Beef Burger',
    slug: 'classic-beef-burger',
    author: 'robertwilson@app.dev',
    description: 'Juicy classic beef burger with all the fixings.',
    category: 'Burger',
    photo: '/assets/images/recipes_album/beef burger.jpeg',
    prep_time: '30-45',
    ingredients: [
      {
        material: 'Ground Beef',
        elements: [
          {
            ingredient: 'Ground Beef',
            quantity: '1',
            unit: 'lb'
          }
        ]
      },
      {
        material: 'Burger Buns',
        elements: [
          {
            ingredient: 'Burger Buns',
            quantity: '4',
            unit: 'pieces'
          }
        ]
      },
      {
        material: 'Cheese',
        elements: [
          {
            ingredient: 'Cheddar Cheese',
            quantity: '4',
            unit: 'slices'
          }
        ]
      },
      {
        material: 'Lettuce',
        elements: [
          {
            ingredient: 'Lettuce Leaves',
            quantity: '4',
            unit: 'leaves'
          }
        ]
      },
      {
        material: 'Tomato',
        elements: [
          {
            ingredient: 'Tomato',
            quantity: '4',
            unit: 'slices'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Form beef into patties and season with salt and pepper.'
      },
      {
        instruction: 'Cook patties on a grill or stovetop until desired doneness.'
      },
      {
        instruction: 'Place cheese on patties to melt.'
      },
      {
        instruction: 'Assemble burgers with buns, lettuce, tomato, and condiments.'
      },
      {
        instruction: 'Serve hot and enjoy your classic beef burger!'
      }
      // Add more instructions as needed
    ]
  },

  //! Category: Desserts
  {
    title: 'Chocolate Lava Cake',
    slug: 'chocolate-lava-cake',
    author: 'robertwilson@app.dev',
    description: 'Indulgent chocolate lava cake with a gooey center.',
    category: 'Desserts',
    photo: '/assets/images/recipes_album/Chocolate Lava Cake.jpg',
    prep_time: '30-45',
    ingredients: [
      {
        material: 'Chocolate',
        elements: [
          {
            ingredient: 'Dark Chocolate',
            quantity: '200',
            unit: 'g'
          }
        ]
      },
      {
        material: 'Butter',
        elements: [
          {
            ingredient: 'Unsalted Butter',
            quantity: '100',
            unit: 'g'
          }
        ]
      },
      {
        material: 'Eggs',
        elements: [
          {
            ingredient: 'Eggs',
            quantity: '2',
            unit: 'pieces'
          }
        ]
      },
      {
        material: 'Sugar',
        elements: [
          {
            ingredient: 'Granulated Sugar',
            quantity: '50',
            unit: 'g'
          }
        ]
      },
      {
        material: 'Flour',
        elements: [
          {
            ingredient: 'All-Purpose Flour',
            quantity: '30',
            unit: 'g'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Preheat the oven to 425°F (220°C).'
      },
      {
        instruction: 'Melt chocolate and butter together.'
      },
      {
        instruction: 'Beat eggs and sugar until light and fluffy.'
      },
      {
        instruction: 'Fold in melted chocolate mixture and flour.'
      },
      {
        instruction: 'Divide batter into ramekins and bake for 12-14 minutes.'
      },
      {
        instruction: 'Serve warm with a scoop of vanilla ice cream.'
      }
      // Add more instructions as needed
    ]
  },

  // Dessert Recipe 1
  {
    title: 'Classic Tiramisu',
    slug: 'classic-tiramisu',
    author: 'josephturner@app.dev',
    description: 'A classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
    category: 'Desserts',
    photo: '/assets/images/recipes_album/tiramisu.jpg',
    prep_time: '45-60',
    ingredients: [
      {
        material: 'Ladyfingers',
        elements: [
          {
            ingredient: 'Ladyfingers',
            quantity: '24',
            unit: 'pieces'
          }
        ]
      },
      {
        material: 'Mascarpone Cheese',
        elements: [
          {
            ingredient: 'Mascarpone cheese',
            quantity: '16',
            unit: 'oz'
          }
        ]
      },
      {
        material: 'Espresso Coffee',
        elements: [
          {
            ingredient: 'Strong brewed espresso',
            quantity: '1',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Cocoa Powder',
        elements: [
          {
            ingredient: 'Cocoa powder',
            quantity: '2',
            unit: 'tbsp'
          }
        ]
      },
      {
        material: 'Kahlúa (optional)',
        elements: [
          {
            ingredient: 'Kahlúa liqueur',
            quantity: '2',
            unit: 'tbsp (optional)'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Dip ladyfingers in espresso and layer them in a serving dish.'
      },
      {
        instruction: 'In a bowl, mix mascarpone cheese and Kahlúa (if using).'
      },
      {
        instruction: 'Spread half of the mascarpone mixture over the ladyfingers.'
      },
      {
        instruction: 'Repeat with another layer of dipped ladyfingers and mascarpone.'
      },
      {
        instruction: 'Chill for a few hours, then dust with cocoa powder before serving.'
      }
      // Add more instructions as needed
    ]
  },

  // Dessert Recipe 2
  {
    title: 'Fruit Salad with Honey-Lime Dressing',
    slug: 'fruit-salad-honey-lime-dressing',
    author: 'josephturner@app.dev',
    description: 'A refreshing fruit salad with a zesty honey-lime dressing.',
    category: 'Desserts',
    photo: '/assets/images/recipes_album/Fruit Salad with Honey-Lime Dressing.jpg',
    prep_time: '15-30',
    ingredients: [
      {
        material: 'Assorted Fruits',
        elements: [
          {
            ingredient: 'Strawberries',
            quantity: '1',
            unit: 'cup, sliced'
          },
          {
            ingredient: 'Blueberries',
            quantity: '1/2',
            unit: 'cup'
          },
          {
            ingredient: 'Kiwi',
            quantity: '2',
            unit: 'pieces, peeled and sliced'
          },
          {
            ingredient: 'Pineapple',
            quantity: '1',
            unit: 'cup, diced'
          },
          {
            ingredient: 'Mango',
            quantity: '1',
            unit: 'cup, diced'
          }
        ]
      },
      {
        material: 'Honey-Lime Dressing',
        elements: [
          {
            ingredient: 'Honey',
            quantity: '2',
            unit: 'tbsp'
          },
          {
            ingredient: 'Lime juice',
            quantity: '2',
            unit: 'tbsp'
          },
          {
            ingredient: 'Fresh mint leaves',
            quantity: '2',
            unit: 'tbsp, chopped'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'In a large bowl, combine all the assorted fruits.'
      },
      {
        instruction: 'In a separate small bowl, whisk together honey and lime juice.'
      },
      {
        instruction: 'Drizzle the honey-lime dressing over the fruit salad.'
      },
      {
        instruction: 'Toss gently to coat, garnish with fresh mint, and chill before serving.'
      }
      // Add more instructions as needed
    ]
  },

  // Dessert Recipe 3
  {
    title: 'Banana Bread',
    slug: 'banana-bread',
    author: 'patriciahernandez@app.dev',
    description: 'Homemade banana bread with ripe bananas and a hint of cinnamon.',
    category: 'Desserts',
    photo: '/assets/images/recipes_album/Banana Bread.jpg',
    prep_time: '45-60',
    ingredients: [
      {
        material: 'Bananas',
        elements: [
          {
            ingredient: 'Ripe bananas',
            quantity: '3',
            unit: 'pieces, mashed'
          }
        ]
      },
      {
        material: 'Flour',
        elements: [
          {
            ingredient: 'All-purpose flour',
            quantity: '1 1/2',
            unit: 'cups'
          }
        ]
      },
      {
        material: 'Sugar',
        elements: [
          {
            ingredient: 'Granulated sugar',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Eggs',
        elements: [
          {
            ingredient: 'Eggs',
            quantity: '2',
            unit: 'pieces'
          }
        ]
      },
      {
        material: 'Cinnamon',
        elements: [
          {
            ingredient: 'Ground cinnamon',
            quantity: '1',
            unit: 'tsp'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Preheat your oven to 350°F (175°C).'
      },
      {
        instruction: 'In a mixing bowl, cream together sugar and eggs.'
      },
      {
        instruction: 'Add mashed bananas and mix well.'
      },
      {
        instruction: 'Stir in flour and cinnamon until just combined.'
      },
      {
        instruction: 'Pour batter into a greased loaf pan and bake for 60 minutes.'
      },
      {
        instruction: 'Cool before slicing and serving.'
      }
      // Add more instructions as needed
    ]
  },

  // Dessert Recipe 4
  {
    title: 'Lemon Bars',
    slug: 'lemon-bars',
    author: 'patriciahernandez@app.dev',
    description: 'Tangy and sweet lemon bars with a buttery crust.',
    category: 'Desserts',
    photo: '/assets/images/recipes_album/Lemon Bars.jpeg',
    prep_time: '30-45',
    ingredients: [
      {
        material: 'For the Crust',
        elements: [
          {
            ingredient: 'All-purpose flour',
            quantity: '1 1/2',
            unit: 'cups'
          },
          {
            ingredient: 'Confectioners\' sugar',
            quantity: '1/2',
            unit: 'cup'
          },
          {
            ingredient: 'Unsalted butter',
            quantity: '3/4',
            unit: 'cup, chilled'
          }
        ]
      },
      {
        material: 'For the Filling',
        elements: [
          {
            ingredient: 'Eggs',
            quantity: '3',
            unit: 'pieces'
          },
          {
            ingredient: 'Granulated sugar',
            quantity: '1 1/2',
            unit: 'cups'
          },
          {
            ingredient: 'All-purpose flour',
            quantity: '1/4',
            unit: 'cup'
          },
          {
            ingredient: 'Fresh lemon juice',
            quantity: '1/2',
            unit: 'cup'
          },
          {
            ingredient: 'Lemon zest',
            quantity: '2',
            unit: 'tsp'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Preheat your oven to 350°F (175°C).'
      },
      {
        instruction: 'In a bowl, mix together flour, confectioners\' sugar, and chilled butter.'
      },
      {
        instruction: 'Press the mixture into a greased baking dish to form the crust.'
      },
      {
        instruction: 'Bake the crust for 20 minutes.'
      },
      {
        instruction: 'In a separate bowl, whisk together eggs, sugar, flour, lemon juice, and lemon zest.'
      },
      {
        instruction: 'Pour the lemon mixture over the baked crust and bake for an additional 25 minutes.'
      },
      {
        instruction: 'Cool, then dust with confectioners\' sugar and cut into bars.'
      }
      // Add more instructions as needed
    ]
  },

  //! Category: Breakfast
  {
    title: 'Avocado Toast',
    slug: 'avocado-toast',
    author: 'patriciahernandez@app.dev',
    description: 'Healthy and delicious avocado toast for breakfast.',
    category: 'Breakfast',
    photo: '/assets/images/recipes_album/Avocado Toast.jpg',
    prep_time: '10-20',
    ingredients: [
      {
        material: 'Avocado',
        elements: [
          {
            ingredient: 'Avocado',
            quantity: '2',
            unit: 'pieces'
          }
        ]
      },
      {
        material: 'Bread',
        elements: [
          {
            ingredient: 'Whole Wheat Bread',
            quantity: '2',
            unit: 'slices'
          }
        ]
      },
      {
        material: 'Lemon Juice',
        elements: [
          {
            ingredient: 'Lemon Juice',
            quantity: '1',
            unit: 'tbsp'
          }
        ]
      },
      {
        material: 'Salt',
        elements: [
          {
            ingredient: 'Salt',
            quantity: '1/4',
            unit: 'tsp'
          }
        ]
      },
      {
        material: 'Cherry Tomatoes',
        elements: [
          {
            ingredient: 'Cherry Tomatoes',
            quantity: '6',
            unit: 'pieces'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Toast bread until crispy.'
      },
      {
        instruction: 'Mash avocado with lemon juice and salt.'
      },
      {
        instruction: 'Spread avocado mixture on toasted bread.'
      },
      {
        instruction: 'Top with sliced cherry tomatoes.'
      },
      {
        instruction: 'Enjoy your healthy avocado toast!'
      }
      // Add more instructions as needed
    ]
  },

  // Breakfast Recipe 1
  {
    title: 'Classic Pancakes',
    slug: 'classic-pancakes',
    author: 'elizabethrobinson@app.dev',
    description: 'Fluffy and delicious classic pancakes for a perfect morning breakfast.',
    category: 'Pancakes',
    photo: '/assets/images/recipes_album/pancakes.jpg',
    prep_time: '20-30',
    ingredients: [
      {
        material: 'Flour',
        elements: [
          {
            ingredient: 'All-purpose flour',
            quantity: '1',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Milk',
        elements: [
          {
            ingredient: 'Milk',
            quantity: '1',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Eggs',
        elements: [
          {
            ingredient: 'Eggs',
            quantity: '2',
            unit: 'pieces'
          }
        ]
      },
      {
        material: 'Sugar',
        elements: [
          {
            ingredient: 'Granulated sugar',
            quantity: '2',
            unit: 'tbsp'
          }
        ]
      },
      {
        material: 'Baking Powder',
        elements: [
          {
            ingredient: 'Baking powder',
            quantity: '2',
            unit: 'tsp'
          }
        ]
      },
      {
        material: 'Vanilla Extract',
        elements: [
          {
            ingredient: 'Vanilla extract',
            quantity: '1',
            unit: 'tsp'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'In a mixing bowl, whisk together flour, sugar, and baking powder.'
      },
      {
        instruction: 'In another bowl, whisk eggs, milk, and vanilla extract.'
      },
      {
        instruction: 'Combine wet and dry ingredients and mix until smooth.'
      },
      {
        instruction: 'Heat a non-stick skillet and pour batter to make pancakes.'
      },
      {
        instruction: 'Cook until bubbles form, then flip and cook until golden brown.'
      },
      {
        instruction: 'Serve with your favorite toppings.'
      }
      // Add more instructions as needed
    ]
  },

  // Breakfast Recipe 2
  {
    title: 'Greek Yogurt Parfait',
    slug: 'greek-yogurt-parfait',
    author: 'davidjohnson@app.dev',
    description: 'A healthy and delicious Greek yogurt parfait with fresh fruits and granola.',
    category: 'Breakfast',
    photo: '/assets/images/recipes_album/Greek Yogurt Parfait.jpg',
    prep_time: '10-20',
    ingredients: [
      {
        material: 'Greek Yogurt',
        elements: [
          {
            ingredient: 'Greek yogurt',
            quantity: '1',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Strawberries',
        elements: [
          {
            ingredient: 'Strawberries',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Blueberries',
        elements: [
          {
            ingredient: 'Blueberries',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Honey',
        elements: [
          {
            ingredient: 'Honey',
            quantity: '2',
            unit: 'tbsp'
          }
        ]
      },
      {
        material: 'Granola',
        elements: [
          {
            ingredient: 'Granola',
            quantity: '1/4',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Almonds',
        elements: [
          {
            ingredient: 'Sliced almonds',
            quantity: '2',
            unit: 'tbsp'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'In a serving glass, layer Greek yogurt at the bottom.'
      },
      {
        instruction: 'Add a layer of sliced strawberries and blueberries.'
      },
      {
        instruction: 'Drizzle honey over the fruits.'
      },
      {
        instruction: 'Top with granola and sliced almonds.'
      },
      {
        instruction: 'Repeat layers if desired.'
      },
      {
        instruction: 'Serve immediately or refrigerate for later.'
      }
      // Add more instructions as needed
    ]
  },

  // Breakfast Recipe 3
  {
    title: 'Egg and Cheese Breakfast Burrito',
    slug: 'egg-cheese-breakfast-burrito',
    author: 'michaelsmith@app.dev',
    description: 'A quick and savory breakfast burrito filled with eggs, cheese, and veggies.',
    category: 'Breakfast',
    photo: '/assets/images/recipes_album/Egg and Cheese Breakfast Burrito.jpg',
    prep_time: '20-30',
    ingredients: [
      {
        material: 'Eggs',
        elements: [
          {
            ingredient: 'Eggs',
            quantity: '4',
            unit: 'pieces'
          }
        ]
      },
      {
        material: 'Tortilla Wraps',
        elements: [
          {
            ingredient: 'Flour tortilla wraps',
            quantity: '4',
            unit: 'pieces'
          }
        ]
      },
      {
        material: 'Cheddar Cheese',
        elements: [
          {
            ingredient: 'Cheddar cheese',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Bell Peppers',
        elements: [
          {
            ingredient: 'Red bell pepper',
            quantity: '1/2',
            unit: 'piece'
          },
          {
            ingredient: 'Green bell pepper',
            quantity: '1/2',
            unit: 'piece'
          }
        ]
      },
      {
        material: 'Onion',
        elements: [
          {
            ingredient: 'Onion',
            quantity: '1/4',
            unit: 'piece'
          }
        ]
      },
      {
        material: 'Salt and Pepper',
        elements: [
          {
            ingredient: 'Salt',
            quantity: '1/4',
            unit: 'tsp'
          },
          {
            ingredient: 'Black pepper',
            quantity: '1/4',
            unit: 'tsp'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'In a skillet, sauté diced bell peppers and onions until soft.'
      },
      {
        instruction: 'Beat eggs and pour into the skillet with veggies.'
      },
      {
        instruction: 'Cook until the eggs are scrambled and fully cooked.'
      },
      {
        instruction: 'Warm tortilla wraps in a separate pan.'
      },
      {
        instruction: 'Place scrambled eggs and shredded cheddar cheese on each tortilla.'
      },
      {
        instruction: 'Season with salt and pepper.'
      },
      {
        instruction: 'Roll up the tortillas into burritos.'
      },
      {
        instruction: 'Serve hot and enjoy!'
      }
      // Add more instructions as needed
    ]
  },

  //! Category: Sandwiches
  {
    title: 'Club Sandwich',
    slug: 'club-sandwich',
    author: 'michaelsmith@app.dev',
    description: 'Classic club sandwich with turkey, bacon, and more.',
    category: 'Sandwiches',
    photo: '/assets/images/recipes_album/Club Sandwich.jpg',
    prep_time: '20-30',
    ingredients: [
      {
        material: 'Turkey',
        elements: [
          {
            ingredient: 'Sliced Turkey',
            quantity: '6',
            unit: 'slices'
          }
        ]
      },
      {
        material: 'Bacon',
        elements: [
          {
            ingredient: 'Bacon Strips',
            quantity: '4',
            unit: 'strips'
          }
        ]
      },
      {
        material: 'Lettuce',
        elements: [
          {
            ingredient: 'Lettuce Leaves',
            quantity: '4',
            unit: 'leaves'
          }
        ]
      },
      {
        material: 'Tomato',
        elements: [
          {
            ingredient: 'Tomato Slices',
            quantity: '4',
            unit: 'slices'
          }
        ]
      },
      {
        material: 'Mayonnaise',
        elements: [
          {
            ingredient: 'Mayonnaise',
            quantity: '2',
            unit: 'tbsp'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Toast bread slices until golden brown.'
      },
      {
        instruction: 'Spread mayonnaise on one side of each bread slice.'
      },
      {
        instruction: 'Layer turkey, bacon, lettuce, and tomato between slices.'
      },
      {
        instruction: 'Secure with toothpicks and cut into halves.'
      },
      {
        instruction: 'Enjoy your classic club sandwich!'
      }
      // Add more instructions as needed
    ]
  },

  // Sandwich Recipe 1
  {
    title: 'Caprese Panini',
    slug: 'caprese-panini',
    author: 'marydavis@app.dev',
    description: 'A flavorful Caprese panini with fresh mozzarella, tomatoes, and basil.',
    category: 'Sandwiches',
    photo: '/assets/images/recipes_album/Caprese Panini.jpeg',
    prep_time: '15-20',
    ingredients: [
      {
        material: 'Ciabatta Bread',
        elements: [
          {
            ingredient: 'Ciabatta bread',
            quantity: '2',
            unit: 'slices'
          }
        ]
      },
      {
        material: 'Fresh Mozzarella',
        elements: [
          {
            ingredient: 'Fresh mozzarella',
            quantity: '4',
            unit: 'slices'
          }
        ]
      },
      {
        material: 'Tomato',
        elements: [
          {
            ingredient: 'Tomato slices',
            quantity: '4',
            unit: 'slices'
          }
        ]
      },
      {
        material: 'Fresh Basil',
        elements: [
          {
            ingredient: 'Fresh basil leaves',
            quantity: '4',
            unit: 'leaves'
          }
        ]
      },
      {
        material: 'Balsamic Glaze',
        elements: [
          {
            ingredient: 'Balsamic glaze',
            quantity: '2',
            unit: 'tbsp'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Slice the Ciabatta bread in half.'
      },
      {
        instruction: 'Layer fresh mozzarella, tomato slices, and basil leaves on one half.'
      },
      {
        instruction: 'Drizzle with balsamic glaze.'
      },
      {
        instruction: 'Cover with the other half of the bread.'
      },
      {
        instruction: 'Heat in a panini press until cheese melts and bread is crispy.'
      },
      {
        instruction: 'Cut in halves and serve.'
      }
      // Add more instructions as needed
    ]
  },

  // Sandwich Recipe 2
  {
    title: 'BBQ Pulled Pork Sandwich',
    slug: 'bbq-pulled-pork-sandwich',
    author: 'karenturner@app.dev',
    description: 'Savory BBQ pulled pork sandwich with coleslaw on a bun.',
    category: 'Sandwiches',
    photo: '/assets/images/recipes_album/BBQ Pulled Pork Sandwich.jpg',
    prep_time: '4-6 hours',
    ingredients: [
      {
        material: 'Pulled Pork',
        elements: [
          {
            ingredient: 'Pulled pork',
            quantity: '2',
            unit: 'cups'
          }
        ]
      },
      {
        material: 'Burger Buns',
        elements: [
          {
            ingredient: 'Burger buns',
            quantity: '4',
            unit: 'pieces'
          }
        ]
      },
      {
        material: 'BBQ Sauce',
        elements: [
          {
            ingredient: 'BBQ sauce',
            quantity: '1/2',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Coleslaw',
        elements: [
          {
            ingredient: 'Coleslaw',
            quantity: '1',
            unit: 'cup'
          }
        ]
      },
      {
        material: 'Pickles',
        elements: [
          {
            ingredient: 'Dill pickles',
            quantity: '4',
            unit: 'slices'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Warm pulled pork with BBQ sauce in a saucepan.'
      },
      {
        instruction: 'Split burger buns and toast them.'
      },
      {
        instruction: 'Layer pulled pork, coleslaw, and pickles on the bun.'
      },
      {
        instruction: 'Serve hot with extra BBQ sauce.'
      }
      // Add more instructions as needed
    ]
  },

  // Sandwich Recipe 3
  {
    title: 'Mediterranean Veggie Wrap',
    slug: 'mediterranean-veggie-wrap',
    author: 'jennifergarcia@app.dev',
    description: 'A healthy Mediterranean veggie wrap with hummus and fresh veggies.',
    category: 'Sandwiches',
    photo: '/assets/images/recipes_album/Mediterranean Veggie Wrap.jpg',
    prep_time: '15-20',
    ingredients: [
      {
        material: 'Whole Wheat Tortilla',
        elements: [
          {
            ingredient: 'Whole wheat tortilla',
            quantity: '1',
            unit: 'piece'
          }
        ]
      },
      {
        material: 'Hummus',
        elements: [
          {
            ingredient: 'Hummus',
            quantity: '2',
            unit: 'tbsp'
          }
        ]
      },
      {
        material: 'Cucumber',
        elements: [
          {
            ingredient: 'Cucumber',
            quantity: '1/2',
            unit: 'piece'
          }
        ]
      },
      {
        material: 'Red Bell Pepper',
        elements: [
          {
            ingredient: 'Red bell pepper',
            quantity: '1/2',
            unit: 'piece'
          }
        ]
      },
      {
        material: 'Kalamata Olives',
        elements: [
          {
            ingredient: 'Kalamata olives',
            quantity: '6',
            unit: 'pieces'
          }
        ]
      }
      // Add more ingredients as needed
    ],
    instructions: [
      {
        instruction: 'Spread hummus on the whole wheat tortilla.'
      },
      {
        instruction: 'Slice cucumber, red bell pepper, and kalamata olives.'
      },
      {
        instruction: 'Layer the sliced veggies on the tortilla.'
      },
      {
        instruction: 'Roll up the tortilla and slice in half.'
      },
      {
        instruction: 'Serve as a healthy Mediterranean wrap.'
      }
      // Add more instructions as needed
    ]
  }

]