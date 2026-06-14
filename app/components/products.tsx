const products = [
    {
        name: "TunGo",
        url: "https://tungo.ethacore.com",
        description:
            "Lightweight VPN in Go with Noise IK + ChaCha20-Poly1305, CLI/TUI setup, and UDP/TCP/WebSocket transports.",
    },
    {
        name: "tuigo",
        url: "https://github.com/NLipatov/tuigo",
        description:
            "Blazing-fast, zero-allocation, performance-oriented TUI renderer for Go.",
    },
    {
        name: "snake",
        url: "https://snake.ethacore.com",
        description: "Classic Snake game in Rust with terminal CLI and WebAssembly-powered web versions."
    }
];

export default function Products() {
    return (
        <section className="products" id="products">
            <div className="products-inner">
                <h2 className="products-title">Products</h2>
                <div className="products-list">
                    {products.map((p) => (
                        <a
                            key={p.name}
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="product-item"
                        >
                            <div className="product-heading">
                                <div className="product-name">{p.name}</div>
                                <span className="product-arrow" aria-hidden="true">↗</span>
                            </div>
                            <div className="product-desc">{p.description}</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
