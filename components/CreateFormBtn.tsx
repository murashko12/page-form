"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from './ui/dialog'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from './ui/form'

// import { toast } from './ui/use-toast'

import { zodResolver } from "@hookform/resolvers/zod"

import { BsFileEarmarkPlus } from "react-icons/bs"
import { ImSpinner2 } from "react-icons/im"
import { Button } from './ui/button'
import { Description } from '@radix-ui/react-dialog'
import { useForm } from 'react-hook-form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { toast } from 'sonner'
import { formSchema, formSchemaType } from '@/schemas/form'
import { CreateForm } from '@/actions/form'
import { useRouter } from 'next/navigation'

function CreateFormBtn() {

    const router = useRouter()

    const form = useForm<formSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            description: ''
        }
    })

    async function onSubmit(values: formSchemaType) {
        try {
            const formId = await CreateForm(values)
            toast.success(
                <>
                    <strong>Success</strong>
                    <div>Form created successfully</div>
                </>
            )
            router.push(`/builder/${formId}`)
            
        } catch (error) {
            toast.error(
                <>
                    <strong>Error</strong>
                    <div>Something went wrong, please try again later</div>
                </>
            )

        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button 
                    variant={"outline"}
                    className="group border border-primary/20 h-[190px] items-center justify-center flex flex-col hover:border-primary hover:cursor-pointer border-dashed gap-4 bg-background"
                >
                    <BsFileEarmarkPlus className="!h-[30px] !w-[30px] text-muted-foreground group-hover:text-primary"/>
                    <p className="font-bold text-xl text-muted-foreground group-hover:text-primary">Create new form</p>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create form</DialogTitle>
                    <DialogDescription>
                        Create a new form to start collecting responses
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea rows={5} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
                <DialogFooter>
                    <Button
                        onClick={form.handleSubmit(onSubmit)}
                        disabled={form.formState.isSubmitting} 
                        className="w-full mt-4"
                    >
                        {!form.formState.isSubmitting && <span>Save</span>}
                        {form.formState.isSubmitting && (
                            <ImSpinner2 className="animate-spin" />
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CreateFormBtn
