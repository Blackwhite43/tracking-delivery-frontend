import { useRouter } from "next/router";

const preventDefault = f => e => {
    e.preventDefault()
    f(e)
}
export default function Login() {
    const router = useRouter();
    const handleSubmit = preventDefault(() => {
        router.push({
            pathname: '/',
            query: {plat_no: document.getElementById('plat_no').value},
        })
    })
    return (
        <div>
            <form onSubmit={handleSubmit}>
               <label htmlFor="plat_no">Plat No:</label>
               <input type="text" id="plat_no" name="plat_no" required />
               <button type="submit">Submit</button>
            </form>
        </div>
    )
}