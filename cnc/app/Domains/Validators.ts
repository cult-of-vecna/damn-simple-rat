export const validString = (str: string, message: string) => {
  if (typeof str !== 'string')
    throw message
  
  return str
}