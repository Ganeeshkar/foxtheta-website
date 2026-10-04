export default function MotionControls({ motion, steps, label }) {
  return <div className="motion-controls">
    <div className="motion-controls__steps" role="group" aria-label={`${label} stages`}>
      {steps.map((step, index) => <button type="button" key={step.label}
        aria-pressed={motion.active === index} onClick={() => motion.select(index)}>
        <span className="motion-controls__number">0{index + 1}</span>{step.label}
      </button>)}
    </div>
    <button type="button" className="motion-controls__play" onClick={motion.toggle}
      aria-label={`${motion.paused ? "Play" : "Pause"} ${label} animation`}>
      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">{motion.paused
        ? <path d="M3 1L11 6L3 11Z" fill="currentColor" />
        : <path d="M3 1V11M9 1V11" stroke="currentColor" strokeWidth="2" />}</svg>
    </button>
  </div>;
}
