import { ITreeConfig } from "./typings";

interface ICoordinates {
  x: number;
  y: number;
}

export const drawLinks = (
  s: ICoordinates,
  d: ICoordinates,
  treeConfig: ITreeConfig
): string => {
  const {
    horizontalLayout,
    nodeSettings: { height: height, width: width },
    linkSettings: { shape },
  } = treeConfig;
  if (shape === "orthogonal") {
    if (horizontalLayout) {
      return `M ${s.y} ${s.x + height / 2}
        L ${(s.y + d.y + width) / 2} ${s.x + height / 2},
        L  ${(s.y + d.y + width) / 2} ${d.x + height / 2},
          ${d.y + width} ${d.x + height / 2}`;
    } else {
      return `M ${s.x + width / 2} ${s.y}
        L ${s.x + width / 2} ${(s.y + d.y + height) / 2},
        L  ${d.x + width / 2} ${(s.y + d.y + height) / 2},
          ${d.x + width / 2} ${d.y + height} `;
    }
  } else {
    if (horizontalLayout) {
      return `M ${s.y} ${s.x + height / 2}
        C ${(s.y + d.y + width) / 2} ${s.x + height / 2},
          ${(s.y + d.y + width) / 2} ${d.x + height / 2},
          ${d.y + width} ${d.x + height / 2}`;
    } else {
      return `M ${s.x + width / 2} ${s.y}
        C ${s.x + width / 2} ${(s.y + d.y + height) / 2},
          ${d.x + width / 2} ${(s.y + d.y + height) / 2},
          ${d.x + width / 2} ${d.y + height} `;
    }
  }
};
