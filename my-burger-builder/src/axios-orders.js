import axios from 'axios';


const instance = axios.create ({
    baseURL:'https://fernanda-react-burger.firebaseio.com/'
});

export default instance;