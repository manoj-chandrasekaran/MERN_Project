import { Icon } from '@iconify/react';
const IconText = ({iconname, displaytext,active }) =>{
    return( 
        <div className="flex items-center justify-start cursor-pointer">
            <div className='px-5 py-2'>
                <Icon icon={iconname} color={active? 'white': 'gray'} fontSize={40} />
            </div>
            <div className={`${active? "text-white": "text-gray-400"} text-xl font-semibold hover:text-white`}>
            {displaytext}
                
            </div>
        </div>
    )
};
export default IconText;
