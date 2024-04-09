import { useSelector } from "react-redux";
import { useState } from "react";
import { useGetRecipesQuery } from "../redux/API/api";
import CreateRecipe from "./CreacteRecipe";
import Item from "./Item";
import style from "../styles/Main.module.css";

const userId = 1;

export default function Home() {
  const [search, setSearch] = useState("");

  const { data } = useGetRecipesQuery(undefined, {
    skip: !userId,
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  let filteredData = "";

  if (data) {
    filteredData = data.filter(
      (item) =>
        item.brand.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())
    );
    
  }
  return (
    <div className="App">
      <input
        placeholder="Search..."
        className={style.search}
        onChange={handleChange}
      />

      <CreateRecipe />

      <div className={style.content}>
        {data ? 
          filteredData.length>0 ?
          filteredData.map((item) => <Item key={item.id} item={item} />):
          <h3 style={{ margin: "7vw auto" }}>Not found...</h3>
         : 
          <h3 style={{ margin: "7vw auto" }}>Loading...</h3>
        }
      </div>
    </div>
  );
}
