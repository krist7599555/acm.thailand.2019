import axios from 'axios';
// import { map } from 'lodash';
// import escapeJSON from 'escape-json-node';

const req = axios.create({
  baseURL: 'https://krist7599555.ml/acm'
});

// function toJson(str) {
//   let strVals = str.match(/(?<=":")([^:]+?)(?="(?=,|}|]))/g);
//   strVals.forEach(strVal => {
//     let newVal = strVal.replace(/\("|“|”\)/g, '\\"');
//     str = str.replace(strVal, newVal);
//   });
//   return JSON.parse(str);
// }

export async function slides() {
  const res = await req.get('/slideorder_reorder.json').then(r => {
    return r.data;
  });
  return res.map(o => {
    if (o.type == 'people') {
      o.data = o.data.map(p => {
        p.img = `https://krist7599555.ml/acm/${p.filename}`;
        // console.log(p);
        return p;
      });
    }
    return o;
  });
}
