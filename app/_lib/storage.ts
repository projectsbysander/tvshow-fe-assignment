export const WISHLIST_STORAGE_KEY = 'WISHLIST'

export const getWishlist = () => {
  try {
    const wishlistJson = localStorage.getItem(WISHLIST_STORAGE_KEY)
    if (!wishlistJson) return []
    const wishlist = JSON.parse(wishlistJson)
    return wishlist || []
  } catch (e) {
    return []
  }
}

export const updateWishlist = (data: number[]) => {
  try {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(data))
    window.dispatchEvent(new Event('storage'))
  } catch (e) {
    console.error(e)
  }
}
