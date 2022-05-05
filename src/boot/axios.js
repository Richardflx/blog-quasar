import axios from 'axios'

const HTTPClient = axios.create({
  baseURL: 'http://viladosilicio.com.br/wp-json/wp/'
})

export { HTTPClient }
