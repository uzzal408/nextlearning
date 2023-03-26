import Link from "next/link";
import { useRouter } from "next/router";
export default function product(){
    const router = useRouter();
    const handleRedirect = ()=>{
        router.push('/')
    }
    const name = 'dynamic product';
    return (
        <div>
            <h1> This is Product Landing Page</h1>
            <h2>
                <Link href='products/product-one'>Product ONe</Link>
            </h2>
            <h2>
                <Link href='products/product-two'>Product Two</Link>
            </h2>
            <h2>
                <Link href='products/product-three'>Product Three</Link>
            </h2>
            <h2>
                <Link href={`products/${name}`}>Product Three</Link>
            </h2>
            <button onClick={handleRedirect}>Go to Homepage</button>
        </div>
    )
}