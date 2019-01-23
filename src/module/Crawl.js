import {ACCOUNT,COLUMO_DOMAIN,PASSWORD} from './../config/env'
import {writeHTML,screenOutHTML} from './../util/util'
import {resolve} from 'path'
import Cheerio from 'cheerio'
import {replace} from 'lodash'
const pages = []
let i=0;
import axios from 'axios'

const Crawl = async (Page,browser,ID)=>{
    const newPage = await browser.newPage();
    await newPage.goto(`${COLUMO_DOMAIN}/column/${ID}`,{waitUnil:'load '});
    await newPage.waitFor(1500);
    await newPage.click('.article-item',{options :{
        button :'middle'
    }})
    await newPage.waitForNavigation()
    await newPage.waitFor(3000);

    await getHtml(newPage)
}

const getHtml = async newPage=>{
    if (pages.indexOf(newPage.url())===-1){
        pages.push(newPage.url())
        i++;
    }else{
        newPage.close()
        return false;
    }
    const html = await newPage.$eval('html',e=>e.outerHTML)
    const $ = Cheerio.load(html)
    let fileName = $('.article-title').text().replace('|','-')
    fileName = fileName.replace(/\s*/g,'')
    await writeHTML(resolve(__dirname,`./../html/${fileName}.html`),screenOutHTML(html))
    await newPage.click('.btn',{options :{
        button :'middle'
    }})
    await newPage.waitFor(3000);
    getHtml(newPage)
}
export default Crawl