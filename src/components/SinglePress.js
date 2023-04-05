import { ExternalLink } from "feather-icons-react/build/IconComponents";
const SinglePress = ({ key, name, description, devTools, video }) => (
    < li className={`font-nitti p-3  text-sm uppercase shadow-lg rounded-3xl  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer`} >
        <div className=" flex relative flex-col justify-between items-center w-full h-auto ">
            <video className='rounded-3xl relative flex w-full z-10 opacity-70' autoplay="autoplay" loop="loop" muted>
                <source src={video} type="video/mp4" />
                Sorry, your browser doesn't support videos.
            </video>
            
            <div className="absolute justify-center items-center flex h-full font-bold">
                <h3 className="my-6 text-white text-2xl relative z-10 whitespace-pre-line">{name}</h3>
            </div>
            <div>

            </div>
        </div>

    </li >
)

export default SinglePress