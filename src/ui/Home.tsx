import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import { RootState } from "../store/store";
import Button from "./Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const username = useSelector<RootState, string>(
    (state) => state.user.username
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (username.length > 0) {
      navigate("/menu");
    }
  }, [username, navigate]);

  return (
    <div className="my-10 px-4 text-center sm:my-16 ">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Start Ordering
        </Button>
      )}
    </div>
  );
}

export default Home;
