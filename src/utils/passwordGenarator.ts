export const generatePassword = (): string => {
  const password = Math.random().toString(36).slice(-8)
  return password
}
