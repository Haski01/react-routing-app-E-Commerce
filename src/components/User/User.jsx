import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1 className="text-center text-3xl p-4 bg-red-300 text-black">
        User Id: {userId}
      </h1>
    </div>
  );
}

export default User;
