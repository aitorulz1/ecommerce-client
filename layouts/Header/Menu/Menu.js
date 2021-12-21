import React from 'react';
import Link from "next/link"

export default function Menu() {
    return (
        <div>
            <MenuProducts />
            <MenuUser />
        </div>
    )
}


function MenuProducts() {
    return(
        <nav>
            <Link href="">
                <a>
                    carne
                </a>
            </Link>
            <Link href="">
                <a>
                    carne
                </a>
            </Link>
            <Link href="">
                <a>
                    carne
                </a>
            </Link>
        </nav>
    )
}

function MenuUser() {
    return(
        <nav>
             <Link href="">
                <a>
                    user
                </a>
            </Link>
             <Link href="">
                <a>
                    account
                </a>
            </Link>
        </nav>
    )
}