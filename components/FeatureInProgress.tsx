import { XIcon } from '@heroicons/react/solid';
import MuiModal from '@mui/material/Modal'
import { useRecoilState } from 'recoil';
import { featureInProgressModalState } from '../atoms/modalAtom';


function FeatureInProgress(): JSX.Element {
    const [showFeatureInProgressModal, setShowFeatureInProgressModal] = useRecoilState(featureInProgressModalState);
    let handleClose = () => {
        setShowFeatureInProgressModal(false)
    }
    return (
        <MuiModal open={showFeatureInProgressModal} onClose={handleClose}
            className="fixed !top-[20%] left-0 right-0 z-50 mx-auto max-w-2xl overflow-hidden rounded-md">
            <div className="flex flex-col items-center relative">
                <button onClick={handleClose} className="modalButton
          absolute  top-7 !z-40 h-9 w-9 bg-[#181818] hover:bg-[#181818]">
                    <XIcon className='w-6 h-6' />
                </button>
                <div className=" bg-[#141414] px-12 py-24 lg:text-2xl md:text-xl text-lg text-gray-300">
                    <p className='capitalize'>
                        Note : this feature is not finished Yet!
                    </p>
                </div>
            </div>
        </MuiModal>
    )
}
export default FeatureInProgress