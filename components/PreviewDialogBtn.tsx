import React from 'react'
import { Button } from './ui/button'
import { MdPreview } from "react-icons/md"

function PreviewDialogBtn() {
    return (
        <Button variant={"outline"} className="gap-2 cursor-pointer">
            <MdPreview className="!h-6 !w-6"/>
            Preview
        </Button>
    )
}

export default PreviewDialogBtn
