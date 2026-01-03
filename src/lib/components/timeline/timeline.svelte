<script lang="ts">
    import type {TimelineItem} from "$lib/types/timeline";
    import Item from "$lib/components/timeline/item.svelte";
    import gsap from 'gsap';
    import {ScrollTrigger} from 'gsap/ScrollTrigger';

    // Register ScrollTrigger plugin
    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    let items = $state<TimelineItem[]>([
        {
            date: 'June 2024',
            title: 'Launched New Portfolio Website',
            description: 'Revamped my personal portfolio website to showcase my latest projects and skills.',
            type: 'project',
            image: '/images/portfolio-launch.png',
            tags: ['Web Development', 'Portfolio', 'Design']
        },
        {
            date: 'May 2024',
            title: 'Completed SvelteKit Course',
            description: 'Finished an in-depth course on SvelteKit to enhance my frontend development skills.',
            type: 'education',
            image: '/images/sveltekit-course.png',
            tags: ['SvelteKit', 'Frontend', 'Learning']
        },
        {
            date: 'April 2024',
            title: 'Started Open Source Project',
            description: 'Initiated an open source project focused on building reusable UI components.',
            type: 'project',
            image: '/images/open-source.png',
            tags: ['Open Source', 'UI Components', 'Collaboration']
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