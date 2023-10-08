import React, { useState } from "react";

function RecipeView({ recipe, deleteRecipe, onEditRecipe }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editRow, setEditRow] = useState({
    name: recipe.name,
    cuisine: recipe.cuisine,
    photo: recipe.photo,
    rating: recipe.rating,
    ingredients: recipe.ingredients,
    preparation: recipe.preparation
  })

  function handleRecipeUpdate(updatedRecipe) {
    setIsEditing(false);
    onEditRecipe(updatedRecipe)
  }

  function handleChange(e) {
    setEditRow({
    ...editRow,
    [e.target.name]: e.target.value
    })
  }

  // started work on edit button
  // https://dev.to/fromwentzitcame/working-with-tables-in-react-how-to-render-and-edit-fetched-data-5fl5

  return (
      <tr>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td><img src={recipe.photo} alt={recipe.photo} /></td>
        <td className="content_td"><p contentEditable>{recipe.ingredients}</p></td>
        <td className="content_td"><p>{recipe.preparation}</p></td>
        <td>
          <button name="delete" onClick={deleteRecipe}>
            Delete
          </button>
        </td>
      </tr>
  );
}

export default RecipeView;
