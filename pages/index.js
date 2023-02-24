import Carousal from "../components/Carousal"
import Navbar from "../components/navbar"
import Header from "../components/header"
import Director2 from "../components/director2"
import Events from "../components/events"
import Collab from "../components/collab"
import Faq from "../components/accboot"
import Footer from "../components/footer"
export default function Index() {
    return(<>
      <div className="flex-col">
<div><Navbar/></div>
<div><Header/></div>
<div className="h-[350px] mt-[2px] "><Carousal/></div>
<Director2/>
<Events/>
<Collab/>
<Footer/>
      </div>
    </>)
}
