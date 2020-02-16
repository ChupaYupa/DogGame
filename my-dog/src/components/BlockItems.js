import React from 'react';
import dog from './../Image/dog.jpg';
import dogMP3 from './../Image/dog.mp3';

function BlockItems(props) {
    let audioRef = React.createRef();


    let onClickPlus = (event) => {
        event.stopPropagation();         //!!!!!!!!!!!!!!!!!!ВСПЛЫТИЕ СОБЫТИЯ!!!!!!!!!!!!!!!!
        console.log('img')
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        props.onClickPlus();
    }

    let clickSet = () =>{
        console.log('div');
        props.onClickSet()
    }
    // let ClassForItem = (props.state.blockId === 0) ? 'photo show' : 'photo';



    //!!!!!!!!!!!!!!!!массив элементов!!!!!!!!!!!!!!!!!!!!!
    let photos = [...new Array(108)];
    let elements = photos.map((u, index) => <div className="item" key={index} onClick={clickSet}>
        <img src={dog} onClick={onClickPlus}
            className={props.blockId == index ? 'photo show' : 'photo'} />
    </div>
    )



    return (
        <>
            <audio ref={audioRef} src={dogMP3}></audio>
            {elements}
        </>
    );
}

export default BlockItems;