import { GetFormById } from '@/actions/form'
import FormBuilder from '@/components/FormBuilder'
import React from 'react'

async function BuilderPage({ params }: {
    params: {
        id: string
    }
}) {
    const {id} = params
    const form = await GetFormById(Number(id))
    if (!form) {
        throw new Error("test Error")
    }
    return (
        <div className="h-full">
            <FormBuilder form={form} />
        </div>
    )
}

export default BuilderPage