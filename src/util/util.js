
// import Spinner from './../config/ora'
import Fs from 'fs'
import Cheerio from 'cheerio'
// export const setOra = (color='yellow',text = '执行中')=>{
//     Spinner.color  = color
//     Spinner.text = text
// }

// export const successOra = (text='成功')=>{
//     Spinner.succeed(text)
// }

export const writeHTML = (...rest)=>{
    return new Promise((resolve,reject)=>{
        Fs.writeFile(...rest,err=>{
            if (err){
                reject(err)
            }else{
                resolve()
            }
        })
    })
}
export const createdFolder = (folderPath)=>{
    return new Promise((resolve,reject)=>{
        Fs.stats(folderPath,(err,stats)=>{
            if (stats.isFile()){
                resolve()
            }else{
                Fs.mkdir(folderPath,err=>{
                    if (err) reject(err)
                    resolve()
                })
            }
        })

    })
}

export const screenOutHTML = (html)=>{
    const $ = Cheerio.load(html,{
        decodeEntities:false
    })
    $('script').remove()
    $('.wrapper').attr('style','opacity:1;')
    $('.mini-audio-player').remove()
    $('.copyright').remove()
    $('.to-comment').remove()
    $('.article-comments').remove()
    $('.article-info').remove()
    $('.breadcrumb').remove()
    $('switch-btns').remove()
    return $.html()
}

export const getCookies = ckObjs =>{
    let cookie; 
    return new Promise((resolve,reject)=>{
        if (ckObjs.length>0){
            cookie = ckObjs.map(v=>`${v.name}=${v.value}`)
            resolve(cookie.join(';'))
        }else{
            reject(new Error('ckObjs为空'))
        }
    })
}