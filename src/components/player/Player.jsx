import coursecover from "../../photo/coursemedia/course cover.png"

import preview from "../../preview/preview.mp4"

export default function Player() { 

    return (
        <video src={ preview } className='coursevideo' controls poster={ coursecover } preload="metadata"></video>
    )
}