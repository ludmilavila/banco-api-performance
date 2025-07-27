import http from 'k6/http';
import { sleep , check} from 'k6';
import { pegarBaseURL } from '../utils/variaveis.js';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'));

export const options = {
    //iterations: 1,
    
    /*vus: 10,
    duration: '30s',*/
    
    stages: [
        { duration: '5s', target: 10 },
        { duration: '20s', target: 10 },
        { duration: '5s', target: 0 }
    ], 
    thresholds: {
        http_req_duration: ['p(90)<3000', 'max<5000'],
        http_req_failed: ['rate<0.01']
    } 
};

export default function () {
    //teste
    const url = pegarBaseURL() + '/login';
    const payload = JSON.stringify(postLogin);
    const params = {
        headers: {
        'Content-Type': 'application/json',
        },
    };

    const resposta = http.post(url, payload, params);

    check(resposta, {
        'Validar que o Status é 200': (r) => r.status === 200,
        'Validar que o Token é string': (r) => typeof(r.json().token) == 'string'
    })

    sleep(1);
}
