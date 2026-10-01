import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '10s',
};

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';
const ACCESS_TOKEN = __ENV.ACCESS_TOKEN;
const CUSTOMER_ID = __ENV.CUSTOMER_ID;

export default function () {
  const response = http.get(`${BASE_URL}/api/customers/${CUSTOMER_ID}`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });

  check(response, {
    'status é 200': (r) => r.status === 200,
    'resposta contém cliente': (r) => r.body.includes('performance@example.com'),
  });

  sleep(1);
}
