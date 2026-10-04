import { useEffect, useId, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import useDiagramMotion from "./useDiagramMotion";
import { SceneFooter } from "./IsoParts";
import "./ServiceScene.css";

gsap.registerPlugin(MotionPathPlugin);
const stages = [{ label: "Receive", time: 0 }, { label: "Process", time: 2.7 }, { label: "Deliver", time: 5.2 }];
const paths = {
  "ai-agent-development": ["M158 184H232", "M386 160H409V106H442", "M386 183H442", "M386 207H409V269H442", "M310 247V339"],
  "rag-knowledge-systems": ["M144 121H174V180L226 210", "M144 290H174V253L226 223", "M366 212L408 188H440", "M481 274V340H338"],
  "workflow-automation": ["M300 95V151", "M300 211V244L152 292V337", "M300 211V244L448 292V337"],
  integrations: ["M128 127L298 226", "M477 127L308 226", "M300 238L128 337", "M300 238L476 337"],
  "custom-ai-applications": ["M103 177H261", "M305 223V264H447V302"],
  "web-mobile-applications": ["M317 202H433V244", "M447 347H280V284"],
};

function makeTimeline(root) {
  const q = s => root.querySelectorAll(s);
  const tl = gsap.timeline({ paused:true, repeat:-1, defaults:{ease:"power2.inOut"} });
  q(".service-packet").forEach((node,index)=>{
    const route = node.dataset.path;
    for(let loop=0;loop<3;loop++) {
      const t = (index%2)*.65 + loop*2.7;
      tl.fromTo(node,{opacity:0},{opacity:1,duration:.2,immediateRender:false},t)
        .fromTo(node,{motionPath:{path:route,start:0,end:0}},{motionPath:{path:route,start:0,end:1},duration:2,ease:"none",immediateRender:false},t)
        .to(node,{opacity:0,duration:.2},t+1.8);
    }
  });
  tl.fromTo(q(".service-plane"),{y:0},{y:-13,duration:1.8,stagger:.15},.3)
    .fromTo(q(".service-process"),{opacity:.2},{opacity:1,duration:.6,stagger:.12},2.7)
    .fromTo(q(".service-result"),{opacity:.16,y:5},{opacity:1,y:0,duration:.8,stagger:.12},5.2)
    .to(q(".service-plane"),{y:0,duration:1.2},7.1)
    .to(q(".service-process"),{opacity:.2,duration:.7},7.5)
    .to(q(".service-result"),{opacity:.16,y:5,duration:.7},7.8);
  return tl;
}

function Box({x,y,label,accent=false}) {
  return <g transform={`translate(${x} ${y})`}>
    <path d="M-42 0L0 -24L42 0L0 24Z" fill={accent?"var(--figure-fill)":"#fbfefb"} stroke="var(--figure-stroke)" />
    <path d="M-42 0V34L0 58V24Z" fill="var(--figure-tint)" stroke="var(--figure-stroke)" />
    <path d="M0 24L42 0V34L0 58Z" fill={accent?"var(--figure-color)":"#e6f3e9"} stroke="var(--figure-stroke)" />
    <path d="M-30 18L-10 29M-30 26L-10 37M12 29L31 18M12 37L31 26" stroke="var(--figure-stroke)" />
    <text x="0" y="-42" textAnchor="middle">{label}</text>
  </g>;
}

function Check({x,y}) {return <g transform={`translate(${x} ${y})`}><g className="service-result"><circle r="12" fill="var(--figure-color)" /><path d="M-5 0L-1 4L6 -5" fill="none" stroke="#376547" strokeWidth="1.5" /></g></g>;}

function Agents() {
  return <>
    <path d="M40 318H565M204 43V414M415 43V414" fill="none" stroke="#d9e8dc" strokeDasharray="2 5" />
    <g transform="translate(57 142)"><rect x="8" y="-8" width="101" height="85" fill="#f5faf4" stroke="#b4cdb9" /><rect width="101" height="85" fill="white" stroke="var(--figure-stroke)" /><text x="13" y="22">REQUEST</text><path d="M13 36H86M13 47H76M13 58H86M13 69H57" stroke="#b3caba" /></g>
    <text x="310" y="64" textAnchor="middle">AGENT ORCHESTRATION</text>
    <path d="M310 76V102" stroke="#adcbb6" strokeDasharray="3 4" />
    {[222,190,158].map((y,index)=><g key={y}><g className="service-plane">
      <path d={`M232 ${y}V${y+20}C232 ${y+51} 388 ${y+51} 388 ${y+20}V${y}`} fill={index===1?"#d8f6e1":"#eff9f0"} stroke="#8fb79b" />
      <ellipse cx="310" cy={y} rx="78" ry="25" fill={index===2?"#d0f4d9":"#fafffa"} stroke="#8fb79b" />
      <ellipse cx="310" cy={y} rx="59" ry="17" fill="none" stroke="#b5d6bf" strokeDasharray="2 3" />
      <path d={`M245 ${y+16}V${y+25}M251 ${y+20}V${y+29}M257 ${y+23}V${y+32}`} stroke="#8fbd9e" />
    </g></g>)}
    <g className="service-process"><path d="M279 137L310 120L341 137L310 154Z" fill="#73dd94" stroke="#80b68f" /><path d="M279 137V146L310 163L341 146V137L310 154Z" fill="#b9ecc8" stroke="#80b68f" /><path d="M298 137L307 142L322 132" fill="none" stroke="white" strokeWidth="2" /></g>
    {[["SEARCH",106],["UPDATE",184],["NOTIFY",269]].map(([label,y],index)=><g key={label} transform={`translate(442 ${y-25})`}><path d="M5 -5H98V45H93" fill="#edf4ef" stroke="#bfd3c5" /><rect width="93" height="50" fill={index===1?"#f6e9fa":"white"} stroke={index===1?"#c6a9d2":"#9abda5"} /><circle cx="15" cy="16" r="4" fill={index===1?"#dbaeea":"#a7dcb7"} /><text x="12" y="37">{label}</text><g className="service-process"><path d="M29 13H76M29 20H63" stroke="#a4c4af" /></g></g>)}
    <g transform="translate(222 339)"><rect width="176" height="55" fill="#fff" stroke="#aac9b3" /><text x="16" y="21">REVIEW BEFORE ACTION</text><g className="service-result"><path d="M16 34H119M16 43H102" stroke="#94b69f" /></g></g><Check x={382} y={374} />
  </>;
}

function Knowledge() {
  return <>
    <path d="M173 108L298 36L422 108V287L298 359L173 287Z" fill="none" stroke="#ddcde5" strokeDasharray="3 5" />
    <text x="298" y="28" textAnchor="middle">YOUR KNOWLEDGE, INDEXED</text>
    {[[93,"DOCUMENTS"],[260,"INTERNAL DATA"]].map(([y,label])=><g key={label} transform={`translate(40 ${y})`}><path d="M9 -9H104V68H95" fill="#f8f3fa" stroke="#d3bedb" /><rect width="95" height="78" fill="white" stroke="#b8a2c3" /><text x="9" y="19" style={{fontSize:9}}>{label}</text><path d="M10 32H82M10 43H72M10 54H82M10 65H57" stroke="#cbb8d5" /></g>)}
    {[270,236,202].map((y,index)=><g key={y}><g className="service-plane"><path d={`M221 ${y}L298 ${y-44}L375 ${y}L298 ${y+44}Z`} fill={index===2?"#f6eafa":"#fbf8fc"} stroke="#ba9ec7" /><path d={`M221 ${y}V${y+9}L298 ${y+53}L375 ${y+9}V${y}L298 ${y+44}Z`} fill={index===1?"#e0bde9":"#eddbf3"} stroke="#ba9ec7" />{index===2&&<g className="service-process">{[-1,0,1].flatMap(x=>[-1,0,1].map(z=><path key={`${x}-${z}`} d={`M${298+(x-z)*18} ${y+(x+z)*10-7}l12 7-12 7-12-7Z`} fill={x===z?"#ca8edd":"#e8cef2"} stroke="#c5a4d2" strokeWidth=".6" />))}</g>}</g></g>)}
    <g transform="translate(441 137)"><rect x="7" y="-7" width="122" height="139" fill="#f7f1fa" stroke="#d7c6df" /><rect width="122" height="139" fill="white" stroke="#bea6cb" /><text x="12" y="22">ANSWER</text><g className="service-result"><path d="M12 41H107M12 54H95M12 67H106M12 80H71" stroke="#ad93bb" /><rect x="11" y="96" width="100" height="29" fill="#ecdaf3" /><text x="20" y="115" style={{fontSize:10}}>SOURCE / 01</text></g></g>
    <g transform="translate(204 365)"><rect width="190" height="29" fill="#f7f0fa" stroke="#d4bddf" /><text x="95" y="19" textAnchor="middle">PERMISSION-AWARE RETRIEVAL</text></g>
  </>;
}

function Automation() {
  return <>
    <g transform="translate(245 42)"><rect width="110" height="53" fill="white" stroke="var(--figure-stroke)" /><path d="M12 16H80M12 25H93M12 34H69" stroke="#a0bba7" /><text x="55" y="-14" textAnchor="middle">INCOMING REQUEST</text></g>
    <g className="service-plane"><path d="M300 119L373 161L300 203L227 161Z" fill="var(--figure-tint)" stroke="var(--figure-stroke)" /><path d="M227 161V177L300 219V203ZM300 203L373 161V177L300 219Z" fill="var(--figure-fill)" stroke="var(--figure-stroke)" /><path d="M282 160L294 172L322 145" fill="none" stroke="var(--figure-stroke)" strokeWidth="2" /></g>
    <text x="406" y="170">VALIDATE + ROUTE</text>
    <g className="service-process"><rect x="148" y="251" width="87" height="23" fill="#e4f7e9" /><text x="191" y="267" textAnchor="middle">RULE MATCH</text><rect x="357" y="251" width="85" height="23" fill="#f4e3fa" /><text x="399" y="267" textAnchor="middle">EXCEPTION</text></g>
    <Box x={152} y={339} label="AUTOMATED ACTION" accent /><Box x={448} y={339} label="HUMAN REVIEW" />
    <Check x={191} y={332} /><Check x={487} y={332} />
  </>;
}

function Integrations() {
  return <>
    <path d="M300 53L545 194V304L300 445L55 304V194Z" fill="none" stroke="#d9e8e0" strokeDasharray="3 5" />
    <Box x={126} y={104} label="CRM" /><Box x={475} y={104} label="ERP" /><Box x={126} y={314} label="DATA WAREHOUSE" /><Box x={475} y={314} label="INTERNAL TOOLS" />
    <g transform="translate(300 225)"><g className="service-plane"><path d="M-77 0L0 -44L77 0L0 44Z" fill="var(--figure-tint)" stroke="var(--figure-stroke)" /><path d="M-77 0V21L0 65V44ZM0 44L77 0V21L0 65Z" fill="var(--figure-fill)" stroke="var(--figure-stroke)" /><g className="service-process"><path d="M-37 0L0 -21L37 0L0 21Z" fill="var(--figure-color)" /><path d="M-13 -1L0 -9L13 -1M0 -9V10" stroke="white" fill="none" /></g></g></g>
    <text x="300" y="156" textAnchor="middle">CONTROLLED INTERFACE</text><Check x={166} y={313} /><Check x={515} y={313} />
    <g className="service-process"><rect x="220" y="372" width="160" height="24" fill="#eaf6ee" /><text x="300" y="388" textAnchor="middle">VALIDATE / SYNC / VERIFY</text></g>
  </>;
}

function Application() {
  return <>
    <rect x="129" y="71" width="352" height="296" fill="#f6f0fa" stroke="var(--figure-stroke)" />
    <g className="service-plane"><rect x="112" y="53" width="352" height="296" fill="#fff" stroke="var(--figure-stroke)" /><path d="M112 84H464M204 84V349" stroke="#d8c8df" /><g fill="#dcc7e7"><circle cx="127" cy="68" r="3" /><circle cx="137" cy="68" r="3" /><circle cx="147" cy="68" r="3" /></g><text x="450" y="72" textAnchor="end">YOUR APPLICATION</text>
      <path d="M128 115H183M128 133H171M128 151H182M128 199H174M128 217H180M128 235H164" stroke="#cdb9d8" />
      <rect x="221" y="101" width="225" height="46" fill="#faf6fc" stroke="#e1d5e8" /><text x="236" y="121">DOCUMENT WORKSPACE</text><path d="M235 134H355" stroke="#d0bed9" />
      <g className="service-process"><rect x="221" y="166" width="103" height="66" fill="var(--figure-tint)" /><rect x="337" y="166" width="109" height="66" fill="#eff9f0" /><path d="M235 185H305M235 196H290M351 185H429M351 196H412" stroke="#b0c3b2" /><text x="235" y="221">EXTRACT</text><text x="351" y="221">VERIFY</text></g>
      <g className="service-result"><path d="M224 264H411M224 279H389M224 294H422" stroke="#c5b0d1" /><rect x="222" y="311" width="105" height="23" fill="var(--figure-fill)" /><text x="275" y="326" textAnchor="middle">READY FOR REVIEW</text></g>
    </g>
    <g transform="translate(39 166)"><rect width="65" height="80" fill="white" stroke="#b4cbbb" /><path d="M12 21H51M12 33H48M12 45H51M12 57H36" stroke="#aac4b1" /></g><Check x={447} y={323} />
  </>;
}

function Devices() {
  return <>
    <g transform="translate(60 88)"><rect width="334" height="218" rx="5" fill="white" stroke="var(--figure-stroke)" /><path d="M0 24H334M0 194H334" stroke="#bdd3c4" /><circle cx="15" cy="12" r="3" fill="var(--figure-color)" /><text x="317" y="17" textAnchor="end">DESKTOP</text><path d="M143 218V241H191V218M111 243H221" fill="#eff8f1" stroke="var(--figure-stroke)" />
      <rect x="18" y="42" width="77" height="131" fill="var(--figure-tint)" /><path d="M31 62H80M31 80H68M31 98H80M31 116H71" stroke="#aac9b1" />
      <g className="service-process"><rect x="110" y="42" width="205" height="46" fill="#eef8f0" /><path d="M123 58H251M123 71H285" stroke="#b1cbb8" /></g>
      <g className="service-result">{[0,1,2].map(i=><g key={i} transform={`translate(${110+i*71} 104)`}><rect width="62" height="69" fill={i===1?"#f4e6fa":"#eff9ef"} stroke="#c7ddce" /><path d="M10 17H50M10 27H38" stroke="#b2cdbb" /><rect x="10" y="43" width="32" height="14" fill="var(--figure-fill)" /></g>)}</g>
    </g>
    <g className="service-plane"><rect x="414" y="194" width="102" height="194" rx="12" fill="#fff" stroke="var(--figure-stroke)" /><path d="M443 201H487M455 378H479" stroke="#adc4b5" strokeWidth="3" strokeLinecap="round" /><text x="465" y="231" textAnchor="middle">MOBILE</text><g className="service-result"><rect x="427" y="246" width="76" height="43" fill="var(--figure-tint)" /><path d="M438 259H492M438 270H475" stroke="#adc8b5" /><rect x="427" y="301" width="76" height="58" fill="#f3e8f8" /><path d="M438 315H491M438 328H477" stroke="#c6afcf" /></g></g>
    <Check x={512} y={192} />
  </>;
}

function Diagram({slug, labels, onStage}) {
  const root=useRef(null);
  const id=useId();
  const motion=useDiagramMotion(root,makeTimeline,stages);
  useEffect(()=>{onStage?.(motion.active);},[motion.active,onStage]);
  const Scene={"ai-agent-development":Agents,"rag-knowledge-systems":Knowledge,"workflow-automation":Automation,integrations:Integrations,"custom-ai-applications":Application,"web-mobile-applications":Devices}[slug];
  return <div ref={root} className={`service-figure service-figure--${slug}`}>
    <svg viewBox="0 0 600 450" role="img" aria-labelledby={id}><title id={id}>Illustrative {slug.replaceAll('-',' ')} workflow</title>
      <g fill="none" stroke="var(--figure-stroke)" strokeDasharray="3 5">{paths[slug].map(d=><path key={d} d={d} />)}</g>
      {paths[slug].flatMap(d=>[0,1].map(i=><path key={`${d}-${i}`} data-path={d} className="service-packet" d="M-5 0L0 -3L5 0L0 3Z" fill="var(--figure-color)" opacity="0" />))}
      <Scene />
    </svg>
    <SceneFooter caption="ILLUSTRATIVE WORKFLOW" labels={labels ?? stages.map(stage=>stage.label)} motion={motion} name="service" />
  </div>;
}

export default function ServiceScene({slug, labels, onStage}) {
  return <Diagram slug={slug} labels={labels} onStage={onStage} />;
}
