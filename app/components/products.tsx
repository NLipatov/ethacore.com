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
        <section className="products">
            <h2 className="products-title">Products</h2>
            {products.map((p) => (
                <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-item"
                >
                    <div className="product-name">{p.name}</div>
                    <div className="product-desc">{p.description}</div>
                </a>
            ))}
        </section>
    );
}
