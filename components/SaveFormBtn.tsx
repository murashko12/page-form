import React from 'react'
import { Button } from './ui/button'
import { HiSaveAs } from "react-icons/hi"

function SaveFormBtn() {
    return (
        <Button variant={"outline"} className="gap-2 cursor-pointer">
            <HiSaveAs className="!h-4 !w-4"/>
            Save
        </Button>
    )
}

export default SaveFormBtn
