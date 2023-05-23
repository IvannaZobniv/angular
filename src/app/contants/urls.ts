// import {environment} from '../../environments/environment';
const environment = {
  production: true,
  API: 'https://jsonplaceholder.typicode.com'
};

const {API} = environment;

const users = `${API}/users`
const urls = {
  users: {
    users,
    byId: (id: number): string => `${users}/${id}`
  }
}

export {
  urls
}
