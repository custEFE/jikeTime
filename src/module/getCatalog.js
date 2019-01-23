
import Crawl from './Crawl'
import {createdFolder} from './../util/util'
import {resolve} from 'path'
const GetCatalog = (Page,browser) => {
    Page.on('requestfinished',async res=>{
        if (res.url() === `https://time.geekbang.org/serv/v1/my/products/all`){
            const response = await res.response()
            const JSON_DATA = await response.json()
            const curriculums =  JSON_DATA.data[0].list
            const request = response.request()
            // 列表页的ID /column/132 
            // await createdFolder(resolve(__diranme,'./../../html'))
            await Crawl(Page,browser,curriculums[0].extra.column_id)
            // // curriculums.forEach(v => {
            // //     console.log(v.extra.column_id)
            // // });
          }
    })
}
export default GetCatalog