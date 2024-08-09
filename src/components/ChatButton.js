import * as React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, {Mask,Rect,G,Line,Path,Ellipse,Circle,Defs,} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const ChatButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={299}
    height={312}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={299}
      height={312}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Rect width={299} height={312} fill="#EEE381" rx={25} />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#FFDE75" d="M0 0h299v312H0z" />
      <Path
        fill="#967B27"
        d="M192.046 94.679a8 8 0 1 0-2.98 15.721 8 8 0 0 0 2.98-15.721Zm-2.964 7.581-4.538 23.946 2.948.559 4.538-23.947-2.948-.558Z"
      />
      <Ellipse
        cx={256.305}
        cy={223.084}
        fill="#6F5B1A"
        rx={16.538}
        ry={20.02}
        transform="rotate(10.731 256.305 223.084)"
      />
      <Path
        fill="#967B27"
        d="M257.653 206.619c.497-2.62 3.369-4.029 5.746-2.819l2.269 1.156a3.999 3.999 0 0 1 2.115 4.309l-5.933 31.307a4 4 0 0 1-3.545 3.237l-2.535.245c-2.654.257-4.812-2.106-4.316-4.726l6.199-32.709Z"
      />
      <Ellipse
        cx={16.538}
        cy={20.02}
        fill="#6F5B1A"
        rx={16.538}
        ry={20.02}
        transform="scale(-1 1) rotate(-10.731 870.176 605.571)"
      />
      <Path
        fill="#967B27"
        d="M82.333 173.393c.496-2.62-1.661-4.983-4.316-4.726l-2.535.245a4 4 0 0 0-3.545 3.237l-5.933 31.307a4 4 0 0 0 2.115 4.309l2.27 1.156c2.376 1.211 5.249-.199 5.745-2.819l6.199-32.709Z"
      />
      <Path
        fill="#BF9F3C"
        d="M260.19 218.948c-7.788 41.092-30.639 68.169-105.898 53.906-78.275-17.049-86.618-47.823-78.83-88.915 7.787-41.093 58.146-69.158 107.032-59.894 48.885 9.265 85.483 53.81 77.696 94.903Z"
      />
      <Rect
        width={165.385}
        height={94.008}
        x={97.803}
        y={147.862}
        fill="#796628"
        rx={40}
        transform="rotate(10.731 97.803 147.862)"
      />
      <Circle
        cx={133.175}
        cy={201.964}
        r={10.881}
        fill="#fff"
        transform="rotate(10.731 133.175 201.964)"
      />
      <Circle
        cx={207.58}
        cy={216.065}
        r={10.881}
        fill="#fff"
        transform="rotate(10.731 207.58 216.065)"
      />
      <Path
        fill="#fff"
        d="M152.937 221.572a2.093 2.093 0 0 1 2.447-1.667l22.397 4.244a2.094 2.094 0 0 1 1.249 3.361l-1.496 1.881a11.817 11.817 0 0 1-10.392 4.408l-1.863-.18a13.78 13.78 0 0 1-2.577-.501l-.985-.29a11.908 11.908 0 0 1-8.015-7.934l-.71-2.319a2.079 2.079 0 0 1-.055-1.003Z"
      />
      <Path
        fill="#F4CC4E"
        d="M0 105.571a31.302 31.302 0 0 0 3.336-.122l16.557-1.486 9.566 13.596c13.29 18.887 42.041 16.306 51.754-4.646l6.991-15.083 16.558-1.486c23.001-2.065 35.142-28.256 21.852-47.143l-9.565-13.596 6.991-15.083c3.194-6.889 3.541-14.065 1.751-20.522H.001L0 105.571Z"
      />
      <Path
        fill="#BF9F3C"
        d="M74.774 24.825c9.067 15.432 3.906 35.293-11.526 44.36s-35.293 3.907-44.36-11.526C9.82 42.227 14.98 22.366 30.413 13.3c15.433-9.067 35.294-3.907 44.36 11.526Z"
      />
      <Path
        fill="#fff"
        d="M35.36 54.24a8.604 8.604 0 0 1-3.02-.52 7.22 7.22 0 0 1-2.4-1.52 7.137 7.137 0 0 1-1.6-2.3c-.373-.88-.56-1.847-.56-2.9s.187-2.02.56-2.9c.387-.88.92-1.647 1.6-2.3a7.181 7.181 0 0 1 2.42-1.5c.92-.36 1.927-.54 3.02-.54 1.213 0 2.307.213 3.28.64a6.305 6.305 0 0 1 2.48 1.84l-2.08 1.92c-.48-.547-1.013-.953-1.6-1.22a4.4 4.4 0 0 0-1.92-.42c-.653 0-1.253.107-1.8.32a4.08 4.08 0 0 0-1.42.92c-.4.4-.713.873-.94 1.42a4.969 4.969 0 0 0-.32 1.82c0 .667.107 1.273.32 1.82.227.547.54 1.02.94 1.42.4.4.873.707 1.42.92.547.213 1.147.32 1.8.32.693 0 1.333-.133 1.92-.4.587-.28 1.12-.7 1.6-1.26l2.08 1.92a6.484 6.484 0 0 1-2.48 1.86c-.973.427-2.073.64-3.3.64Zm14.288-11.16c.853 0 1.613.173 2.28.52.68.333 1.213.853 1.6 1.56.387.693.58 1.587.58 2.68V54h-3.12v-5.68c0-.867-.193-1.507-.58-1.92-.373-.413-.907-.62-1.6-.62-.493 0-.94.107-1.34.32-.387.2-.693.513-.92.94-.213.427-.32.973-.32 1.64V54h-3.12V39.16h3.12v7.06l-.7-.9c.387-.72.94-1.273 1.66-1.66s1.54-.58 2.46-.58ZM63.536 54v-2.1l-.2-.46v-3.76c0-.667-.207-1.187-.62-1.56-.4-.373-1.02-.56-1.86-.56-.573 0-1.14.093-1.7.28a4.337 4.337 0 0 0-1.4.72l-1.12-2.18c.587-.413 1.293-.733 2.12-.96a9.487 9.487 0 0 1 2.52-.34c1.64 0 2.913.387 3.82 1.16.907.773 1.36 1.98 1.36 3.62V54h-2.92Zm-3.28.16c-.84 0-1.56-.14-2.16-.42-.6-.293-1.06-.687-1.38-1.18a2.985 2.985 0 0 1-.48-1.66c0-.64.153-1.2.46-1.68.32-.48.82-.853 1.5-1.12.68-.28 1.567-.42 2.66-.42h2.86v1.82h-2.52c-.733 0-1.24.12-1.52.36-.267.24-.4.54-.4.9 0 .4.153.72.46.96.32.227.753.34 1.3.34.52 0 .987-.12 1.4-.36a2.17 2.17 0 0 0 .9-1.1l.48 1.44c-.227.693-.64 1.22-1.24 1.58-.6.36-1.373.54-2.32.54Zm13.424 0c-1.267 0-2.254-.32-2.96-.96-.707-.653-1.06-1.62-1.06-2.9v-9.44h3.12v9.4c0 .453.12.807.36 1.06.24.24.567.36.98.36.493 0 .913-.133 1.26-.4l.84 2.2c-.32.227-.707.4-1.16.52-.44.107-.9.16-1.38.16ZM68 45.88v-2.4h7.46v2.4H68ZM86.095 54l-3.88-10.76h2.94l3.22 9.26h-1.4l3.36-9.26h2.64l3.26 9.26h-1.4l3.32-9.26h2.76L97.015 54h-3.02l-2.86-7.94h.92L89.095 54h-3Zm16.271 0V43.24h3.12V54h-3.12Zm1.56-12.26c-.574 0-1.04-.167-1.4-.5a1.622 1.622 0 0 1-.54-1.24c0-.493.18-.907.54-1.24.36-.333.826-.5 1.4-.5.573 0 1.04.16 1.4.48.36.307.54.707.54 1.2 0 .52-.18.953-.54 1.3-.347.333-.814.5-1.4.5Zm8.855 12.42c-1.266 0-2.253-.32-2.96-.96-.706-.653-1.06-1.62-1.06-2.9v-9.44h3.12v9.4c0 .453.12.807.36 1.06.24.24.567.36.98.36.494 0 .914-.133 1.26-.4l.84 2.2c-.32.227-.706.4-1.16.52-.44.107-.9.16-1.38.16Zm-5.68-8.28v-2.4h7.46v2.4h-7.46Zm16.512-2.8c.853 0 1.613.173 2.28.52.68.333 1.213.853 1.6 1.56.386.693.58 1.587.58 2.68V54h-3.12v-5.68c0-.867-.194-1.507-.58-1.92-.374-.413-.907-.62-1.6-.62a2.8 2.8 0 0 0-1.34.32c-.387.2-.694.513-.92.94-.214.427-.32.973-.32 1.64V54h-3.12V39.16h3.12v7.06l-.7-.9c.386-.72.94-1.273 1.66-1.66s1.54-.58 2.46-.58ZM34.42 86.42c-1.657 0-3.185-.303-4.585-.91-1.377-.63-2.508-1.517-3.395-2.66l3.15-3.78c.677.887 1.388 1.563 2.135 2.03a4.649 4.649 0 0 0 2.415.665c2.31 0 3.465-1.353 3.465-4.06V66.05h-8.61V61.5H43.24v15.89c0 3.033-.747 5.297-2.24 6.79-1.493 1.493-3.687 2.24-6.58 2.24Zm22.995-.14c-2.006 0-3.791-.42-5.355-1.26-1.54-.84-2.765-1.983-3.675-3.43-.886-1.47-1.33-3.138-1.33-5.005 0-1.89.444-3.558 1.33-5.005a9.453 9.453 0 0 1 3.675-3.43c1.564-.84 3.349-1.26 5.355-1.26 1.984 0 3.757.42 5.32 1.26 1.564.817 2.789 1.948 3.675 3.395.887 1.447 1.33 3.127 1.33 5.04 0 1.867-.443 3.535-1.33 5.005-.886 1.447-2.111 2.59-3.674 3.43-1.564.84-3.337 1.26-5.32 1.26Zm0-4.48c.91 0 1.727-.21 2.45-.63a4.514 4.514 0 0 0 1.715-1.785c.42-.793.63-1.727.63-2.8 0-1.097-.21-2.03-.63-2.8A4.514 4.514 0 0 0 59.865 72c-.723-.42-1.54-.63-2.45-.63-.91 0-1.726.21-2.45.63-.723.42-1.306 1.015-1.75 1.785-.42.77-.63 1.703-.63 2.8 0 1.073.21 2.007.63 2.8.444.77 1.027 1.365 1.75 1.785.724.42 1.54.63 2.45.63Zm21.92 4.48c-1.563 0-2.963-.303-4.2-.91-1.213-.607-2.158-1.528-2.835-2.765-.676-1.26-1.015-2.858-1.015-4.795V67.17h5.46v9.835c0 1.563.327 2.718.98 3.465.677.723 1.622 1.085 2.835 1.085.84 0 1.587-.175 2.24-.525.654-.373 1.167-.933 1.54-1.68.373-.77.56-1.727.56-2.87v-9.31h5.46V86h-5.18v-5.18l.945 1.505c-.63 1.307-1.563 2.298-2.8 2.975-1.213.653-2.543.98-3.99.98ZM95.418 86V67.17h5.215v5.32l-.735-1.54c.56-1.33 1.459-2.333 2.695-3.01 1.237-.7 2.742-1.05 4.515-1.05v5.04a6.39 6.39 0 0 0-.63-.035 4.801 4.801 0 0 0-.595-.035c-1.493 0-2.706.432-3.64 1.295-.91.84-1.365 2.158-1.365 3.955V86h-5.46Zm26.416-19.11c1.493 0 2.823.303 3.99.91 1.19.583 2.123 1.493 2.8 2.73.677 1.213 1.015 2.777 1.015 4.69V86h-5.46v-9.94c0-1.517-.338-2.637-1.015-3.36-.653-.723-1.587-1.085-2.8-1.085-.863 0-1.645.187-2.345.56-.677.35-1.213.898-1.61 1.645-.373.747-.56 1.703-.56 2.87V86h-5.46V67.17h5.215v5.215l-.98-1.575a6.977 6.977 0 0 1 2.905-2.905c1.26-.677 2.695-1.015 4.305-1.015ZM134.588 86V67.17h5.46V86h-5.46Zm2.73-21.455c-1.003 0-1.82-.292-2.45-.875-.63-.583-.945-1.307-.945-2.17s.315-1.587.945-2.17c.63-.583 1.447-.875 2.45-.875 1.004 0 1.82.28 2.45.84.63.537.945 1.237.945 2.1 0 .91-.315 1.668-.945 2.275-.606.583-1.423.875-2.45.875Zm17.143 21.735c-2.147 0-4.037-.42-5.67-1.26-1.61-.84-2.859-1.983-3.745-3.43-.887-1.47-1.33-3.138-1.33-5.005 0-1.89.431-3.558 1.295-5.005a9.258 9.258 0 0 1 3.605-3.43c1.516-.84 3.231-1.26 5.145-1.26 1.843 0 3.5.397 4.97 1.19a8.605 8.605 0 0 1 3.535 3.36c.863 1.447 1.295 3.185 1.295 5.215 0 .21-.012.455-.035.735l-.07.735h-15.295V74.94h12.425l-2.1.945c0-.98-.199-1.832-.595-2.555a4.224 4.224 0 0 0-1.645-1.68c-.7-.42-1.517-.63-2.45-.63-.934 0-1.762.21-2.485.63-.7.397-1.249.968-1.645 1.715-.397.723-.595 1.587-.595 2.59v.84c0 1.027.221 1.937.665 2.73a4.73 4.73 0 0 0 1.925 1.785c.84.397 1.82.595 2.94.595 1.003 0 1.878-.152 2.625-.455a6.384 6.384 0 0 0 2.1-1.365l2.905 3.15c-.864.98-1.949 1.738-3.255 2.275-1.307.513-2.812.77-4.515.77Z"
      />
    </G>
  </Svg>
);
export default ChatButton;
