export const fetchJson = async <T>(path: string): Promise<T> => {
  let base = import.meta.env.BASE_URL
  if (base === '/') base = ''
  const res = await fetch(`${base}${path}`)
  if (!res.ok) throw new Error(`Failed to load ${path}`)
  return res.json() as Promise<T>
}
