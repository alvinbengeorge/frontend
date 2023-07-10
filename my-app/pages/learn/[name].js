import { useRouter } from "next/router";

export default function test() {
    const router = useRouter();
    const { name } = router.query;

    return (
        <div>
            Hello {name}
        </div>
    )
}