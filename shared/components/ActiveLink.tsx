import { CSSProperties } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const styles: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
}

interface Props {
    text: string,
    root: string,
    // children:React.ReactNode
}


export default function ActiveLink({ text, root }: Props) {
    const { asPath } = useRouter();

    return (
        <Link href={root}>
            <a style={asPath === root ? styles : undefined}>
                {text}
            </a>
        </Link>
    )
}