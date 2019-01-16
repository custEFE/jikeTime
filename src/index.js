import '@babel/polyfill'
import './config/env'
(async ()=>{
    await console.log(process.env.PASSWORD)
})()
