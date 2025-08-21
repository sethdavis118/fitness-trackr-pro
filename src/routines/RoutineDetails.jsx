import { useParams } from "react-router";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router";

export function RoutineDetails() {
  const { id } = useParams();
  const { data } = useQuery(`/routines/${id}`, ["routines"]);
  const { token } = useAuth();
  const {
    mutate: deleteRoutine,
    loading: deleteLoading,
    error: deleteError,
  } = useMutation("DELETE", "/routines/" + id, ["routines"]);
  const navigate = useNavigate();

  return (
    <>
      <h3>{data?.name}</h3>
      <p>{data?.goal}</p>
      <h4>Created by: {data?.creatorName}</h4>
      {token && (
        <button
          onClick={() => {
            deleteRoutine();
          }}
        >
          {deleteLoading ? "Deleting" : deleteError ? deleteError : "Delete"}
        </button>
      )}
    </>
  );
}
