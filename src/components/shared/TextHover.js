
const TextHover = ({ displaytext,active }) =>{
    return( 
        <div className="flex items-center justify-center cursor-pointer">
            <div className={`${active? "text-white": "text-gray-400"} text-M font-semibold hover:text-white`}>
            {displaytext}
                
            </div>
        </div>
    )
};
export default TextHover;
