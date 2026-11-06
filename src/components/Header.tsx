import { Link } from "react-router"
import { User, LucideShoppingBasket, MenuIcon, HomeIcon } from "lucide-react"
import { useState } from "react";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
};
type HeaderProps = {
    products: Product[];
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    filterSearch: () => void;
};

export const Header = ({ setSearch, filterSearch }: HeaderProps) => {

    return (
        <>
        <header className="header">
            <div className="search">
                <Link to=""><MenuIcon className="burger_menu" size={35} color="white"/></Link>
                {/* <Link to=""><HomeIcon size={32} color="white"/></Link> */}
                <div className="search_box">
                    <input onChange={(e) => setSearch(e.target.value)} className="search_input" type="text" placeholder="Search..."/>
                    <button onClick={filterSearch} className="search_btn">Search</button>
                </div>
                <div className="search_icons">
                    <Link to=""><User className="user" size={28} color="white"/></Link>
                    <Link to=""><LucideShoppingBasket className="shopping_basket" size={35} color="white"/></Link>
                </div>
            </div>
        </header>
        </>
    ) 

}