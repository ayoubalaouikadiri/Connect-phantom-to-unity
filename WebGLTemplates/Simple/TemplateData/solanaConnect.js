let provider
const getProvider = async () => {
  await window.solana.connect()
  return window.solana
}
window.onload = () => {
  getProvider().then(item =>{
    provider = item;
  })
}