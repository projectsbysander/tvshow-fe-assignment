'use client'
import { API_URL, fetcher } from '@_lib/fetch-data'
import { getWishlist } from '@_lib/storage'
import { ShowType } from '@_types'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import useSWR from 'swr'

type ShowsContextProps = {
  shows: ShowType[]
  wishlist: number[]
  loading: boolean
}

export const ShowsContext = createContext<ShowsContextProps>({
  shows: [],
  wishlist: [],
  loading: true,
})

const ShowsProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<number[]>([])

  const {
    data: shows,
    error,
    isLoading: loading,
  } = useSWR(`${API_URL}/shows`, fetcher)

  useEffect(() => {
    const handleStorage = () => {
      setWishlist(getWishlist())
    }
    handleStorage()

    // luister naar storage updates uit localStorage
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  const store = useMemo(
    () => ({
      shows,
      wishlist,
      loading,
    }),
    [shows, wishlist, loading]
  )

  if (error) return <div>Failed to load</div>
  if (loading) return <div>Loading...</div>

  return <ShowsContext.Provider value={store}>{children}</ShowsContext.Provider>
}

const useShows = () => {
  return useContext(ShowsContext)
}

export { useShows, ShowsProvider }
