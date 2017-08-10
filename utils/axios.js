import axios from 'axios'
import { API_URL, TIMEOUT } from './consts'

axios.defaults.baseURL = API_URL
axios.defaults.timeout = TIMEOUT

export default axios
