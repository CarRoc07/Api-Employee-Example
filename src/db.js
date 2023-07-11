import { createPool } from 'mysql2/promise'
import { dbUrl } from './config.js'

export const pool = createPool({
    uri: dbUrl,
})