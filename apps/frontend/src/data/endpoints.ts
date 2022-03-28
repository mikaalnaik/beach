export const endpoint = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3001'
  : 'https://beachbackend.herokuapp.com/';
