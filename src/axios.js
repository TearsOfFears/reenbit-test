import axios from "axios";

const instance = axios.create({
	baseURL: "https://rickandmortyapi.com/api"
});

// instance.defaults.withCredentials = true;
// instance
//   .interceptors
//   .request
//   .use((config) => {
//     config.headers.Authorization = window
//       .localStorage
//       .getItem('token');
//     return config;
//   });

// instance
//   .interceptors
//   .response
//   .use((config) => config, async (err) => {
//     const originalReaquest = err.config;
//     if (err.response.status == 403 && err.config && !err.config._isRetry) {
//       originalReaquest._isRetry = true;
//       try {
//         const refresh = await instance.get('/auth/refresh', {
//           withCredentials: true,
//         });
//         window
//           .localStorage
//           .setItem('token', refresh.data.tokens.access);
//         return instance.request(originalReaquest);
//       } catch (err) {
//         console.log('Not Auth ', err);
//       }
//     }
//     throw err;
//   });

export default instance;
