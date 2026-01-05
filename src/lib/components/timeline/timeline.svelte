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
    let timelineContainer: HTMLDivElement;

    $effect(() => {
        if (!containerRef || !timelineContainer) return;

        const itemElements = containerRef.querySelectorAll('.timeline-item');
        if (itemElements.length === 0) return;

        // Kill any existing ScrollTriggers first
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Set all items to hidden initially except first
        itemElements.forEach((item, index) => {
            if (index === 0) {
                gsap.set(item, { opacity: 1, y: 0, scale: 1, pointerEvents: 'auto', zIndex: 1 });
            } else {
                gsap.set(item, { opacity: 0, y: 100, scale: 0.9, pointerEvents: 'none', zIndex: 0 });
            }
        });

        // Create master timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef,
                start: 'top top',
                end: () => `+=${window.innerHeight * items.length * 2}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        });

        // Build the timeline
        itemElements.forEach((item, index) => {
            if (index === 0) {
                // First item visible, then fades out
                tl.to(item, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    pointerEvents: 'auto',
                    zIndex: 1,
                    duration: 1
                });

                tl.to(item, {
                    opacity: 0,
                    y: -100,
                    scale: 0.9,
                    pointerEvents: 'none',
                    zIndex: 0,
                    duration: 1
                });
            } else {
                // Subsequent items fade in from bottom
                tl.to(item, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    pointerEvents: 'auto',
                    zIndex: 1,
                    duration: 1
                }, '<'); // Start at same time as previous fadeout

                // Hold visible for a moment
                tl.to({}, { duration: 1 });

                // Fade out unless it's the last item
                if (index < items.length - 1) {
                    tl.to(item, {
                        opacity: 0,
                        y: -100,
                        scale: 0.9,
                        pointerEvents: 'none',
                        zIndex: 0,
                        duration: 1
                    });
                }
            }
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });
</script>

<div bind:this={containerRef} id="timeline" class="relative h-screen overflow-hidden">
    <div bind:this={timelineContainer} class="absolute inset-0 flex items-center justify-center">
        {#each items as item (item.date)}
            <div class="timeline-item absolute inset-0 flex items-center justify-center">
                <div class="max-w-2xl mx-auto px-4 w-full">
                    <Item {item} loading={false}/>
                </div>
            </div>
        {/each}
    </div>
</div>