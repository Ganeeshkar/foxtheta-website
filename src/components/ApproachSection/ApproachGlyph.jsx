import { Plate } from "../MotionDiagram/IsoParts";
import { pathOf, polygon, project } from "../MotionDiagram/iso";

// One small construction drawing per commitment. They draw in each time the
// row enters the viewport and reset once it leaves.
function Pilot() {
  return <>
    <Plate size={40} z={0} depth={6} tone="white" />
    <path d={pathOf([[-40, 14, 0], [40, 14, 0]])} stroke="#b9d3c0" strokeWidth=".7" strokeDasharray="2 3" fill="none" />
    <g transform={`translate(${project(-14, 22)[0]} ${project(-14, 22)[1]})`}><Plate size={8} z={14} depth={14} tone="white" /></g>
    <g className="approach-glyph__rise" transform={`translate(${project(16, -8)[0]} ${project(16, -8)[1]})`}><Plate size={8} z={36} depth={36} tone="green" /></g>
    <text x={-110} y={20}>BASELINE</text>
    <text x={project(16, -8)[0] + 18} y={project(16, -8)[1] - 30}>PILOT</text>
  </>;
}

function Production() {
  return <>
    {[0, 1, 2].map(i => <g key={i} className={`approach-glyph__layer approach-glyph__layer--${i}`}>
      <Plate size={36} z={i * 6} depth={5} tone={i === 1 ? "violet" : i === 2 ? "glass" : "white"} />
    </g>)}
    <g className="approach-glyph__pins" fill="none" stroke="#a8c9b2" strokeWidth=".7" strokeDasharray="2 3">
      {[[-36, 36], [36, 36], [36, -36]].map(([x, y]) => <polyline key={`${x}${y}`} points={polygon([[x, y, -4], [x, y, 34]])} />)}
    </g>
  </>;
}

function Handover() {
  const left = project(-46, 18), right = project(30, -40);
  return <>
    <g transform={`translate(${left[0]} ${left[1]})`}><Plate size={26} z={0} depth={5} tone="green" /></g>
    <g transform={`translate(${right[0]} ${right[1]})`}>
      <polygon points={polygon([[-30, -30, 0], [30, -30, 0], [30, 30, 0], [-30, 30, 0]])} fill="none" stroke="#9fc4aa" strokeWidth=".8" strokeDasharray="3 3" />
      <Plate size={26} z={0} depth={5} tone="white" />
    </g>
    <path d={pathOf([[-46, 18, 1], [-46, -40, 1], [30, -40, 1]])} stroke="#93c3a2" strokeWidth=".8" strokeDasharray="2 4" fill="none" />
    <g className="approach-glyph__move" style={{ "--mid-x": `${project(0, -58)[0]}px`, "--mid-y": `${project(0, -58)[1]}px`, "--move-x": `${right[0] - left[0]}px`, "--move-y": `${right[1] - left[1]}px` }}>
      <g transform={`translate(${left[0]} ${left[1]})`}><Plate size={10} z={18} depth={18} tone="green" /></g>
    </g>
    <text x={left[0] - 22} y={left[1] + 42}>BUILT</text>
    <text x={right[0] + 30} y={right[1] + 34}>YOURS</text>
  </>;
}

const drawings = [Pilot, Production, Handover];

export default function ApproachGlyph({ index }) {
  const Drawing = drawings[index];
  return <svg className={`approach-glyph approach-glyph--${index}`} viewBox="-120 -64 240 120" aria-hidden="true" focusable="false"><Drawing /></svg>;
}
