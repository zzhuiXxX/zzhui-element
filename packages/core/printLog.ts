export default function () {
  if (PROD) {
    const logo = `
________________________________________________________________________________________________

   _______         __            __          _______  __                                 __   
  |__     |.-----.|  |--..--.--.|__| ______ |    ___||  |.-----..--------..-----..-----.|  |_ 
  |     __||-- __||     ||  |  ||  ||______||    ___||  ||  -__||        ||  -__||     ||   _|
  |_______||_____||__|__||_____||__|        |_______||__||_____||__|__|__||_____||__|__||____|

________________________________________________________________________________________________
              author: zzhuiXxX (Eric)
`;

    const rainbowGradient = `
background: linear-gradient(135deg, orange 60%, cyan);
background-clip: text;
color: transparent;
font-size: 16px; 
line-height: 1;
font-family: monospace;
font-weight: 600;
`;

    console.info(`%c${logo}`, rainbowGradient);
  } else if (DEV) {
    console.log("[EricUI]:dev mode...");
  }
}