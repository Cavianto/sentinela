const Logos: React.FC = () => {
    return (
        <section id="logos" className="py-32 px-5 bg-background">
            <p className="text-lg font-medium text-center">
                Trusted by <span className="text-secondary">200+</span> customers worldwide
            </p>
            <div className="mt-5 w-full flex flex-wrap flex-row items-center justify-evenly gap-5 sm:gap-10 opacity-45 logos-container">
                {/* Spiderfoot */}
                <img
                    src="/images/spiderfoot.png"
                    alt="Spiderfoot"
                    className="h-12 w-auto max-w-[200px]"
                    loading="lazy"
                />
                {/* Maltego */}
                <img
                    src="/images/maltego.png"
                    alt="Maltego"
                    className="h-12 w-auto max-w-[200px]"
                    loading="lazy"
                />
                {/* Kali Linux */}
                <img
                    src="/images/kalilinux.png"
                    alt="Kali Linux"
                    className="h-12 w-auto max-w-[200px]"
                    loading="lazy"
                />
                {/* Shodan */}
                <img
                    src="/images/shodan.png"
                    alt="Shodan"
                    className="h-12 w-auto max-w-[200px]"
                    loading="lazy"
                />
                {/* Burp Suite */}
                <img
                    src="/images/burpsuite.png"
                    alt="Burp Suite"
                    className="h-12 w-auto max-w-[200px]"
                    loading="lazy"
                />
            </div>
        </section>
    );
};

export default Logos;
