import { ArrowRightCircleIcon as Icon } from "@heroicons/react/24/outline";
import Link from "next/link";


const BackButton = ({ text, href }: { text: string, href: string }) => {
    return (
        <Link href={href} className="flex gap-[2px] items-center hover:opacity-70">
            <Icon className="size-8" />
            <span className="text-sm">{text}</span>
        </Link>
    )
}


export default BackButton