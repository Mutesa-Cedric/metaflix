import React, { useState } from 'react'
import MuiModal from '@mui/material/Modal'
import { useRecoilState, useRecoilValue } from 'recoil'
import { modalState, movieState, notAvailableModalState } from '../atoms/modalAtom';
import { XIcon } from '@heroicons/react/solid';
import { Movie } from '../typings';

function NotAvailable() {
    const [showNotAvailableModal, setShowNotAvailableModal] = useRecoilState(notAvailableModalState);
    const [showModal, setShowModal] = useRecoilState(modalState);
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

    let handleClose = () => {
        setShowNotAvailableModal(false)
    }
    return (
        <MuiModal open={showNotAvailableModal} onClose={handleClose}
            className="fixed !top-[20%] left-0 right-0 z-50 mx-auto max-w-2xl overflow-hidden rounded-md">
            <div className="flex flex-col items-center relative">
                <button onClick={handleClose} className="modalButton
                  absolute  top-3 !z-40 h-9 w-9 bg-[#181818] hover:bg-[#181818]">
                    <XIcon className='w-6 h-6' />
                </button>
                <div className=" bg-[#141414] px-12 flex flex-col  pb-8 pt-6 lg:text-2xl md:text-xl text-lg text-gray-300">
                    <p className="pt-8 pb-4 text-center">
                        Sorry, this feature is not available yet.
                        you will be notified once it is available.
                        But, you can still watch trailers by clicking on <b className='px-2'> More Info</b>
                        or click on any <b className='capitalize'> movie thumbnial.</b>
                    </p>
                    <button className="capitalize text-white bg-red-600 py-3 rounded-md w-3/4 mx-auto my-2"
                        onClick={() => {
                            setShowModal(true)
                            setShowNotAvailableModal(false);
                        }}>
                        watch trailer
                    </button>
                </div>
            </div>
        </MuiModal>
    )
}

export default NotAvailable