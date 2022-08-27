import React, { useState } from "react";
import "./HomePage.css";
import { useSelector,useDispatch } from "react-redux";
// import { useAddWorkMutation, useWorksQuery } from "../../services/WorkersApi";
import Tr from "../../components/tr/Tr";
import { addWorker} from "../../redux/workerSlice"
const btns = [
  { buttonText: 1, index: 0 },
  { buttonText: 2, index: 5 },
  { buttonText: 3, index: 10 },
  { buttonText: 4, index: 15 },
  { buttonText: 5, index: 20 },
];
function HomePage() {
 
  const workers=useSelector(state=>state.workers.workers)
  const dispatch=useDispatch()
  // const [workers, setworkers] = useState([]);
  const [count, setCount] = useState("");
  const [ism, setIsm] = useState("");
  const [jins, setJins] = useState("");
  const [maosh, setMaosh] = useState("");
  let sliceArr = workers.length > 0 ? workers.slice(count, count + 5) : [];
  const son = Math.ceil(workers.length / 2);
  const buttons = new Array(son).fill({ button: son, index: (son - 1) * 5 });



  const handleSumbit = (e) => {
    e.preventDefault();

    const newperson = {
      ism,
      jins,
      maosh,
      id: workers.length + 1,
    };
    dispatch(addWorker(newperson))

  };
  return (
    <div className="homePage">
      <form action="" onSubmit={handleSumbit}>
        <input
          onChange={(e) => setIsm(e.target.value)}
          type="text"
          placeholder="ism"
          className="ism_inp"
        />
        <br />
        <label name="jinsingiz" onChange={(e) => setJins(e.target.value)}>
          Jinsingiz:
          <input type="radio" name="jins" value="Erkak" />
          Erkak
          <input type="radio" name="jins" value="Ayol" />
          Ayol
        </label>

        <br />
        <select onChange={(e) => setMaosh(e.target.value)} name="" id="">
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
        <button type="submit">submit</button>
      </form>
      {/* ////////// */}
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>ism</th>
            <th>Jinsi</th>
            <th>Maoshi</th>
            <th>edit delet</th>
          </tr>
        </thead>
        <tbody>
          {sliceArr.length > 0 &&
            sliceArr.map((item) => (
              <tr key={item.id}>
                <Tr {...item} />
              </tr>
            ))}
        </tbody>
      </table>
      <div className="pagination">
        {btns.map((item, index) => (
          <button key={index} onClick={() => setCount(item.index)}>
            {item.buttonText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
