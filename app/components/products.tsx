"use client";
import React from "react";

const products = [
    {
        name: "TunGo",
        url: "https://tungo.ethacore.com",
        description:
            "VPN protocol built in Go — fast, cross-platform, transport-agnostic (UDP, TCP, WebSocket).",
    },
    {
        name: "snake",
        url: "https://snake.ethacore.com",
        description: "Classic Snake game written in Rust with a WASM-powered web frontend"
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
