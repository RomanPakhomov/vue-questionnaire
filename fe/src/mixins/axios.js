import axios from 'axios'

export const axiosMixin = {
  data: () => ({
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    baseURL: 'http://localhost:3000/api',
    http: null
  }),
  methods: {
    get(url) {
      this.http.get(url)
    },
    post(url, body) {
      console.log(body)
      this.http.post(url, body)
    },
    put(url, body) {
      this.http.put(url, body)
    }
  },
  mounted() {
    this.http = axios.create({
      headers: this.headers,
      baseURL: this.baseURL
    })
  }
}
