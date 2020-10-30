import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-commy-ng-e5001.cloudfunctions.net/api'
        // 'http://localhost:5001/commy-ng-e5001/us-central1/api' // THE API (cloud function) URL
});

export default instance;