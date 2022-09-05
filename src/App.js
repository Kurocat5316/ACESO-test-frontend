import './App.css';
import { getAllSchedule, getScheduleByDay } from './api/schedule/schedule';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });

  useEffect(() => {
    const fetchAllSchedule = async () => {
      setLoading(true)
      const result = await getAllSchedule();
      setSchedule(result.data);
      setLoading(false);
    };
    fetchAllSchedule();
  }, [])

  const onChangeHandler = async (event) => {
    const query = event.target.value;
    setLoading(true)
    const result = await getScheduleByDay(query);
    setSchedule(result.data);
    setLoading(false);
  }

  if (loading)
    return (
      <div className="scene">
        <div className="plane">
          <div className="cube cube--0">
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
          </div>
          <div className="shadow shadow--0"></div>
          <div className="cube cube--1">
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
          </div>
          <div className="shadow shadow--1"></div>
          <div className="cube cube--2">
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
          </div>
          <div className="shadow shadow--2"></div>
          <div className="cube cube--3">
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
          </div>
          <div className="shadow shadow--3"></div>
          <div className="cube cube--4">
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
          </div>
          <div className="shadow shadow--4"></div>
          <div className="cube cube--5">
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
          </div>
          <div className="shadow shadow--5"></div>
          <div className="cube cube--6">
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
          </div>
          <div className="shadow shadow--6"></div>
          <div className="cube cube--7">
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
            <div className="cube__side"></div>
          </div>
          <div className="shadow shadow--7"></div>
        </div>
      </div>
    );

  return (
    <div className="App">
      <h1>Schedule</h1>
      <div className="tb1-container">
        <div class="custom-select" onChange={onChangeHandler}>
          <select>
            <option value="">All</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday"</option>
          </select>
        </div>
        <div className="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>Day</th>
                <th>Activity</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              {
                Object.entries(schedule).map(([key, value]) => {
                  if(value.length === 0) return null;
                  return (
                  <tr>
                    <td>{key}</td>
                    <td>{value.join(", ")} </td>
                  </tr>
                )})
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
