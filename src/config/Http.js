import Axios from 'axios'
import { rootUrl } from './App'

export const http = Axios.create({
    baseURL: rootUrl
})