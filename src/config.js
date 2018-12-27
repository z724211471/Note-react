import axios from 'axios'
import Qs from "qs";

let url=process.env.NODE_ENV==='development'? 'http://127.0.0.1:9000' : 'http://noteapi.czyyy.top';
var Http = axios.create({
    baseURL: url,
    transformRequest: [
      function (data) {
        return Qs.stringify(data);;
      }
    ],
    withCredentials: true,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
export{
    Http,
}
