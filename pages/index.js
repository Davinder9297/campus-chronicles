import Carousal from "../components/Carousal"
import Director2 from "../components/director2"
import Events from "../components/events"
import Collab from "../components/collab"
import Faq from "../components/faq"
import Upcomingevents from "../components/upcoming"
export default function Index() {
    return(<>
      <div className="flex-col">
<Header/>
<div className="h-[350px] mt-[2px] "><Carousal/></div>
<Director2/>
<Events/>
<div className="flex justify-around  h-auto">
  <Faq/>
<Upcomingevents/>
</div>

<Collab/>
      </div>
    </>)
}
