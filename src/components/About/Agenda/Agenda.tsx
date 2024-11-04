import './Agenda.scss';

const times = [
  '12:00 PM',
  '1:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM'
];
const events = [
  'Doors Open',
  'Google UX Panel',
  'Arup Lightning Talk',
  'CoNote Lightning Talk',
  'Alan Tran Lightning Talk',
  'Doors Close'
];

export default function Agenda() {
  return (
    <div className="agenda-section info">
      <h2 className="section-title">Agenda</h2>
      <svg
        width="806"
        height="547"
        viewBox="0 0 806 547"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="agenda-card"
      >
        <foreignObject
          x="225"
          y="50"
          fill="white"
          width="400"
          height="200"
          className="agenda-text"
        >
          <div>
            <h3>Wednesday, Nov 13 | 12-5pm PST</h3>
          </div>
        </foreignObject>
        <mask
          id="mask0_5032_8565"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="806"
          height="547"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M703.166 0.175781H533.693L518.193 14.2481L501.193 0.175781H247.193L211.193 14.248L192.193 0.175781H0.962891V403.248L12.1934 426.248L0.962891 443.248V546.248H318.693L341.193 537.248L370.193 546.248H803.193L805.135 253.748L796.693 239.748L805.135 226.248V92.274L703.166 0.175781Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_5032_8565)">
          <path
            d="M533.693 0.175781V-1.82422H532.921L532.349 -1.30502L533.693 0.175781ZM703.166 0.175781L704.506 -1.30842L703.935 -1.82422H703.166V0.175781ZM518.193 14.2481L516.918 15.7887L518.254 16.8944L519.538 15.7288L518.193 14.2481ZM501.193 0.175781L502.469 -1.36492L501.914 -1.82422H501.193V0.175781ZM247.193 0.175781V-1.82422H246.816L246.465 -1.68702L247.193 0.175781ZM211.193 14.248L210.003 15.8552L210.892 16.5134L211.921 16.1108L211.193 14.248ZM192.193 0.175781L193.384 -1.43142L192.853 -1.82422H192.193V0.175781ZM0.962891 0.175781V-1.82422H-1.03711V0.175781H0.962891ZM0.962891 403.248H-1.03711V403.71L-0.834309 404.126L0.962891 403.248ZM12.1934 426.248L13.8621 427.35L14.4919 426.397L13.9906 425.371L12.1934 426.248ZM0.962891 443.248L-0.70591 442.146L-1.03711 442.647V443.248H0.962891ZM0.962891 546.248H-1.03711V548.248H0.962891V546.248ZM318.693 546.248V548.248H319.079L319.436 548.105L318.693 546.248ZM341.193 537.248L341.786 535.338L341.109 535.128L340.451 535.391L341.193 537.248ZM370.193 546.248L369.601 548.158L369.89 548.248H370.193V546.248ZM803.193 546.248V548.248H805.18L805.193 546.261L803.193 546.248ZM805.135 253.748L807.135 253.761L807.139 253.198L806.848 252.715L805.135 253.748ZM796.693 239.748L794.998 238.688L794.346 239.729L794.981 240.781L796.693 239.748ZM805.135 226.248L806.831 227.308L807.135 226.822V226.248H805.135ZM805.135 92.274H807.135V91.385L806.476 90.789L805.135 92.274ZM533.693 2.17578H703.166V-1.82422H533.693V2.17578ZM519.538 15.7288L535.038 1.65658L532.349 -1.30502L516.849 12.7673L519.538 15.7288ZM499.918 1.71638L516.918 15.7887L519.469 12.7074L502.469 -1.36492L499.918 1.71638ZM247.193 2.17578H501.193V-1.82422H247.193V2.17578ZM211.921 16.1108L247.921 2.03848L246.465 -1.68702L210.465 12.3853L211.921 16.1108ZM191.003 1.78298L210.003 15.8552L212.384 12.6409L193.384 -1.43142L191.003 1.78298ZM0.962891 2.17578H192.193V-1.82422H0.962891V2.17578ZM2.96289 403.248V0.175781H-1.03711V403.248H2.96289ZM13.9906 425.371L2.76009 402.371L-0.834309 404.126L10.3962 427.126L13.9906 425.371ZM2.63159 444.35L13.8621 427.35L10.5246 425.146L-0.70591 442.146L2.63159 444.35ZM2.96289 546.248V443.248H-1.03711V546.248H2.96289ZM318.693 544.248H0.962891V548.248H318.693V544.248ZM340.451 535.391L317.951 544.391L319.436 548.105L341.936 539.105L340.451 535.391ZM370.786 544.338L341.786 535.338L340.601 539.158L369.601 548.158L370.786 544.338ZM803.193 544.248H370.193V548.248H803.193V544.248ZM803.136 253.735L801.193 546.235L805.193 546.261L807.135 253.761L803.136 253.735ZM794.981 240.781L803.423 254.781L806.848 252.715L798.406 238.715L794.981 240.781ZM803.44 225.188L794.998 238.688L798.389 240.808L806.831 227.308L803.44 225.188ZM803.135 92.274V226.248H807.135V92.274H803.135ZM806.476 90.789L704.506 -1.30842L701.825 1.65998L803.795 93.758L806.476 90.789Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M804.755 92.537H702.785V0.439453L804.755 92.537Z"
            fill="white"
          />
        </g>
        {times.map((time, index) => (
          <g key={time}>
            {/* Left cell for time */}
            <rect
              x="100"
              y={130 + index * 50}
              width="300"
              height="50"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            <text
              x="250"
              y={155 + index * 50}
              fontSize="14px"
              fill="#FFFFFF"
              fontFamily="Arial"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {time}
            </text>

            {/* Right cell for event */}
            <rect
              x="400"
              y={130 + index * 50}
              width="300"
              height="50"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            <text
              x="550"
              y={155 + index * 50}
              fontSize="14px"
              fill="#FFFFFF"
              fontFamily="Arial"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {events[index]}
            </text>
          </g>
        ))}
      </svg>
      <svg
        width="323"
        height="436"
        viewBox="0 0 323 436"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mobile-agenda-card"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M281.467 0.699219H213.678L207.478 11.9031L200.678 0.699219H99.078L84.678 11.9031L77.078 0.699219H0.585938V321.613L5.07814 339.925L0.585938 353.459V435.465H127.678L136.678 428.299L148.278 435.465H321.478L322.255 202.585L318.878 191.439L322.255 180.691V74.0249L281.467 0.699219Z"
          fill="none"
          stroke="white"
        />
        <foreignObject
          x="25"
          y="25"
          fill="white"
          width="400"
          height="200"
          className="agenda-text"
        >
          <div>
            <h3>Wednesday, Nov 13 | 12-5pm PST</h3>
          </div>
        </foreignObject>
        {times.map((time, index) => (
          <g key={time}>
            {/* Left cell for time */}
            <rect
              x="25"
              y={75 + index * 50}
              width="125"
              height="50"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            <text
              x="85"
              y={100 + index * 50}
              fontSize="12px"
              fill="#FFFFFF"
              fontFamily="Arial"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {time}
            </text>

            {/* Right cell for event */}
            <rect
              x="150"
              y={75 + index * 50}
              width="125"
              height="50"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
            <text
              x="225"
              y={100 + index * 50}
              fontSize="12px"
              fill="#FFFFFF"
              fontFamily="Arial"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {events[index]}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
