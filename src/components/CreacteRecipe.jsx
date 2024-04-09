import { useState } from "react";
import { useCreateRecipeMutation } from "../redux/API/recipe.api";
import style from "../styles/Item.module.css";

export default function CreateRecipe() {

  const defaultCategory = "sedan";

  const defaultValue = {
    id: null,
    brand: "",
    category: defaultCategory,
    photos: "",
  };

  const [recipe, setResipe] = useState(defaultValue);

  const [creacteRecipe] = useCreateRecipeMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    creacteRecipe(recipe).then(() => {
      setResipe(defaultValue);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      Add your car:
      <div className={style.row}>
        
          <input
            type="text"
            placeholder="Brand"
            value={recipe.brand}
            onChange={(e) => setResipe({ ...recipe, brand: e.target.value })}
          />
        

        
          <select
            value={recipe.category}
            onChange={(e) => setResipe({ ...recipe, category: e.target.value })}
          >
            <option value="sedan">sedan</option>
            <option value="coupe">coupe</option>
            <option value="pickup">pickup</option>
            <option value="hatchback">hatchback</option>
            <option value="universal">universal</option>
          </select>
        

        
          <input
            type="text"
            placeholder="Link to the photo"
            value={recipe.photos}
            onChange={(e) =>
              setResipe({
                ...recipe,
                photos: recipe.photos.concat(e.target.value),
              })
            }
          />
        
      </div>
      <button type="submit" className={style.createButton}>
        Create
      </button>
    </form>
  );
}
