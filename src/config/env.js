import Env2 from 'env2'
Env2('.env')
const { env } = process;
module.exports = {
    ACCOUNT:env.ACCOUNT,
    PASSWORD:env.PASSWORD,
    USER_DOMAIN:env.USER_DOMAIN,
    COLUMO_DOMAIN:env.COLUMO_DOMAIN
}