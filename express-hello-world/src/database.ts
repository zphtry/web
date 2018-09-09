import db_config from '../.env';
import { Client, QueryResult } from 'pg';
const client = new Client(db_config);

export const initDB = async(): Promise<void> => {
    await client.connect();
};

export const getDBInfo = async(): Promise<QueryResult> => {
    return await client.query(
        `SELECT *
                  FROM public.comments
                  ORDER BY id`
    );
};

export const closeDB = async (): Promise<void> => {
    client.on('end', client.end);
};

