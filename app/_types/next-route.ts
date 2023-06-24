export type NextRoute = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
