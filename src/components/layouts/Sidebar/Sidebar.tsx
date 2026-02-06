
import Menyu from "@/components/common/Menyu/Menyu"
import { Gamepad} from "lucide-react"





function Sidebar() {
    
  return (
    <div className="px-4 py-4 w-full max-w-72 border-r ">
      Siad
      <h1 className="font-bold text-2xl flex items-center justify-center gap-1 mb-4">
        <Gamepad size={40}/>Game Club
      </h1>

      <Menyu/>
    </div>
  )
}

export default Sidebar
