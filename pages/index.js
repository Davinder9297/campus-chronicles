import Carousal from "../components/Carousal"
import Director2 from "../components/director2"
import Events from "../components/events"
import Collab from "../components/collab"
import Header from "../components/header"
export default function Index() {
    return(<>
      <div className="flex-col">
<Header/>
<div className="h-[350px] mt-[2px] "><Carousal/></div>
<Director2/>
<Events/>
<Collab/>

      </div>
    </>)
}
