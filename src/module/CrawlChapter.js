const CrawlChapter = ()=>{
    await newPage.click('.article-item',{options :{
        button :'middle'
    }})
    await newPage.waitForNavigation()
    await newPage.waitFor(3000);
    if (pages.indexOf(newPage.url)===-1){
        pages.push(newPage.url)
    }else{
        return false;
    }
    // // 清理数据
    const html = await newPage.$eval('html',e=>e.outerHTML)
    const $ = Cheerio.load(html)
    let fileName = $('.article-title').text().replace('|','-')
    fileName = fileName.replace(/\s*/g,'')
    await writeHTML(resolve(__dirname,`./../html/${fileName}.html`),screenOutHTML(html))
    newPage.close()
}