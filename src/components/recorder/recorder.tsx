import { CirclePause, CirclePlay } from "lucide-react"
import { Button } from "../ui/button"
import React from "react"

function Recorder(){
    const [recording, setRecording] = React.useState(false)

    return <div className="flex h-full justify-center items-center">
        <Button variant={"ghost"} size={"icon"} className="rounded-full hover:text-gray-700" asChild onClick={()=>setRecording(state=>!state)}>
            {recording ?  <CirclePause className="size-32"/> :<CirclePlay className="size-32"/>}
        </Button>
    </div>
}

export default Recorder