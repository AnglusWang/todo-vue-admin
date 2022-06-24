const isProduction = process.env.NODE_ENV === 'production'

const url = isProduction ? 'https://192.168.220.132:8088/' : 'http://localhost:8088/'
// const url = 'http://localhost:8088/'

const apiUrl = '/api'

export { apiUrl, url }
