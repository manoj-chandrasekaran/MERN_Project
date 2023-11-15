import { Icon } from '@iconify/react';
import IconText from '../components/shared/IconText';
import TextHover from '../components/shared/TextHover';
import { FaGripHorizontal } from 'react-icons/fa';

const focusCardsData=[{
    title: "Todays top hits", 
    description:"Vibrant mix capturing diverse chart-toppers defining today's dynamic music scene." ,
    imgUrl:"https://i.pinimg.com/564x/64/4a/fd/644afd6ffa34bf5425708bbf2bbb9d42.jpg"},
    {
    title: "Made for you", 
    description:"Curated tunes reflecting your unique taste, setting the perfect vibe.",
    imgUrl:"https://i.pinimg.com/564x/24/1b/2c/241b2cd3945c6f242038f88db4e5f2aa.jpg",
},
{
    title: "Study lofi", 
    description:"Calm instrumental tunes fostering focus and concentration for effective studying.",
    imgUrl:"https://i.pinimg.com/564x/f8/d3/98/f8d398bd4bdb81207819ffaf7c37835d.jpg",

},
{
    title:"Rainy Day Moods", 
    description:"Soothing tunes for introspection and peace on a rainy day.",
    imgUrl:"https://i.pinimg.com/236x/09/a4/7f/09a47fa1f887481f535076a015c4e879.jpg",

},
{
    title: "Chill Vibes", 
    description:"Soothing melodies, perfect relaxation, tranquility, and unwinding after a long day.",
    imgUrl:"https://i.pinimg.com/564x/79/2e/b2/792eb227917491f15a90d467cd40a0ed.jpg",

}
];
const YourPLaylistsData = [
    {
    title: "Morning Motivation", 
    description:"Energize your mornings with upbeat tunes to kickstart your day." ,
    imgUrl:"https://i.pinimg.com/564x/f8/91/88/f8918832888a9841348a0549b01c7293.jpg",
},
{
    title: "Feel-Good Classics", 
    description:"Curated tunes reflecting your unique taste, setting the perfect vibe.",
    imgUrl:"https://i.pinimg.com/564x/d7/a9/c8/d7a9c81394c4548daf9b377b2d411674.jpg",
},
{
    title: "Late Night Grooves", 
    description:"Wind down with a soulful blend of smooth tunes and jazzy melodies.",
    imgUrl:"https://i.pinimg.com/564x/a5/94/a1/a594a1e70d22781652e1ecab43d1f8d8.jpg",

},
{
    title:"Party Mix", 
    description:"Bringing back the nostalgia with a mix of classic party anthems.",
    imgUrl:"https://i.pinimg.com/564x/ac/59/db/ac59dbf7ba91ef293c8c8e15aef5d531.jpg",

},
{
    title: "Feel the Beat", 
    description:"Experience an electrifying mix of heart-pounding EDM and dancefloor hits.",
    imgUrl:"https://i.pinimg.com/564x/f7/49/ad/f749ad17e5ee4d97a4d5fa22fc8037e7.jpg",

},
];



const HomeComponent = () =>{
    return(
        <div className="h-full w-full flex bg-gray-950 overflow-auto">
            <div className=" w-1/6 h-full overflow-hidden" >
            <div className='heading  flex bg-black bg-opacity-50 h-16'>
            <Icon icon="ph:infinity" color='purple' width={70} height={70} /> Groovify
            </div>
        

            <div className='py-3 '> 
                <IconText iconname={"material-symbols-light:home"} displaytext={"Home"} active />
                <IconText iconname={"material-symbols:search"} displaytext={"Search"}/>
                <IconText iconname={"game-icons:bookshelf"} displaytext={"Library"}/>
                <div className='py-10'>
                <IconText iconname={"carbon:add"} displaytext={"Create Playlist"}/>
                <IconText iconname={"openmoji:red-heart"} displaytext={"Liked songs"}/>
                </div>
            </div>
            </div>


        <div className="h-full w-full ">
                <div className="navbar w-full h-16 bg-black bg-opacity-60 flex items-center justify-end overflow-auto">
                <div className='w-1/2 flex h-full'>
            <div className='w-3/5 flex justify-around '>
                <TextHover  displaytext={"Premium"}/>
                <TextHover displaytext={"Support"}/>
                <TextHover displaytext={"Download"}/>
                <div className='h-full border border-white'></div>
            </div>
            <div className='w-2/5 justify-around h-full  flex'> 
                <TextHover displaytext={"Sign up"}/>
                <div className='bg-white h-full w-1/2 px-8 flex items-center justify-center rounded-full text-bold cursor-pointer'>Log in</div>
            </div>
            </div>
                </div>
                <div className='content p-8 overflow-auto'>
                <Playlistview titleText="Groovify playlists" cardsData={focusCardsData}/>
                <Playlistview titleText="Your Playlists"  cardsData={YourPLaylistsData} />
            </div>
            </div>
            
        </div>
    )
};
const Playlistview = ({titleText, cardsData}) =>{
    return( 
    <div className='text-white cursor-pointer mt-8 '>
    <div className=' text-3xl font-semibold mb-5'>{titleText}</div>
    <div className='w-full font-semibold flex justify-around text-sm'>
        {
        cardsData.map(item=>{
            return<Card title={item.title} description={item.description} imgUrl={item.imgUrl}/>
        })
        }
   
    </div>
    </div>
    );

};
const Card= ({title,description,imgUrl}) =>{
    return(
        <div className='bg-black bg-opacity-50 w-1/6 justify-around p-3 resize-y text-sm rounded-lg'>
            <div className='py-5 text-xs'>
                <img className='w-full rounded-md ' src={imgUrl} alt='"label-image'/>

            <div className='text-white text-md'>{title}</div>
            <div className='text-gray-500 text-xsm'>{description}</div>
            </div>

        </div>
    )

}

export default HomeComponent;