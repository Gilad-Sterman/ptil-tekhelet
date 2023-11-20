import { English } from "./English";
import { Hebrew } from "./Hebrew";

export function PageSelect({ selected }) {

    if (selected === 'heb') return <Hebrew />

    return <English />

}