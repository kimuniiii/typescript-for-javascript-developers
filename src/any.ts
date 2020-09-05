// 外部モジュール
import axios from 'axios';

export {};

let url : string = "http://udemy-utils.herokuapp.com/api/v1/articles?token=token123"

console.log(axios.get);

axios.get(url)
  .then(function (response) {
    interface Article {
      id : number;
      title : string;
      description : string;
    }
    let data : Article[];
    data = response.data
    console.log(data);
  })