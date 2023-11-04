const parse = require('csv-parse')
const fs = require('fs')
// import {parse} from 'csv-parse'
//  import { createReadStream } from 'node:fs'
const results = []



fs.createReadStream('kepler_data.csv')
.pipe(parse({
    comment : '#',
    columns : true
}))
.on('data', (data)=> {
results.push(data)
})
.on('error',(err)=>{
    console.log(err)
})
.on('end',()=> {
    console.log(results)
    console.log('end')
})
// fs.createReadStream('kepler_data.csv')
// .pipe(parse({
//     comment: '#',
//     columns : true
// }))
// .on('data', (data) => {
//     results.push(data);
// })
// .on('error',(err)=> {
//     console.log(err)
// })
// .on('end', ()=> {
//     console.log(results)
//     console.log('done')
// })





// parse()