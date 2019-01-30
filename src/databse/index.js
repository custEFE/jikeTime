
import Mysql from 'mysql2'
import {
    DATA_BASE
} from './../config/env'
const connection = Mysql.createConnection({
  host: DATA_BASE.HOST,
  user: DATA_BASE.USER,
  database: DATA_BASE.NAME,
  password:'745951'
});


