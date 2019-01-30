import Env2 from 'env2'
Env2('.env')
const { env } = process;
module.exports = {
    ACCOUNT:env.ACCOUNT,
    PASSWORD:env.PASSWORD,
    USER_DOMAIN:env.USER_DOMAIN,
    COLUMO_DOMAIN:env.COLUMO_DOMAIN,
    DATA_BASE:{
        USER:env.DATABASE_USER,
        PWD:env.DATABASE_PWD,
        NAME:env.DATABASE_NAME,
        PORT:env.DATABASE_PROT,
        HOST:env.DATABASE_HOST
    }
}