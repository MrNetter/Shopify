import { ProductData } from "./ProductData";
type track = {
    id: string
    title: string
    duration: number
    release_date: string
    files: string
}

export const Main = () => {

    return (
        <>
        <main className="main">
            <section className="info">
                <p>⚠️ Please note: Prices on this marketplace may change without prior notice. You learn more here.</p>
            </section>
            <ProductData/>
        </main>
        </>
    )
};














// const getMusic = async () => {
//         const response = await fetch(
//             "https://api.freetouse.com/v3/music/tracks/all"
//         );
//         const data = await response.json();
        
//         return data;
//     };
//     const music = await getMusic();

//     console.log(music);