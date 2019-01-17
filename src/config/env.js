import Env2 from 'env2'
Env2('.env')
const { env } = process;
module.exports = {
    ACCOUNT:env.ACCOUNT,
    PASSWORD:env.PASSWORD,
    DOMAIN:env.DOMAIN
}