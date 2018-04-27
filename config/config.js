const env = process.env.NODE_ENV || 'development';
const apiUrl = {
  development: 'https://2m1onye0xk.execute-api.us-east-1.amazonaws.com/dev',
  stage: 'https://x4266rjle9.execute-api.us-east-1.amazonaws.com/staging',
};

console.log('env', env, apiUrl[env])
export default {
  apiUrl: apiUrl[env],
};
