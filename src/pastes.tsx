import { JsxAttribute } from "typescript";
import {pastesJSON} from "./utils/pasteList"
export function PasteList (props:pastesJSON): JSX.Element {
    return (
    <>
        <p><b>{props.title}</b></p>
        <p>{props.time}</p>    
    </>
    )
}