// import {environment} from '../../environments/environment';
const environment = {
  production: true,
  API: 'https://jsonplaceholder.typicode.com'
};

const {API} = environment;

const users = `${API}/users`
const posts = `${API}/posts`
const urls = {
  users: {
    users,
    byId: (id: number): string => `${users}/${id}`
  },
  posts: {
    posts,
    byId: (userId: number): string => `${posts}/${userId}`
  }
}

export {
  urls
}
