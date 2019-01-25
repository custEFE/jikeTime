
import Crawl from './Crawl'
import {createdFolder,getCookies} from './../util/util'
import {resolve} from 'path'
import {fork} from 'child_process'
import Rp from 'request-promise-native'
import Os from 'os'

const cpuNum = Os.cpus().length
const articlesURL = 'https://time.geekbang.org/serv/v1/column/articles'

const GetCatalog = async (Page,browser) => {
    const cookies = await Page.cookies()
    const cookie = await getCookies(cookies)
    let childRps = []
    // options
    const options = {
        uri:'https://time.geekbang.org/serv/v1/my/products/all',
        headers:{
            Cookie:cookie,
            Referer:"https://account.geekbang.org/dashboard/buy"
        },
        json:true
    }
    const res = await Rp(options)
    let data;
    if (res.data.length!==0){
        data = res.data[0]
    }
    data.request = options
    childRps = data.list.map(v=>{
        const options = {
            uri:articlesURL,
            body:{
                "cid":v.extra.column_id,
                "size":90,
                "prev":0,
                "order":"newest",
                "sample":true
            },
            headers:{
                Cookie:cookie,
                Referer:"https://account.geekbang.org/dashboard/buy"
            },
            json:true
        }
        return Rp(options)
    })

    const listRes = await Promise.all(childRps)
    const ids = listRes.map(v=>{
        const ids = []
        for (let i=0;i<v.data.list.length;i++){
            const item = v.data.list[i]
            ids.push(item.id)
        }
        return ids
    })
    const childData = {
        ids:ids[0],
        headers:options.headers
    }
    run(JSON.stringify(childData))
}

const run = data=>{
    const childFork = fork(resolve(__dirname,'./startCrawling.js'))

    childFork.on('message',msg=>{
        if (msg === 'readyStart'){
            childFork.send(data)
        }else if (msg === 'close'){
            childFork.close()
            console.log('关闭子进程')
        }
    })
    childFork.send('start')
}

export default GetCatalog