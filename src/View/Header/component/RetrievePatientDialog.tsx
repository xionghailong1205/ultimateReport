import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import DialogTriggerButton from "./DialogTriggerButton"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import CustomCalendar from "./CustomCalendar"
import { ReactNode } from "react"
import { DivProp } from "@/View/Content/component/type"

const RetrievePatientDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>
                    <DialogTriggerButton
                        buttonName="检索病人"
                    />
                </div>
            </DialogTrigger>
            <DialogContent
                style={{
                    maxWidth: "1000px"
                }}
            >
                <DialogHeader>
                    <DialogTitle>检索病人</DialogTitle>
                </DialogHeader>
                <div>
                    <Form />
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        {/* <Button type="button" variant="secondary">
                            Close
                        </Button> */}
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

const Form = () => {
    return (
        <Row>
            <CustomInput
                label="体检人员ID:"
                type="text"
                containerWidth={200}
                inputWidth={120}
            />
            <CustomInput
                label="人员姓名:"
                type="text"
                containerWidth={200}
                inputWidth={120}
            />
            <CustomInput
                label="体检编号:"
                type="text"
                containerWidth={200}
                inputWidth={120}
            />
        </Row>
        // <div>
        //     <CustomInput
        //         label="体检人员ID:"
        //         type="text"
        //         containerWidth={200}
        //         inputWidth={120}
        //     />
        //     {/* <div
        //         style={{
        //             display: "flex",
        //             width: "200px",
        //             alignItems: "center"
        //         }}
        //     >
        //         <Label
        //             style={{
        //                 fontSize: "14px",
        //                 // flex: 1,
        //             }}
        //         >
        //             人员姓名
        //         </Label>
        //         <Input
        //             type="text" placeholder="请输入..."
        //             style={{
        //                 maxWidth: "100px",
        //             }}
        //         />
        //     </div>
        //     <div
        //         style={{
        //             display: "flex",
        //             width: "200px",
        //             alignItems: "center"
        //         }}
        //     >
        //         <Label
        //             style={{
        //                 fontSize: "14px",
        //                 // flex: 1,
        //             }}
        //         >
        //             体检编号
        //         </Label>
        //         <Input
        //             type="text" placeholder="请输入..."
        //             style={{
        //                 maxWidth: "100px",
        //             }}
        //         />
        //     </div> */}
        //     {/* <div
        //         style={{
        //             display: "flex",
        //             width: "200px",
        //             alignItems: "center"
        //         }}
        //     >
        //         <Label
        //             style={{
        //                 fontSize: "14px",
        //                 // flex: 1,
        //             }}
        //         >
        //             体检日期
        //         </Label>
        //         <CustomCalendar />
        //     </div> */}
        // </div>
    )
}


type InputType = "text" | "date"
interface InputProp {
    type: InputType;
    label: string;
    containerWidth: number;
    inputWidth: number;
}

const CustomInput = ({
    label,
    type,
    containerWidth,
    inputWidth
}: InputProp) => {
    let SpecifiedInput = () => {
        return (
            <Input
                type="text" placeholder="请输入..."
            />
        )
    }

    switch (type) {
        case "text": {
            break
        }
        case "date": {
            break
        }
        default: {

        }
    }

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                width: `${containerWidth}px`
            }}
        >
            <Label
                style={{
                    fontSize: "14px",
                    flex: 1
                }}
            >
                {label}
            </Label>
            <div
                style={{
                    width: `${inputWidth}px`
                }}
            >
                <SpecifiedInput />
            </div>
        </div>
    )
}

interface RowProp extends DivProp {
    children: Array<ReactNode>
}

const Row = ({
    children,
    ...prop
}: RowProp) => {
    return (
        <div
            style={{
                display: "flex",
                ...prop.style
            }}
            {...prop}
        >
            {children}
        </div>
    )
}

export default RetrievePatientDialog