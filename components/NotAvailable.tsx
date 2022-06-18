import React, { useState } from 'react'
import MuiModal from '@mui/material/Modal'
import { useRecoilState } from 'recoil'
import { modalState, notAvailableModalState } from '../atoms/modalAtom';
import { XIcon } from '@heroicons/react/solid';

function NotAvailable() {
    const [showNotAvailableModal, setShowNotAvailableModal] = useRecoilState(notAvailableModalState);

    let handleClose = () => {
        setShowNotAvailableModal(false)
    }
    return (
        <MuiModal open={showNotAvailableModal} onClose={handleClose}
            className="fixed !top-[20%] left-0 right-0 z-50 mx-auto max-w-2xl overflow-hidden rounded-md">
            <>
                <button onClick={handleClose} className="modalButton
                  absolute right-5 top-7 !z-40 h-9 w-9 bg-[#181818] hover:bg-[#181818]">
                    <XIcon className='w-6 h-6' />
                </button>
                <div className=" bg-[#141414] px-12 pb-8 pt-6 lg:text-2xl md:text-xl text-lg text-gray-300">
                    <p>
                        Sorry, this feature is not available yet.
                        you will be notified once it is available.
                        But, you can still watch trailers by clicking on <b className='px-2'> More Info</b>
                        or click on any <b className='capitalize'> movie thumbnial.</b>
                    </p>
                </div>
            </>
        </MuiModal>
    )
}

export default NotAvailable