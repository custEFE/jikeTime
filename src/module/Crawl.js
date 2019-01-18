import {ACCOUNT,COLUMO_DOMAIN,PASSWORD} from './../config/env'

const Crawl = async (Page,browser,ID)=>{
    const newPage = await browser.newPage();
    await newPage.goto(`${COLUMO_DOMAIN}/column/${ID}`);
    await newPage.click('.article-item',{options :{
        button :'middle'
    }})
    // 清理数据
    const $HTML_el = newPage.$('html')
    const html = $HTML_el.outerHTML()

}
export default Crawl