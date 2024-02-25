import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function Username() {
  const username = useSelector<RootState,string>((store)=>store.user.username)
  return <div className="hidden text-sm font-semibold md:block">{username}</div>;
}

export default Username;
