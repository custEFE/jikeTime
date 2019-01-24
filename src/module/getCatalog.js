
import Crawl from './Crawl'
import {createdFolder,getCookies} from './../util/util'
import {resolve} from 'path'
import {fork} from 'child_process'
import Rp from 'request-promise-native'

const GetCatalog = async (Page,browser) => {
    const cookies = await Page.cookies()
    const cookie = await getCookies(cookies)
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

    const childFork = fork('./startCrawling.js',['abc'])
    childFork.on('message',msg=>{
        console.log(msg)
    })
    // console.log(data)
    // Page.on('requestfinished',async res=>{
    //     if (res.url() === `https://time.geekbang.org/serv/v1/my/products/all`){
    //         const response = await res.response()
    //         const JSON_DATA = await response.json()
    //         const curriculums =  JSON_DATA.data[0].list
    //         const request = response.request()


    //         // 列表页的ID /column/132 
    //         // await createdFolder(resolve(__diranme,'./../../html'))
    //         console.log(cookie)
    //         // await Crawl(Page,browser,curriculums[0].extra.column_id)
    //         // // curriculums.forEach(v => {
    //         // //     console.log(v.extra.column_id)
    //         // // });
    //       }
    // })
}
export default GetCatalog