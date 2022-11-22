import { useState } from "react";

function Food() {
  const [food, setFood] = useState("");
  const [recipe, setRecipe] = useState([]);

  const getFood = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}`
    );



    const data = await api.json();
    console.log(data.recipes);
    setRecipe(data.recipes)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getFood();
  }

  return (
    <div className="food">
      <h1>Welcome </h1>
      <form className="food-searchForm" onSubmit={onSubmit}>
        <input
          className="food-input"
          type="text"
          placeholder=""
          value={food}
          onChange={(e) => setFood(e.target.value)}
        />
        <input className="food-submit" type="submit" value="Search" />
      </form>

      <div>
        <div>
          {recipe.map((recipes) => {
            return (
              <li className="recipe-title">
                <p>{recipes.title}</p>
                <img src={recipes.image} alt={recipes.title} />
                <h2>{recipes.instructions}</h2>
              </li>
            )
          })}

        </div>
      </div>
    </div>
  );
}

export default Food;
