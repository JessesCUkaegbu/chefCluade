import './App.css';
import { useState } from 'react';
import Header from './components/header'
import Clauderecipe from './components/ClaudeRecipe';
import IngredientList from './components/IngredientList';
import { getRecipeFromMistral } from './components/api';



function App() {

  const [ingredients, setingredients] = useState([])

  const [recipe, setRecipe] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const ingredientItem = formData.get("ingredient")
    setingredients(prevIngredient => [...prevIngredient, ingredientItem])

  }
  async function showRecipe () {
    const generatedRecipe = await getRecipeFromMistral(ingredients)
    setRecipe(generatedRecipe) 
  }

  return (
      <>
      <Header />
      <form onSubmit={handleSubmit} className='add-ingredient-form'>
        <input
        type='text'
        placeholder='e.g orange'
        name="ingredient"
         />
        <button>Add Ingredient</button>
      </form>
      {/* <ul className='itemList'>
          {IngredientListItem}
      </ul> */}
      {recipe && <Clauderecipe recipe={recipe} />}

      {ingredients.length > 0 && 
        <IngredientList ingredients={ingredients} 
        onClick={showRecipe}
      />}
      </>
  );
}

export default App;
