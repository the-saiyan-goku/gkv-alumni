import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";
import { Home } from '@mui/icons-material';
function TabFooter() {
    return (
        <div className="bg-blueaccent">
            <div className='w-11/12 mx-auto grid grid-rows-2 gap-1 py-5 text-white'>
                <div className='grid grid-cols-2 gap-1 border-gray-500 border-b-[1px]'>
                    <div className='grid justify-items-center border-gray-500 border-r-[1px]'>
                        <p className='text-2xl font-bold my-auto text-center tracking-widest border-gray-500 border-b-[1px]'>USEFUL LINKS</p>
                        <ul className='grid text-lg font-semibold text-center my-auto'>
                            <li className="mb-5">Join</li>
                            <li className="mb-5">About</li>
                            <li className="mb-5">Batchmates</li>
                            <li className="mb-1">Notice</li>
                        </ul>
                    </div>
                    <div className="grid justify-items-center">
                        <p className='text-2xl font-bold my-auto text-center tracking-widest border-gray-500 border-b-[1px]'>SERVICES</p>
                        <ul className='grid text-lg font-semibold text-center my-auto'>
                            <li className="mb-5">About Us</li>
                            <li className="mb-5">Terms and Conditions</li>
                            <li className="mb-5">Opportunities</li>
                            <li className="mb-1">Career</li>
                        </ul>

                    </div>
                </div>
                <div className="w-full mx-auto grid justify-items-center mt-4">
                    <p className='text-2xl font-bold my-auto text-center tracking-widest border-gray-500 border-b-[1px]'>CONTACT</p>
                    <ul className='w-full grid grid-cols-3 justify-center text-lg font-semibold my-4'>
                        <li className="my-1 flex justify-center">
                            <CallIcon className='justify-self-center' fontSize='large'></CallIcon>
                            <div className="flex-col tracking-wider ml-2">
                            <p>Mr. Shivam Kumar</p>
                                <p>Mr. Chandan Kumar Singh</p>
                                <p>Satya prakash Singh</p>
                                <p> Siddharth sharma</p>
                            </div>
                        </li>
                        <li className=" my-1 flex justify-center">
                            <Home className='justify-self-center' fontSize='large'></Home>
                            <div className="flex-col tracking-wider ml-2">
                                <p>GKV ALUMNI ASSOCIATION(REGD.)</p>
                                <p> Office: Room No. 101</p>
                                <p>GKV Convention Center,</p>
                                <p>GKV, New Delhi-110067,</p>
                                <p>India</p>
                            </div>
                        </li>
                        <li className="my-1 flex justify-center">
                            <EmailIcon className='justify-self-center' fontSize='large'></EmailIcon>
                            <Link to="#" className="tracking-wider ml-2" onClick={(e) => {
                                    window.location.href = 'mailto: JAA GKV1@gmail.com';
                                    e.preventDefault();
                                }}>JAA GKV1@gmail.com</Link>
                        </li>   
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TabFooter