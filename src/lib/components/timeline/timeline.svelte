<script lang="ts">
    import type {TimelineItem} from "$lib/types/timeline";
    import Item from "$lib/components/timeline/item.svelte";
    import gsap from 'gsap';
    import {ScrollTrigger} from 'gsap/ScrollTrigger';

    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    let items = $state<TimelineItem[]>([
        {
            date: 'August 2018',
            title: 'Studied Computer Science (BSc) and Cyber security (MSc) at the Radboud University',
            description: '',
            type: 'project',
            image: ['/images/university1.jpg', '/images/university2.jpeg', '/images/university3.jpg'],
            tags: ['Web Development', 'Portfolio', 'Design']
        },
        {
            date: 'March 2020',
            title: 'Started learning web development during covid lockdown',
            description: 'My study association was now fully online, so I created online "experiences" for my fellow students.',
            link: 'https://github.com/Gulianrdgd',
            type: 'education',
            image: ['/images/project1.png', '/images/project2.png'],
            tags: ['DrinkingGames', 'Livestreams', 'Web Development']
        },
        {
            date: 'Juli 2024',
            title: 'Walked the 4 day march in Nijmegen',
            description: 'I also created a website to see who of your favorite spotify artists were performing in Nijmegen during the march (invite only)',
            link: 'https://vierdaagse.vdhorst.dev/',
            type: 'project',
            image: ['/images/4day1.jpg', '/images/4day2.png'],
            tags: ['Vierdaagse', 'Nijmegen', 'Spotify']
        },
        {
            date: 'December 2024',
            title: 'I now work at NOLAI at the Radboud University as a full stack developer',
            description: 'I am part of the tech team that helps with our AI projects and builds/maintains our services',
            link: 'https://www.ru.nl/over-ons/nieuws/whitepaper-veilig-experimenteren-met-taalmodellen',
            type: 'work',
            image: ['/images/nolai1.jpeg', '/images/nolai2.png', "/images/nolai3.png"],
            tags: ['NOLAI', 'Tech team', 'Nijmegen']
        }
    ]);

    let containerRef: HTMLDivElement;

    $effect(() => {
        if (!containerRef) return;

        const scrollContainer = containerRef.querySelector('.timeline-container');
        const itemElements = containerRef.querySelectorAll('.timeline-item');

        if (!scrollContainer) return;

        itemElements.forEach((item) => {
            // Animate each item on scroll
            gsap.fromTo(
                item,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: item,
                        scroller: scrollContainer,
                        start: 'top center',
                        end: 'center center',
                        scrub: 0.5,
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });
</script>

<div bind:this={containerRef} class="min-h-screen">
    <div class="h-screen overflow-y-scroll snap-y snap-mandatory snap-always">
        {#each items as item (item.date)}
            <div class="h-screen flex items-center justify-center snap-start snap-always">
                <div class="max-w-2xl mx-auto px-4 w-full">
                    <Item {item} loading={false}/>
                </div>
            </div>
        {/each}
    </div>
</div>