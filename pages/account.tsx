import Head from "next/head"
import Link from "next/link"
import { useRecoilValue } from "recoil";
import { featureInProgressModalState } from "../atoms/modalAtom";
import FeatureInProgress from "../components/FeatureInProgress";
import useAuth from "../hooks/useAuth";

function Account() {
    const {logout}=useAuth();
    const ShowfeatureInProgress=useRecoilValue(featureInProgressModalState)
    return (
        <div className="">
          <Head>
            <title>Account Settings - Metflix</title>
            <link rel="icon" href="/mlogo.png" />
          </Head>
          <header className={`bg-[#141414] flex justify-between px-20 mt-4`}>
            <Link href="/">
              <img
                src="/logo.png"
                width={120}
                height={120}
                className="cursor-pointer object-contain"
              />
            </Link>
            <Link href="/account">
              <img
                src="https://rb.gy/g1pwyx"
                alt=""
                className="cursor-pointer rounded w-12 h-12"
              />
            </Link>
          </header>
          <main className="mx-auto max-w-6xl px-5 pt-24 pb-12 transition-all md:px-10">
            <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
              <h1 className="text-3xl md:text-4xl">Account</h1>
              <div className="-ml-0.5 flex items-center gap-x-1.5">
                <img src="https://rb.gy/4vfk4r" alt="" className="h-7 w-7" />
                <p className="text-xs font-semibold text-[#555]">
                  Member since 2022
                </p>
              </div>
            </div>
    
            {/* <Membership /> */}
    
            <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0">
              <h4 className="text-lg text-[gray]">Plan Details</h4>
              {/* Find the current plan */}
              <div className="col-span-2 font-medium">
                {/* {
                  products.filter(
                    (product) => product.id === subscription?.product
                  )[0]?.name
                } */}
              </div>
              {/* <p
                className="cursor-pointer text-blue-500 hover:underline md:text-right"
                onClick={goToBillingPortal}
              >
                Change plan
              </p> */}
            </div>
    
            <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
              <h4 className="text-lg text-[gray]">Settings</h4>
              <p
                className="col-span-3 cursor-pointer text-blue-500 hover:underline"
                onClick={logout}
              >
                Sign out of all devices
              </p>
            </div>
          </main>
          {
            ShowfeatureInProgress && <FeatureInProgress/>
          }
        </div>
      )
}

export default Account