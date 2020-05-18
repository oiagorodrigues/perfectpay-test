export const currency = (s = '0') => {
  return s.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}
