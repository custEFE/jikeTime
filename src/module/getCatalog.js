import {ACCOUNT,DOMAIN,PASSWORD} from './../config/env'

const GetCatalog =  async Page => {
    Page.on('requestfinished',res=>{
        console.log(typeof res.url())
        if (res.url() === `https://time.geekbang.org/serv/v1/my/products/all`){
            const response = res.response()
            console.log(response.json())
          }
    })
    // console.log(Page.url())
}
export default GetCatalog