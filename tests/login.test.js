import http from 'k6/http';
import { sleep , check} from 'k6';

export const options = {
    iterations: 20,
    thresholds: {
        http_req_duration: ['p(90)<10', 'max<8'],
        http_req_failed: ['rate<0.01']
    }
};

export default function () {
    //teste
    const url = 'http://localhost:3000/login';
    const payload = JSON.stringify({
        username: 'julio.lima',
        senha: '123456',
    });
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
