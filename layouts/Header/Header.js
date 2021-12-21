import React from 'react';
import Link from "next/link";
import Menu from "./Menu/Menu";

export default function Header(props) {

    return (
        <div>
        <Logo />
        <Menu />
        <Searcher />
        </div>
    )
}


function Logo() {
    return (
        <Link href="/">
            <a>
                <img src="/vercel.svg" />
            </a>
        </Link>
    )
}

function Searcher() {
    return(
        <input
            type="text"
            placeholder="Busca"
        />
    )
}