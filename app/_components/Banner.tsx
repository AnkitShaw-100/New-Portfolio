'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">FULLSTACK</span>
                        <br /> <span className="ml-4">DEVELOPER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        I&apos;m <span className="font-medium text-foreground">Ankit</span>, a full stack developer and 3rd-year engineering student at IEM Institute of Engineering and Management. I work with both frontend and backend technologies, building web applications and continuously expanding my skills through hands-on projects.
                    </p>
                    <div className="flex gap-4 mt-9">
                        <Button
                            as="link"
                            href={`mailto:${GENERAL_INFO.email}`}
                            variant="primary"
                            className="banner-button slide-up-and-fade"
                        >
                            Contact Me
                        </Button>
                        <Button
                            as="button"
                            variant="secondary"
                            className="banner-button slide-up-and-fade bg-white text-black hover:bg-primary transition-colors"
                            onClick={() => {
                                const imageUrl = '/logo/ts.png';
                                const link = document.createElement('a');
                                link.href = imageUrl;
                                link.download = 'typescript-logo.png';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        >
                            Resume
                        </Button>
                    </div>
                </div>

                    <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                        <div className="slide-up-and-fade">
                            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                                5
                            </h5>
                            <p className="text-muted-foreground">Completed Projects</p>
                        </div>

                        <div className="slide-up-and-fade">
                            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                                3
                            </h5>
                            <p className="text-muted-foreground">Hackathons</p>
                        </div>

                        <div className="slide-up-and-fade">
                            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                                3rd Year
                            </h5>
                            <p className="text-muted-foreground">Engineering Student</p>
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default Banner;
