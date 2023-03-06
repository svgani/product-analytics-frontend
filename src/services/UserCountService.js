import axios from 'axios';

const USER_COUNT_BASE_URL = "http://localhost:8080/posts/count";

class UserCountService {

    getUserCount() {
        // console.log(axios.get(USER_COUNT_BASE_URL))
        return axios.get(USER_COUNT_BASE_URL);
    }
}

export default new UserCountService()