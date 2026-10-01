import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '20s', target: 20 },
    { duration: '2m', target: 20 },
  ],

  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<500'],
  },
};

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';
const ACCESS_TOKEN = __ENV.ACCESS_TOKEN;
const PRODUCT_ID = __ENV.PRODUCT_ID;
const CUSTOMER_ID = __ENV.CUSTOMER_ID;

const headers = {
  Authorization: `Bearer ${ACCESS_TOKEN}`,
};

export default function () {

  const products = http.get(`${BASE_URL}/api/products`, {
    headers,
  });

  check(products, {
    'products - status 200': (r) => r.status === 200,
  });

  const product = http.get(`${BASE_URL}/api/products/${PRODUCT_ID}`, {
    headers,
  });

  check(product, {
    'product por ID - status 200': (r) => r.status === 200,
  });

  const customers = http.get(`${BASE_URL}/api/customers`, {
    headers,
  });

  check(customers, {
    'customers - status 200': (r) => r.status === 200,
  });

  const customer = http.get(`${BASE_URL}/api/customers/${CUSTOMER_ID}`, {
    headers,
  });

  check(customer, {
    'customer por ID - status 200': (r) => r.status === 200,
  });
}