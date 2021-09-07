import axios from 'axios'
import { AuthApi, UsersApi, PagesApi } from 'api/generated'

const BASE_PATH = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL

const axiosInstance = axios.create({
  withCredentials: true,
})

export default {
  auth: new AuthApi(undefined, BASE_PATH, axiosInstance),
  users: new UsersApi(undefined, BASE_PATH, axiosInstance),
  pages: new PagesApi(undefined, BASE_PATH, axiosInstance),
}
