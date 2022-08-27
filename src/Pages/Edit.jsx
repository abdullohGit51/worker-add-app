import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setEditWorker } from "../redux/workerSlice";
import "./Edit.css"
function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const workers = useSelector((state) => state.workers.workers);
  const chosen = workers?.find((item) => item.id === Number(id));
  const [ism, setIsm] = useState(chosen.ism);
  const [jins, setJins] = useState(chosen.jins);
  const [maosh, setMaosh] = useState(chosen.maosh);
  const dispatch = useDispatch();
  const handleEdit = (e) => {
    e.preventDefault();
    // console.log(typeof id);
    // console.log(typeof workers[0].id);
    const newWorker = workers.map((obj) => {
      if (obj.id === Number(id)) {
        return { ...obj, ism, jins, maosh };
      } else {
        return obj;
      }
    });
    dispatch(setEditWorker(newWorker));
    navigate("/");
  };
  return (
    <div className="edit">
      <form action="" onSubmit={handleEdit}>
        <input
          value={ism && ism}
          onChange={(e) => setIsm(e.target.value)}
          type="text"
          placeholder="ism"
          className="ism_inp"
        />
        <br />
        <label
        htmlFor="jins"
          value={jins && jins}
          name="jins"
          onChange={(e) => setJins(e.target.value)}
        >
          Jinsingiz:
          <input type="radio" checked   name="jins" />

          Erkak
          <input type="radio" name="jins" />
          Ayol
        </label>

        <br />
        <select
          value={maosh && maosh}
          onChange={(e) => setMaosh(e.target.value)}
          name=""
          id=""
        >
          <option value="1000">1000</option>
          <option value="2000">2000</option>
          <option value="3000">3000</option>
          <option value="4000">4000</option>
          <option value="5000">5000</option>
          <option value="6000">6000</option>
          <option value="7000">7000</option>
          <option value="8000">8000</option>
          <option value="9000">9000</option>
          <option value="10000">10000</option>
        </select>
        <br />
        <button type="submit">edit</button>
      </form>
    </div>
  );
}

export default Edit;
