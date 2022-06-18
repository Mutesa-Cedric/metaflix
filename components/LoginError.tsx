import MuiModal from '@mui/material/Modal'
import { XIcon } from '@heroicons/react/solid';
import { loginErrorModalState } from '../atoms/modalAtom';
import { useRecoilState } from 'recoil';

type Props={
    error:string
}
function LoginError({error}:Props): JSX.Element {
    const [showLoginErrorModal, setShowLoginErrorModal] = useRecoilState(loginErrorModalState);
    let handleClose = () => {
        setShowLoginErrorModal(false)
    }
    return (
        <MuiModal open={showLoginErrorModal} onClose={handleClose}
            className="fixed !top-[20%] left-0 right-0 z-50 mx-auto max-w-2xl overflow-hidden rounded-md">
            <div className="flex flex-col items-center relative">
                <button onClick={handleClose} className="modalButton
                  absolute  top-7 !z-40 h-9 w-9 bg-[#181818] hover:bg-[#181818]">
                    <XIcon className='w-6 h-6' />
                </button>
                <div className=" bg-[#141414] px-12 py-24 lg:text-2xl md:text-xl text-lg text-gray-300">
                    <p>
                        {error}
                    </p>
                </div>
            </div>
        </MuiModal>
    )
}

export default LoginError