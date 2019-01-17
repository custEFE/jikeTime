import '@babel/polyfill'
import './config/env'
import {resolve} from 'path'
import Puppeteer from 'puppeteer'
(async ()=>{
    const browser  = await Puppeteer.launch({
        executablePath:resolve(__dirname,'./../chrome-win/chrome.exe'),
        headless :false
    })
    const Page =await browser.newPage()
    await Page.goto('https://account.geekbang.org/signin')
    const html = Page.$('.forget');
    console.log(html)
    await console.log(process.env.PASSWORD)
})()
