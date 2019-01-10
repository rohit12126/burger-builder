import axios from 'axios';

export default function sendRequest(url, data,token, done) {
   return axios.post('https://jsonplaceholder.typicode.com/'+url, data)
    .then(function (response) {
        return response;
    })
    .catch(function (error) {
        return error;
    });
    
    
  
};