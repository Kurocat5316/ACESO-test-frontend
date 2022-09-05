import axios from "axios";

const path = "http://localhost:8081/api/schedule";
export async function getAllSchedule(){
    const result = axios.get(path);
    return result;
}

export async function getScheduleByDay(day){
    const result = axios.get(`${path}/${day}`);
    return result;
}