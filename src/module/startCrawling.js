import Rp from 'request-promise-native'

process.on('message', function(msg){
    if (msg ==='start'){
        process.send('readyStart')
    }else {
        run(msg)
    }
});
// 留个坑，下次解决
const run = data=>{
    const parentProcessData = JSON.parse(data)
    const requestFun = parentProcessData.ids.map(v=>{
        const options = {
            uri:'https://time.geekbang.org/serv/v1/article',
            body:{
                "id":v,
                include_neighbors:true
            },
            headers:parentProcessData.headers,
            json:true
        }
        return Rp(options)
    })
    Promise.all(requestFun).then(res=>{
        console.log(res)
        process.send('close')
    })
}