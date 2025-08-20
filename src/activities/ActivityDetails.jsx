import { useParams } from "react-router";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router";

export function ActivityDetails() {
  const { id } = useParams();
  const { data } = useQuery(`/activities/${id}`, ["activities"]);
  const { token } = useAuth();
  const {
    mutate: deleteActivity,
    loading: deleteLoading,
    error: deleteError,
  } = useMutation("DELETE", "/activities/" + id, ["activities"]);
  const navigate = useNavigate();

  return (
    <>
      <h3>{data?.name}</h3>
      <p>{data?.description}</p>
      <h4>Created by: {data?.creatorName}</h4>
      {token && (
        <button
          onClick={() => {
            deleteActivity();
            navigate("/");
          }}
        >
          {deleteLoading ? "Deleting" : deleteError ? deleteError : "Delete"}
        </button>
      )}
    </>
  );
}
