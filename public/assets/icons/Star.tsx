type Props = {
  type: 'empty' | 'half' | 'full';
  onClick?: () => void;
};

export const Star = ({type, onClick} : Props) => {

  const render = () => {
    switch (type) {
      case 'empty':
        return (
          <svg onClick={onClick} width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.52942 5.43572L5.91949 5.37885L6.09386 5.02531L8.13409 0.888607C8.13411 0.888567 8.13413 0.888527 8.13415 0.888487C8.22385 0.70704 8.48889 0.700383 8.58295 0.889265C8.58302 0.889412 8.58309 0.88956 8.58317 0.889708L10.6229 5.02531L10.7972 5.37885L11.1873 5.43572L15.7524 6.10126L15.7529 6.10134C15.9556 6.13074 16.0389 6.38324 15.8904 6.52779L15.8902 6.528L12.5875 9.74635L12.3049 10.0217L12.3717 10.4105L13.1528 14.9563C13.1869 15.1554 12.9751 15.3157 12.7913 15.219L12.7912 15.2189L8.70731 13.0723L8.35836 12.8889L8.0094 13.0723L3.92553 15.2189L3.92318 15.2202C3.74455 15.3149 3.52907 15.16 3.56392 14.9563L4.34499 10.4105L4.41179 10.0217L4.12924 9.74635L0.826528 6.528L0.826315 6.52779C0.677851 6.38324 0.761138 6.13074 0.963811 6.10134L0.964358 6.10126L5.52942 5.43572Z" stroke="#FF9400" stroke-width="1.5"/>
          </svg>
        );
      case 'half':
        return (
          <svg onClick={onClick} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="star-half-alt" clip-path="url(#clip0_13_183)">
            <path id="Vector" d="M18.9759 6.84738L13.5143 6.05223L11.0737 1.11231C10.8543 0.670888 10.4263 0.447754 9.9983 0.447754C9.57293 0.447754 9.14793 0.667903 8.92778 1.11231L6.48636 6.05186L1.02442 6.84626C0.0449423 6.98805 -0.347595 8.1929 0.36248 8.8832L4.3136 12.7265L3.37852 18.1548C3.24569 18.9302 3.86472 19.5522 4.558 19.5522C4.74196 19.5522 4.93114 19.5086 5.11285 19.4123L9.99905 16.8496L14.8849 19.4131C15.0662 19.5082 15.255 19.5515 15.4382 19.5515C16.1323 19.5515 16.7524 18.9317 16.6196 18.156L15.6856 12.7272L19.6375 8.88469C20.3479 8.1944 19.9554 6.98917 18.9759 6.84738ZM14.4334 11.4444L13.7573 12.1019L13.917 13.0302L14.6453 17.2634L10.8345 15.2638L9.99942 14.8257L10.0005 2.99029L11.9046 6.8444L12.3218 7.6888L13.255 7.82462L17.5173 8.44514L14.4334 11.4444Z" fill="#FF9400"/>
            </g>
            <defs>
            <clipPath id="clip0_13_183">
            <rect width="20" height="20" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        );
      case 'full':
        return (
          <svg onClick={onClick} width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.46159 0.556577L5.42122 4.69357L0.856159 5.35911C0.0375102 5.47784 -0.290574 6.48709 0.303102 7.06515L3.60582 10.2835L2.82467 14.8298C2.68406 15.6516 3.54958 16.2671 4.27449 15.8828L8.35836 13.7362L12.4422 15.8828C13.1671 16.264 14.0327 15.6516 13.892 14.8298L13.1109 10.2835L16.4136 7.06515C17.0073 6.48709 16.6792 5.47784 15.8606 5.35911L11.2955 4.69357L9.25512 0.556577C8.88954 -0.180831 7.8303 -0.190205 7.46159 0.556577Z" fill="#FF9400"/>
          </svg>
        );
      default:
        return null;
    }
  }

  return render()
}