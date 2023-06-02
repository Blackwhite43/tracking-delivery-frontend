import { useRouter } from "next/router";

const preventDefault = (f) => (e) => {
  e.preventDefault();
  // console.log("ini", document.getElementById("plat_no").value);
  f(e);
};

export default function Login() {
  const router = useRouter();
  const handleSubmit = preventDefault(() => {
    const plat_no = document.getElementById("plat_no").value;
    localStorage.setItem("no_plat", plat_no); //tambah local storage
    if (plat_no == "bangkit2023") {
      router.replace({
        pathname: "/dashboard",
        query: { plat_no: plat_no },
      });
    }
    else {
      router.replace({
        pathname: "/",
        query: { plat_no: plat_no },
      });
    }
    // localStorage.removeItem("no_plat"); //hapus local storage
    // localStorage.getItem("no_plat") //get
  });

  return (
    <div className="flex justify-center">
      <div className="mt-10 w-full bg-[var(--warna-14)] max-w-sm p-6 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-[var(--warna-9)]">
            Input No. Plat Mobil Anda
          </h5>
          <div>
            <label
              htmlFor="plat_no"
              className="block mb-2 text-sm font-medium text-[var(--warna-9)]"
            >
              Plat No.
            </label>
            <input
              type="text"
              name="plat_no"
              id="plat_no"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="B 1234 CLS"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
