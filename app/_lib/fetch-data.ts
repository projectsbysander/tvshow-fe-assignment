export const API_URL = 'https://api.tvmaze.com'

export const fetchData = async (path: string, ...args: any) => {
  try {
    const res = await fetch(`${API_URL}/${path}`, ...args)

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    return res.json()
  } catch (e) {
    console.log(e)
  }
}

export const fetcher = (...args: any) =>
  fetch.apply(null, args).then((res) => res.json())
