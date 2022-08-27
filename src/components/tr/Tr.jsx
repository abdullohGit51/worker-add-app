import React, { useState } from "react";
import { AiOutlineDelete, AiFillEdit } from "react-icons/ai";
// import Edit from "../Edit";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { addWorker} from "../../redux/workerSlice"
function Tr({ id, ism, jins, maosh }) {
  const dispatch=useDispatch()
  const workers=useSelector(state=>state.workers.workers)
  const navigate = useNavigate();
  const handleDelete = () => {
    const filtred = workers.filter((item) => item.id !== id);
    if (filtred) dispatch(addWorker(filtred))
  };
  const handleEdit = (e) => {
    e.preventDefault();
    navigate(`/edit/${id}`);
  };
  return (
    <>
      <td>{id}</td>
      <td>{ism}</td>
      <td> {jins}</td>
      <td>{maosh}</td>
      <td>
        <button>
          <AiFillEdit onClick={handleEdit} />
        </button>

        <button onClick={handleDelete}>
          <AiOutlineDelete />
        </button>
      </td>
    </>
  );
}

export default Tr;
