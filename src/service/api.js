import Axios from 'axios'

const api = Axios.create({
    baseURL:'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=52cd47ed61eebd8f62bdf9d8922a64f8&hash=2d744ffccd666aacf33f89b0eefeeb06'
});

export default api;