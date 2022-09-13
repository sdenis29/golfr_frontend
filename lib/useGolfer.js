import useSWR from 'swr'
import { getToken } from './userAuth'

export const GOLFER_URL = id => `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`

const useGolfer = id => {
  const fetcher = async url => {
    if (!id) {
      return undefined
    }

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })

    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data!')
      error.info = await res.json()
      error.status = res.status
      throw error
    }

    return res.json()
  }

  const { data, error } = useSWR(GOLFER_URL(id), fetcher)

  return {
    golfer: data,
    error: error && error.message,
  }
}

export default useGolfer
