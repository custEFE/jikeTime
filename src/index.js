import '@babel/polyfill'
import {resolve} from 'path'
import Puppeteer from 'puppeteer'
import Login from './module/login'
import GetCatalog from './module/getCatalog'

(async ()=>{
    const browser  = await Puppeteer.launch({
        executablePath:resolve(__dirname,'./../chrome-win/chrome.exe'),
        headless :false
    })
    const Page = await browser.newPage();
    await Login(Page)
    await GetCatalog(Page,browser)
})()
