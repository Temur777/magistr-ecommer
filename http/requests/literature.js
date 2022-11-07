import request from '@/http/axios/request'

export function getLiteratureList() {
  return request({
    url: `/api/books/all`,
    method: 'get',
  })
}
