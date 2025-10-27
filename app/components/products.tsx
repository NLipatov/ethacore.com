"use client";
import React from "react";

const products = [
    {
        name: "TunGo",
        url: "https://tungo.ethacore.com",
        description:
            "VPN built in Go — fast, cross-platform, transport-agnostic (UDP, TCP, WebSocket).",
    },
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
