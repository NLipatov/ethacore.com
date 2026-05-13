import Products from "@/app/components/products";

export default function Home() {
    return (
        <main className="landing">
            <section className="hero">
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
                </div>
                <a href="#products" className="scroll-cue" aria-label="Scroll to products">
                    <span className="scroll-cue-text">Products</span>
                    <span className="scroll-cue-arrow" aria-hidden="true">↓</span>
                </a>
            </section>
            <Products />
        </main>
    );
}
