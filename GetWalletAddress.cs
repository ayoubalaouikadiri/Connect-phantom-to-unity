using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

using System.Runtime.InteropServices;

public class GetWalletAddress : MonoBehaviour
{

    public Text ButtonText;

    [DllImport("__Internal")] private static extern string WalletAddress();

    public void OnClick(){
        ButtonText.text = WalletAddress();
    }
}
