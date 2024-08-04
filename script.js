body, html {
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background: #0b3d91; /* Dark blue background */
}

.rain-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
}

.raindrop {
    position: absolute;
    bottom: 100%;
    width: 2px;
    height: 10px;
    background: #ffffff; /* White color for raindrop */
    animation: fall linear infinite;
    opacity: 0.6;
}

@keyframes fall {
    to {
        transform: translateY(100vh);
    }
}
