const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

export const fetchCocktails = async (searchTerm) => { 
    try {   
        const response = await fetch(`${apiUrl}/search.php?s=${searchTerm}`);
        const data = await response.json();
        return data.drinks || [];
    }
    catch (error) {
        console.error('Error fetching cocktails:', error);
        return [];
    }
};

export const fetchCocktailById = async (id) => {
    try {
        const response = await fetch(`${apiUrl}/lookup.php?i=${id}`); 
        const data = await response.json();
        return data.drinks ? data.drinks[0] : null;
    }
    catch (error) {
        console.error('Error fetching cocktail by ID:', error);
        return null;
    }
};


export const fetchCocktailByName = async (name) => {
    try {
        const response = await fetch(`${apiUrl}/search.php?s=${name}`); 
        const data = await response.json();
        return data.drinks ? data.drinks[0] : null;
    }
    catch (error) {
        console.error('Error fetching cocktail by Name:', error);
        return null;
    }
};

// categorias 
export const fetchCategories = async () => {
    try {
        const response = await fetch(`${apiUrl}/list.php?c=list`);
        const data = await response.json();
        return data.drinks || [];
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};

export const fetchByLetter = async (letter) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
  const data = await response.json();
  return data.drinks;
};

// categoria especifica
export const fetchDrinksByCategory = async (category) => {
    try {
        const response = await fetch(`${apiUrl}/filter.php?c=${category}`);
        const data = await response.json();
        return data.drinks || [];
    } catch (error) {
        console.error(`Error fetching drinks in category ${category}:`, error);
        return [];
    }
};

// A -Z 
export const fetchDrinksByFirstLetter = async (letter) => {
    try {
        const response = await fetch(`${apiUrl}/search.php?f=${letter}`);
        const data = await response.json();
        return data.drinks || [];
    } catch (error) {
        console.error(`Error fetching drinks by letter ${letter}:`, error);
        return [];
    }
};




// Transforma  em um array limpo de ingredientes
export const getIngredientsList = (drink) => {
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const ingredient = drink[`strIngredient${i}`];
        const measure = drink[`strMeasure${i}`];

        if (ingredient) {
            ingredients.push({
                name: ingredient,
                measure: measure ? measure : '' //  nao tem medida
            });
        } else {
            break; 
        }
    }
    return ingredients;
};