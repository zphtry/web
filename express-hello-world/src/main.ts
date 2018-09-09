import {createServer} from 'http';
import { initDB, getDBInfo, closeDB } from './database';

initDB().then();
createServer(async(request, response) => {
    console.log('request ', request.url);
    const contentType = 'application/json';
    const rows = (await getDBInfo()).rows;
    response.writeHead(200, { 'Content-Type': contentType });
    response.end(JSON.stringify({
        'trt': `message: ${rows[0].comments} и ${rows[1].comments} пошли получать зарплату`}), 'utf-8');
}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');
closeDB().then();


