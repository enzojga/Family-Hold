import { MdFamilyRestroom } from "react-icons/md";
import { RiSuitcaseFill } from "react-icons/ri";
import { GiCat } from "react-icons/gi";
import { FaGamepad } from "react-icons/fa";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function BoardIcons( {icon, selectedIcon, setIcon} ) {
    const iconTable = {
        1: <MdFamilyRestroom/>,
        2: <RiSuitcaseFill/>,
        3: <GiCat/>,
        4: <FaGamepad/>
    }
    const [isSelected, setIsSelected] = useState(false);
    useEffect(() => {
        if(icon === selectedIcon) {
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }
    }, [selectedIcon]);
    return(
        <Icon isSelected={isSelected} onClick={() => {setIcon(icon)}}>
            {iconTable[icon]}
        </Icon>
    )
}

const Icon = styled.div`
    background-color: #BE264C;
    width: 34vw;
    height: 34vw;
    border-radius: 50%;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 80%;
        height: 80%;
        color: ${props => props.isSelected ? 'black' : 'white'};
    }
`