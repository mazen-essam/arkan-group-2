"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function ScrollToUp() {
    const scrolltoup = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <button
            onClick={scrolltoup}
            style={{
                padding: '10px', borderRadius: '50%', width: '50px', height: '50px',
                textAlign: 'center', fontSize: '18px', position: 'fixed', bottom: '10px', right: '10px', zIndex: 9999
            }}
            className="bg-purple-600 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
            <i className="fa-solid fa-arrow-up"> </i>
        </button>
    )
}