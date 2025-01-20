

function IngredientList(props) {
    const IngredientListItem = props.ingredients.map(ingredient => <p key={ingredient}>{ingredient}</p>)

    return (
        <section className='recipe-container'>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{IngredientListItem}</ul>
            {props.ingredients.length > 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.onClick}>Get a recipe</button>
            </div>}
        </section>
    );
}


export default IngredientList;