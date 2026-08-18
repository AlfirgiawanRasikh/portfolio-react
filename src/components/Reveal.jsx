import { useEffect, useRef } from "react";

function Reveal({
    children,
    delay = 0,
    className = "",
}) {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        // kondisi awal
        element.style.opacity = "0";
        element.style.transform = "translateY(45px)";

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                element.animate(
                    [
                        {
                            opacity: 0,
                            transform: "translateY(45px)",
                        },
                        {
                            opacity: 1,
                            transform: "translateY(0px)",
                        },
                    ],
                    {
                        duration: 900,
                        delay,
                        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                        fill: "forwards",
                    }
                );

                observer.unobserve(element);
            },
            {
                threshold: 0.15,

                // sengaja dibuat supaya animasi
                // baru berjalan saat elemen masuk cukup jauh
                rootMargin: "0px 0px -15% 0px",
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [delay]);

    return (
        <div
            ref={ref}
            className={className}
        >
            {children}
        </div>
    );
}

export default Reveal;