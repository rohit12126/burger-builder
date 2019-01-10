import axios from 'axios';
export default function getRequest(url, data,token, done) {
   return axios.get('https://jsonplaceholder.typicode.com/'+url)
   .then(function (response) {
     return response;
   })
   .catch(function (error) {
     return error;
   });
};