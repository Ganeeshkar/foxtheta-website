import { polygon } from "./iso";
import "./PrecisionScene.css";

export function Plate({ size = 74, z = 0, depth = 9, tone = "green", etched = false, className = "", w, h }) {
  const sx = w ?? size, sy = h ?? size;
  const corners = [[-sx,-sy,z],[sx,-sy,z],[sx,sy,z],[-sx,sy,z]];
  return <g className={className}>
    <polygon points={polygon([corners[3],corners[2],[sx,sy,z-depth],[-sx,sy,z-depth]])} className={`precision-face precision-face--${tone}-side`} />
    <polygon points={polygon([corners[2],corners[1],[sx,-sy,z-depth],[sx,sy,z-depth]])} className={`precision-face precision-face--${tone}-edge`} />
    <polygon points={polygon(corners)} className={`precision-face precision-face--${tone}`} />
    {etched && <g stroke="currentColor" fill="none" strokeWidth=".6" opacity=".45">
      {[-48,-24,0,24,48].filter(n => Math.abs(n) < Math.min(sx, sy) - 8).map(n => <g key={n}><polyline points={polygon([[n,-sy+10,z],[n,sy-10,z]])} /><polyline points={polygon([[-sx+10,n,z],[sx-10,n,z]])} /></g>)}
    </g>}
    {etched && [-36,0,36].flatMap(x => [-36,0,36].map(y => <polygon key={`${x}-${y}`} className="precision-cell" points={polygon([[x-7,y-7,z],[x+7,y-7,z],[x+7,y+7,z],[x-7,y+7,z]])} fill="var(--diagram-accent)" />))}
  </g>;
}

export function PlayIcon({ paused }) {
  return <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden="true">{paused
    ? <path d="M3 1L10 6L3 11Z" fill="currentColor" />
    : <path d="M3 1V11M9 1V11" stroke="currentColor" strokeWidth="2" />}</svg>;
}

// Shared caption bar: where the story is (step count, name, progress line)
// and the Play/Pause control. The progress line reads --scene-progress,
// which useDiagramMotion sets on the scene root every frame.
export function SceneFooter({ caption, labels, motion, name }) {
  return <div className="precision-scene__footer">
    <span className="precision-scene__progress" aria-hidden="true" />
    <span className="precision-scene__caption">{caption}</span>
    <span className="precision-scene__phase"><span className="precision-scene__count">0{motion.active + 1} / 0{labels.length}</span>{labels[motion.active]}</span>
    <button type="button" onClick={motion.toggle} aria-label={`${motion.paused ? "Play" : "Pause"} ${name} animation`}><PlayIcon paused={motion.paused} /></button>
  </div>;
}
