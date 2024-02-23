import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import MenuInteface from "../../interface/menuInterface";

function Menu() {
  const menu:MenuInteface[] = useLoaderData() as MenuInteface[];
  return (
    <ul>
      {menu.map((pizza:MenuInteface) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
