import Carousal from "../components/Carousal"
import Navbar from "../components/navbar"
import Header from "../components/header"
import Director from "../components/director"
import Events from "../components/events"
import Collab from "../components/collab"
import Faq from "../components/accboot"
export default function Index() {
    return(<>
      <div className="flex-col">
<div><Navbar/></div>
<div><Header/></div>
<div className="h-[500px] mt-[2px] "><Carousal/></div>
<Director/>
<Events/>
<Collab/>
      </div>
    </>)
}
