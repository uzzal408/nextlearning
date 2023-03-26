import { useRouter } from "next/router";
export default function ProductDetails(){
    const router = useRouter();
    const title = router.query.product_slug;
    return <h1> { title } </h1>
}