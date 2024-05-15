// "use client"
// import React from 'react';
// import { Masonry } from 'react-masonry'
// import { ResponsiveMasonry } from 'react-responsive-masonry';

// const images = [
//     { src: "/img1.png", width: "50%", height: 250 },
//     { src: "/img8.png", width: "25%", height: 250 },
//     { src: "/img4.png", width: "25%", height: 250 },
//     { src: "/img7.png", width: "25%", height: 250 },
//     { src: "/img6.png", width: "25%", height: 500 },
//     { src: "/img5.png", width: "50%", height: 250 },
//     { src: "/img2.png", width: "25%", height: 250 },
//     { src: "/img3.png", width: "25%", height: 250 },
//     { src: "/img9.png", width: "25%", height: 250 },
    
    
// ];

// function MasonryGrid (){
//         return (
//             <div className='pl-10 pr-10'>
//             <ResponsiveMasonry>
//                             <Masonry >
//                 {images.map((image, i) => (
//                     <img
//                         key={i}
//                         src={image.src}
//                         style={{ display: "block", width: image.width, height: image.height, padding: 5}}
//                         alt=""
//                     />
//                 ))}
//             </Masonry>
//             </ResponsiveMasonry>
//             </div>

//         )
//     }

// export default MasonryGrid;




export default function MasonryGrid(){
  return(
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gridAutoRows: "200px", gridGap: "5px", gridAutoFlow: "dense" }}>
        <div style={{ gridColumn: "span 2"}}>
            <img src="/img1.png" alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <div >
            <img src="/img8.png" alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <div>
            <img src="/img4.png" alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <div >
            <img src="/img7.png" alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={{ gridRow: "span 2" }}>
            <img src="/img6.png" alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <div>
            <img src="/img5.png" alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={{ gridColumn: "span 2" }}>
            <img src="/img2.png" alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <div style={{ gridColumn: "span 2", gridRow: "span 2" }}>
            <img src="/img3.png" alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <div>
            <img src="/img9.png" alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <div >
            <img src="https://images.unsplash.com/photo-1546260863-51e27ff43c68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1546046142-8f8fae7de558?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1545844895-1bf88a0213a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" style={{ width: "100%", height: "100%" }} />
        </div>
    </div>
  )
}
