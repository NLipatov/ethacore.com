import Products from "@/app/components/products";

export default function Home() {
    return (
        <main className="landing">
            <div className="content">
                <div className="logo strong">η</div>
                <div className="tagline">
                    Ethacore — independent software studio of{" "}
                    <a
                        href="https://github.com/NLipatov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="one-link"
                    >
                        one
                    </a>
                    .
                </div>
                <Products />
            </div>
        </main>
    );
}
