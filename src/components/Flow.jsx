export default function Flow({ steps }) {
  return <div className="flow">{steps.map((step, index) => <span key={step} className="flow-item"><span className="node">{step}</span>{index < steps.length - 1 && <span className="wire"><i /></span>}</span>)}</div>;
}
