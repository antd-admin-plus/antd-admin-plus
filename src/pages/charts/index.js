import LineChart from "components/Charts/LineChart"
// import FlowChart from "components/Charts/FlowChart"
import RelationChart from "components/Charts/RelationChart"


export default function Charts() {
  return (
    <div style={{ backgroundColor: "#fff", padding: 24, minHeight: 380 }}>
      {/* <LineChart></LineChart> */}
      {/* <FlowChart></FlowChart> */}
      <RelationChart></RelationChart>
    </div>
  )
}
