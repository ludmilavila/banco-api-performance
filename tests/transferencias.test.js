import http from 'k6/http';
import { sleep, check } from 'k6';
import { obterToken } from '../helpers/autenticacao.js';
import { pegarBaseURL } from '../utils/variaveis.js';

export const options = {
  iterations: 1
};

export default function() {
  const token = obterToken()

  const url = pegarBaseURL() + '/transferencias';
  
  const payload = JSON.stringify({
    contaOrigem: 1,
    contaDestino: 2,
    valor: 11,
    token: ""
  });

  const params = {
    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
    },
  };

  let resposta = http.post(url, payload, params);

  check(resposta, {
    "status is 201": (resposta) => resposta.status === 201 
  });
  sleep(1);
}
