import Carousal from "../components/Carousal"
import Director2 from "../components/director2"
import Events from "../components/events"
import Collab from "../components/collab"
import Faq from "../components/faq"
import Upcomingevents from "../components/upcoming"
import Header from "../components/header"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Navbarres from "../components/navbarres"
import Resheader from "../components/resheader"

export default function Index() {
    return(<>
      <div className="flex-col h-screen overflow-y-auto scrollbar-thin   scrollbar-track-transparent scrollbar-thumb-transparent ">
        {/* <Navbar/> */}
        <Navbarres/>
        
      <div className="xsm:hidden"><Header/></div>
      <div className="hidden xsm:block" ><Resheader/></div>
      <div className="flex-col">

<div className="h-[350px] mt-[2px] xsm:h-auto"><Carousal/></div>
<Director2/>
<Events/>
<div className="flex justify-around  h-auto  xsm:block ">
  <Faq/>
<Upcomingevents/>
</div>

<Collab/>
<Footer/>
</div>
      </div>
    </>)
}
