import {ACCOUNT,COLUMO_DOMAIN,PASSWORD} from './../config/env'
import {writeHTML,screenOutHTML} from './../util/util'
import {resolve} from 'path'
import Cheerio from 'cheerio'
import {replace} from 'lodash'

const Crawl = async (Page,browser,ID)=>{
    const newPage = await browser.newPage();
    await newPage.goto(`${COLUMO_DOMAIN}/column/${ID}`,{waitUnil:'load '});
    await newPage.click('.article-item',{options :{
        button :'middle'
    }})
    await newPage.waitForNavigation()
    await newPage.waitFor(3000); // I'm waiting just for safe side 
    // 清理数据
    const html = await newPage.$eval('html',e=>e.outerHTML)
    const $ = Cheerio.load(html)
    let fileName = $('.article-title').text().replace('|','-')
    fileName = fileName.replace(/\s*/g,'')
    await writeHTML(resolve(__dirname,`./../html/${fileName}.html`),screenOutHTML(html))
    await newPage.click('.btn',{options :{
        button :'middle'
    }})

    // Crawl()
}
export default Crawl