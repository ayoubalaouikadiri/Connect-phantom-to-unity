let provider;
if (window.solana) {
    provider = window.solana
    provider.on('connect',function(){
      console.log("You are clever")
    })
    provider.connect()
}
