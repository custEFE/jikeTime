import {ACCOUNT,COLUMO_DOMAIN,PASSWORD} from './../config/env'

const Crawl = async (Page,browser,ID)=>{
    const newPage = await browser.newPage();
    // console.log(`${COLUMO_DOMAIN}/column/${ID}`)
    await newPage.goto(`${COLUMO_DOMAIN}/column/${ID}`);
    newPage.click('.article-item',{options :{
        button :'middle'
    }})
}
export default Crawl