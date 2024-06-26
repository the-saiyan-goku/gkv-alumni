import React from 'react';
import PlatformCard from './PlatformCard'
import User from '../../icons/User.png'
import UserGroup from '../../icons/user-group.png'
import PersUser from '../../icons/personalUser.png'
import Location from '../../icons/location.png'
const Platform = () => {
    return (
        <div className="w-11/12 mx-auto">
            <span className='text-blueaccent flex justify-center self-center text-3xl font-semibold'>GKV Alumni Platform</span>
            <div className='flex justify-center self-center my-5 flex-wrap'>
                <div className='lg:w-1/4 sm:w-1/2 w-full p-3'>
                <PlatformCard src={User} desc="Explore complete Alumni directory & connect with Alumni with your interests & domain" title="Alumni Directory"></PlatformCard>
                </div>
                <div className='lg:w-1/4 sm:w-1/2 w-full p-3'>
                <PlatformCard src={UserGroup} desc="View our exclusive batchmates directory to know about whereabouts of your batchmates" title="Your Batchmate"></PlatformCard>
                </div>
                <div className='lg:w-1/4 sm:w-1/2 w-full p-3'>
                <PlatformCard src={Location} desc="Find Alumni in your city & be a part of local meet-ups" title="Alumni in your vicinity"></PlatformCard>
                </div>
                <div className='lg:w-1/4 sm:w-1/2 w-full p-3'>
                <PlatformCard src={PersUser} desc="Create & complete your Alumni profile & remain connected with all opportunities matching your interest" title="Your Alumni Profile"></PlatformCard>
                </div>
            </div>
        </div>
    );
}

export default Platform;