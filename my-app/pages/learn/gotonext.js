import Link from "next/link";

export default function redirect() {
    return (
        <div>
            <Link href="/learn/next">
                Redirect to /learn/next
            </Link>
        </div>
    )
}