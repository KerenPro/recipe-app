import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe/Recipe";
import './App.css';

function App() {

const APP_ID = '515e1ec2';
const APP_KEY = '4aa842d9247f8305175b336cc9989844';

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('chicken');

useEffect( () => {
  getRecipes();
}, [query])

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
}

const handleSearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
}

  return (
    <div className="App">
        <form className="search-form" onSubmit={getSearch} >
            <input className="search-bar" type="text" value={search} onChange={handleSearch}/>
            <button className="search-button" type="submit">Search</button>
        </form>
      {recipes.map(recipe =>(
        <Recipe 
        key = {recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} />
      ))}
    </div>
  );
}

export default App;
