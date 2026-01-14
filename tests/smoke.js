require('dotenv').config();
const axios = require('axios');

const BASE = process.env.BASE_URL || `http://localhost:${process.env.PORT||3000}`;

async function run(){
  try{
    console.log('Base URL:', BASE);
    // login
    const login = await axios.post(`${BASE}/api/auth/login`, { email: 'test@example.com', password: 'Test1234' });
    const token = login.data.token;
    console.log('Logged in, token:', token ? token.slice(0,20)+'...' : 'no-token');
    const headers = { Authorization: `Bearer ${token}` };

    // Category
    const cat = await axios.post(`${BASE}/api/categories`, { name: 'SmokeCat' }, { headers });
    console.log('Category created:', cat.data.id);

    // Income
    const inc = await axios.post(`${BASE}/api/incomes`, { title: 'SmokeIncome', amount: 123.45 }, { headers });
    console.log('Income created:', inc.data.id);

    // Project
    const proj = await axios.post(`${BASE}/api/projects`, { name: 'SmokeProject', description: 'smoke test' }, { headers });
    console.log('Project created:', proj.data.id);

    // Create repartition linked to income and project
    const repart = await axios.post(`${BASE}/api/projects/${proj.data.id}/repartitions`, { userId: login.data.user.id, amount: 50, entreeArgentId: inc.data.id }, { headers });
    console.log('Repartition created:', repart.data.id);

    // Objectif
    const obj = await axios.post(`${BASE}/api/objectifs`, { title: 'SmokeGoal', targetAmount: 50 }, { headers });
    console.log('Objectif created:', obj.data.id);

    // Alert
    const alert = await axios.post(`${BASE}/api/alerts`, { prompt: 'Smoke', response: 'ok', level: 'info' }, { headers });
    console.log('Alert created:', alert.data.id);

    // Create expense linked to objectif
    const expense = await axios.post(`${BASE}/api/expenses`, { title: 'SmokeExpense', amount: 10, objectifIds: [obj.data.id] }, { headers });
    console.log('Expense created (linked to objectif):', expense.data.id);

    console.log('\nSMOKE TESTS PASSED');
    process.exit(0);
  }catch(e){
    console.error('SMOKE TEST FAILED');
    if(e.response) console.error('Status:', e.response.status, 'Data:', e.response.data);
    else console.error(e.message);
    process.exit(2);
  }
}

run();
