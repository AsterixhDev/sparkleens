export default function BlobBackground() {
  return (
    <div className="absolute inset-0 opacity-30">
      <svg
        viewBox="0 0 900 600"
        className="w-full h-full blur-2xl"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(900, 0)">
          <path
            d="M0 378.6C-35.7 342.3 -71.3 306 -121.7 293.8C-172.1 281.6 -237.2 293.6 -267.7 267.7C-298.2 241.8 -294 178 -306.7 127.1C-319.4 76.1 -349 38.1 -378.6 0L0 0Z"
            className="fill-primary/50"
          />
        </g>
        <g transform="translate(0, 600)">
          <path
            d="M0 -378.6C33.9 -336.6 67.8 -294.7 117.1 -282.7C166.4 -270.7 231 -288.7 267.7 -267.7C304.4 -246.7 313.2 -186.6 327.1 -135.5C340.9 -84.3 359.7 -42.2 378.6 0L0 0Z"
            className="fill-primary/50"
          />
        </g>
      </svg>
    </div>
  );
}
