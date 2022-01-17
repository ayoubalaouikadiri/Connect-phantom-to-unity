mergeInto(LibraryManager.library, {
  WalletAddress: function () {
    var returnStr
    try {
      // get address from metamask
      returnStr = provider.publicKey.toBase58();
    } catch (e) {
      returnStr = "I am down";
    }
    var bufferSize = lengthBytesUTF8(returnStr) + 1;
    var buffer = _malloc(bufferSize);
    stringToUTF8(returnStr, buffer, bufferSize);
    return buffer;
  },
});