import * as React from "react"
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Pattern,
  G,
  Rect
} from "react-native-svg"

function SvgBg(props) {
  return (
    <Svg {...props}>
      <Path fill="#0066A1" d="M0 0H540V450H0z" />
      <Defs>
        <LinearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1={0}
          x2={0}
          y1={0}
          y2="100%"
          gradientTransform="rotate(176 683 303)"
        >
          <Stop offset={0} stopColor="#0066A1" />
          <Stop offset={1} stopColor="#FFA600" />
        </LinearGradient>
        <Pattern
          patternUnits="userSpaceOnUse"
          id="b"
          width={300}
          height={250}
          x={0}
          y={0}
          viewBox="0 0 1080 900"
        >
          <G fillOpacity={0.12}>
            <Path fill="#444" d="M90 150L0 300 180 300z" />
            <Path d="M90 150L180 0 0 0z" />
            <Path fill="#AAA" d="M270 150L360 0 180 0z" />
            <Path fill="#DDD" d="M450 150L360 300 540 300z" />
            <Path fill="#999" d="M450 150L540 0 360 0z" />
            <Path d="M630 150L540 300 720 300z" />
            <Path fill="#DDD" d="M630 150L720 0 540 0z" />
            <Path fill="#444" d="M810 150L720 300 900 300z" />
            <Path fill="#FFF" d="M810 150L900 0 720 0z" />
            <Path fill="#DDD" d="M990 150L900 300 1080 300z" />
            <Path fill="#444" d="M990 150L1080 0 900 0z" />
            <Path fill="#DDD" d="M90 450L0 600 180 600z" />
            <Path d="M90 450L180 300 0 300z" />
            <Path fill="#666" d="M270 450L180 600 360 600z" />
            <Path fill="#AAA" d="M270 450L360 300 180 300z" />
            <Path fill="#DDD" d="M450 450L360 600 540 600z" />
            <Path fill="#999" d="M450 450L540 300 360 300z" />
            <Path fill="#999" d="M630 450L540 600 720 600z" />
            <Path fill="#FFF" d="M630 450L720 300 540 300z" />
            <Path d="M810 450L720 600 900 600z" />
            <Path fill="#DDD" d="M810 450L900 300 720 300z" />
            <Path fill="#AAA" d="M990 450L900 600 1080 600z" />
            <Path fill="#444" d="M990 450L1080 300 900 300z" />
            <Path fill="#222" d="M90 750L0 900 180 900z" />
            <Path d="M270 750L180 900 360 900z" />
            <Path fill="#DDD" d="M270 750L360 600 180 600z" />
            <Path d="M450 750L540 600 360 600z" />
            <Path d="M630 750L540 900 720 900z" />
            <Path fill="#444" d="M630 750L720 600 540 600z" />
            <Path fill="#AAA" d="M810 750L720 900 900 900z" />
            <Path fill="#666" d="M810 750L900 600 720 600z" />
            <Path fill="#999" d="M990 750L900 900 1080 900z" />
            <Path fill="#999" d="M180 0L90 150 270 150z" />
            <Path fill="#444" d="M360 0L270 150 450 150z" />
            <Path fill="#FFF" d="M540 0L450 150 630 150z" />
            <Path d="M900 0L810 150 990 150z" />
            <Path fill="#222" d="M0 300L-90 450 90 450z" />
            <Path fill="#FFF" d="M0 300L90 150 -90 150z" />
            <Path fill="#FFF" d="M180 300L90 450 270 450z" />
            <Path fill="#666" d="M180 300L270 150 90 150z" />
            <Path fill="#222" d="M360 300L270 450 450 450z" />
            <Path fill="#FFF" d="M360 300L450 150 270 150z" />
            <Path fill="#444" d="M540 300L450 450 630 450z" />
            <Path fill="#222" d="M540 300L630 150 450 150z" />
            <Path fill="#AAA" d="M720 300L630 450 810 450z" />
            <Path fill="#666" d="M720 300L810 150 630 150z" />
            <Path fill="#FFF" d="M900 300L810 450 990 450z" />
            <Path fill="#999" d="M900 300L990 150 810 150z" />
            <Path d="M0 600L-90 750 90 750z" />
            <Path fill="#666" d="M0 600L90 450 -90 450z" />
            <Path fill="#AAA" d="M180 600L90 750 270 750z" />
            <Path fill="#444" d="M180 600L270 450 90 450z" />
            <Path fill="#444" d="M360 600L270 750 450 750z" />
            <Path fill="#999" d="M360 600L450 450 270 450z" />
            <Path fill="#666" d="M540 600L630 450 450 450z" />
            <Path fill="#222" d="M720 600L630 750 810 750z" />
            <Path fill="#FFF" d="M900 600L810 750 990 750z" />
            <Path fill="#222" d="M900 600L990 450 810 450z" />
            <Path fill="#DDD" d="M0 900L90 750 -90 750z" />
            <Path fill="#444" d="M180 900L270 750 90 750z" />
            <Path fill="#FFF" d="M360 900L450 750 270 750z" />
            <Path fill="#AAA" d="M540 900L630 750 450 750z" />
            <Path fill="#FFF" d="M720 900L810 750 630 750z" />
            <Path fill="#222" d="M900 900L990 750 810 750z" />
            <Path fill="#222" d="M1080 300L990 450 1170 450z" />
            <Path fill="#FFF" d="M1080 300L1170 150 990 150z" />
            <Path d="M1080 600L990 750 1170 750z" />
            <Path fill="#666" d="M1080 600L1170 450 990 450z" />
            <Path fill="#DDD" d="M1080 900L1170 750 990 750z" />
          </G>
        </Pattern>
      </Defs>
      <Rect fill="url(#a)" width="100%" height="100%" />
      <Rect fill="url(#b)" width="100%" height="100%" />
    </Svg>
  )
}

export default SvgBg
