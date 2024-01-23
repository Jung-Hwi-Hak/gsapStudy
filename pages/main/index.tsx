import React, {useEffect, useLayoutEffect, useRef} from "react";
import styled from "styled-components";
import {gsap} from "gsap";


const Box = styled.div`
    display: block;
    width: 100px;
    height: 100px;
    background-color: tomato;
    border-radius: 10px;
`

export default function MainPage(): React.JSX.Element {

    const boxRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        gsap.to(".box", {x: 200})
    }, [])


    return (
        <>
            <Box className={"box"}></Box>
        </>

    );
}