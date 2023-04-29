
interface Props {
    children: React.ReactNode
}

function DashboardContainer({children}: Props) {
  
  return (
    <div style={{ color: "blue", padding: "10px" }}>
      <p>Layout dashboard</p>
      {children}
    </div>
  );
}

export default DashboardContainer;