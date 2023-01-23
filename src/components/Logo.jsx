export function Logo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-name="Layer 1"
      viewBox="0 0 103.57 128"
      {...props}
    >
      <defs>
        <linearGradient
          id="a"
          x1="33.08"
          x2="88.52"
          y1="21.98"
          y2="21.98"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".17" stopColor="#97ca4e" />
          <stop offset=".25" stopColor="#8bc54d" />
          <stop offset=".39" stopColor="#6cb74a" />
          <stop offset=".57" stopColor="#3aa046" />
          <stop offset=".76" stopColor="#008541" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="74.97"
          x2="29.44"
          y1="111.07"
          y2="13.42"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#97ca4e" />
          <stop offset=".18" stopColor="#94c84e" />
          <stop offset=".35" stopColor="#89c34d" />
          <stop offset=".5" stopColor="#77bb4b" />
          <stop offset=".65" stopColor="#5db049" />
          <stop offset=".79" stopColor="#3ca146" />
          <stop offset=".94" stopColor="#158e43" />
          <stop offset="1" stopColor="#008541" />
        </linearGradient>
        <linearGradient
          xlinkHref="#a"
          id="c"
          x1="89.48"
          x2="89.48"
          y1="1.44"
          y2="81.25"
        />
        <radialGradient
          id="d"
          cx="57.13"
          cy="124.88"
          r="76.75"
          gradientTransform="matrix(1 0 0 1.25 0 -31.47)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#97ca4e" />
          <stop offset=".24" stopColor="#94c94e" />
          <stop offset=".4" stopColor="#8bc54d" />
          <stop offset=".54" stopColor="#7cbe4c" />
          <stop offset=".66" stopColor="#66b44a" />
          <stop offset=".78" stopColor="#4aa747" />
          <stop offset=".89" stopColor="#289744" />
          <stop offset="1" stopColor="#008541" />
        </radialGradient>
      </defs>
      <path
        d="M81.68 2c-26.62-9.58-47.32 19.23-48.6 41.88 3.51-25.11 30.33-36.1 44.69-30.6 3.66 1.4 6.65 4.35 5.9 8.84a11.87 11.87 0 0 1-2.09 4.46s15.55-19.1.1-24.58Z"
        style={{ fill: 'url(#a)' }}
        transform="translate(-14.71)"
      />
      <path
        d="M47 122.84c-16.44-8.57-14.38-53.09-14.38-70.48a78.41 78.41 0 0 1 .45-8.48C34.22 23.79 50.63-1.13 72.89.13a43.89 43.89 0 0 0-7 0c-6.1.53-22.25 3.69-34.8 15.58C18 28.09 14.55 46.23 14.72 66c.41 47.86 22.28 55.73 31.8 58.09a.85.85 0 0 0 .22 0 .69.69 0 0 0 .69-.68.73.73 0 0 0-.43-.57Z"
        style={{ fill: 'url(#b)' }}
        transform="translate(-14.71)"
      />
      <path
        d="M106 71.34C92.64 59.27 84.75 55.72 84.26 48.57c-.37-5.3 3.69-8.34 8.33-15.23 8.19-12.17 3.3-25.34-9.45-30.78 13 6.19-1.56 24-1.56 24l.18-.28C77.11 33 66.42 42 68.55 51.2c3.51 15.1 26.25 8 42.13 25a46.21 46.21 0 0 0-4.68-4.86Z"
        style={{ fill: 'url(#c)' }}
        transform="translate(-14.71)"
      />
      <path
        d="M110.36 75.9C94.5 59.33 72 66.2 68.55 51.2a12.92 12.92 0 0 1-.24-1.62c.27 13 8.68 18 22 28 14.36 10.83 16.59 44.36-35.73 46.61-.31 0-.75 0-1.18.08a.69.69 0 0 0 0 1.38c13.74 3.42 41.3 5.08 56.19-9 10.84-10.27 12.05-27.1.77-40.75Z"
        style={{ fill: 'url(#d)' }}
        transform="translate(-14.71)"
      />
    </svg>
  )
}
