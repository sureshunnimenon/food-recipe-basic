import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import keys from './config/keys';
import Recipe from './Recipe'

const App = () =>  {
  
  // const [counter,setCounter] = useState(0)
  const [ recipes, setRecipes ] = useState([])
  const [ search, setSearch ] = useState("")

  // finished text for search
  const [ query, setQuery ] = useState('chicken')

  const url = `https://api.edamam.com/search?q=${query}&app_id=${keys.API_ID}&app_key=${keys.API_KEY}`
  
  
  useEffect(() => {
    // console.log('hook in action- effect has been run')
    const getRecipes = async  () => {
      const response = await fetch(url)
      const data = await response.json()
      // console.log(data)
      setRecipes(data.hits)
      console.log(data.hits)
    }
    // above is to avoid 'missing dependency warning'
    getRecipes()
    // eslint-disable-next-line
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }  

  const submitSearch = (e) => {
    e.preventDefault();
    setQuery(search)
    setSearch("")
  }

  return (
    <div className="App">
      Hello from 'under construction app'
      <form onSubmit={submitSearch} className ="searchForm">
        <input className="searchBar" type="text" value={search} onChange = {updateSearch}/>
        <button className = "searchBtn" type="submit" > Search </button>
      </form>
      <div className="recipe">
      {recipes.map((recipe) => (
        <Recipe key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        img={recipe.recipe.image} 
        ingredients = {recipe.recipe.ingredients} />
      ))}
      </div>
      {/* <h2 onClick={() => setCounter(coun ter+1) }>
        {counter}
      </h2> */}
    </div>
  );
}

export default App;
