const express = require('express')
const cors = require('cors')
const app = express();

//跨域中间件
app.use(cors())

//请求体中间件
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//test1路由，响应get请求，不接参数，返回结果
app.get('/test1',(req,res)=>{
    console.log('有人请求test1了');
    res.send('我是test1返回的一些数据')
})
//test2路由，响应get请求，接query参数，返回结果
app.get('/test2', (req, res) => {
    console.log('有人请求test2了，请求携带的query参数是',req.query);
    res.send('我是test2返回的一些数据')
})

//test3路由，响应get请求，接params参数，返回结果
app.get('/test3/:name/:age/:sex', (req, res) => {
    console.log('有人请求test3了，请求携带的params参数是', req.params);
    res.send('我是test3返回的一些数据')
})

//test4路由，响应post请求，接query参数，返回结果
app.post('/test4', (req, res) => {
    console.log('有人请求test4了，请求携带的query参数是', req.query);
    res.send('我是test4返回的一些数据')
})

//test5路由，响应post请求，接params参数，返回结果
app.post('/test5/:name/:age/:sex', (req, res) => {
    console.log('有人请求test5了，请求携带的params参数是', req.params);
    res.send('我是test5返回的一些数据')
})

//test6路由，响应post请求，接请求体参数，返回结果
app.post('/test6', (req, res) => {
    console.log('有人请求test6了，请求携带的请求体参数是', req.body);
    res.send('我是test6返回的一些数据')
})

//test7路由，响应post请求，接query参数、params参数、请求体参数，返回结果
app.post('/test7/:age', (req, res) => {
    console.log('有人请求test7了，请求携带的query参数是', req.query);
    console.log('有人请求test7了，请求携带的params参数是', req.params);
    console.log('有人请求test7了，请求携带的请求体参数是', req.body);
    res.send({ ...req.query, ...req.params, ...req.body})
})

app.listen(8080,(err)=>{
    if (!err) console.log('测试服务器开启成功');
    
})