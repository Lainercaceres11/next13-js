import {Roboto} from '@next/font/google';

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "optional"
})

interface Props {
    children: React.ReactNode
}

function DashboardContainer({children}: Props) {
  
  return (
    <div style={{ color: "red", padding: "10px" }} className={roboto.className}>
      {children}
    </div>
  );
}

export default DashboardContainer;