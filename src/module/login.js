import {ACCOUNT,DOMAIN,PASSWORD} from './../config/env'
 
const Login =  async Page => {
    await Page.goto(`${DOMAIN}/signin`);
    await Page.type('.nw-input',ACCOUNT,{
        delay:10
    })
    await Page.type('.input',PASSWORD,{
        delay:10
    });
    await Page.click('.mybtn')
    await Page.waitForNavigation()
    // 登陆成功
    await Page.goto(`${DOMAIN}/dashboard/buy`)
    console.log('登陆成功')
}
export default Login