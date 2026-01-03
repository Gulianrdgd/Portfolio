<script lang="ts">
    import { onMount } from 'svelte';
    import * as Card from '$lib/components/ui/card';
    import * as Avatar from '$lib/components/ui/avatar';
    import { Badge } from '$lib/components/ui/badge';
    import { Skeleton } from '$lib/components/ui/skeleton';
    import timelineData from '$lib/data/timeline.json';

    interface TimelineItem {
        id: number;
        type: 'education' | 'project' | 'work';
        title: string;
        organization: string;
        date: string;
        description: string;
        image: string;
        tags: string[];
    }

    let visibleItems = $state<TimelineItem[]>([]);
    let loading = $state(false);
    let currentIndex = $state(0);
    const itemsPerLoad = 1;
    let hasStartedLoading = $state(false);

    function loadMoreItems() {
        if (loading || currentIndex >= timelineData.length) return;

        loading = true;
        hasStartedLoading = true;

        setTimeout(() => {
            const nextItems = timelineData.slice(currentIndex, currentIndex + itemsPerLoad);
            visibleItems = [...visibleItems, ...nextItems];
            currentIndex += itemsPerLoad;
            loading = false;
        }, 800);
    }

    function handleScroll() {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;

        // Calculate distance from timeline section
        const timelineSection = document.querySelector('#timeline-section');
        if (!timelineSection) return;

        const rect = timelineSection.getBoundingClientRect();
        const isNearTimeline = rect.top < window.innerHeight * 0.8;

        // Load first item when user scrolls near timeline section
        if (isNearTimeline && !hasStartedLoading) {
            loadMoreItems();
        }

        // Load more items when scrolling down
        if (hasStartedLoading && scrolled / scrollableHeight > 0.7) {
            loadMoreItems();
        }
    }

    onMount(() => {
        window.addEventListener('scroll', handleScroll);
        // Trigger initial check in case timeline is already in view
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    });

    function getTypeColor(type: string) {
        switch(type) {
            case 'education': return 'bg-blue-500';
            case 'project': return 'bg-purple-500';
            case 'work': return 'bg-green-500';
            default: return 'bg-primary';
        }
    }

    function getTypeIcon(type: string) {
        switch(type) {
            case 'education': return 'ED';
            case 'project': return 'PR';
            case 'work': return 'WK';
            default: return 'TL';
        }
    }
</script>

<section id="timeline-section" class="min-h-screen px-4 py-20">
    <div class="max-w-2xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span class="text-primary">Journey</span>
        </h2>

        <div class="space-y-8">
{#each visibleItems as item (item.id)}
                <Card.Root class="overflow-hidden border-border bg-card">
                    <!-- Instagram-style Header -->
                    <Card.Header class="pb-3">
                        <div class="flex items-center gap-3">
                            <Avatar.Root class="h-10 w-10">
                                <Avatar.Fallback class={`${getTypeColor(item.type)} text-white font-bold text-xs`}>
                                    {getTypeIcon(item.type)}
                                </Avatar.Fallback>
                            </Avatar.Root>
                            <div class="flex-1">
                                <p class="font-semibold text-sm text-foreground">{item.organization}</p>
                                <p class="text-xs text-muted-foreground">{item.date}</p>
                            </div>
                        </div>
                    </Card.Header>

                    <!-- Image Section -->
                    <div class="w-full aspect-square relative bg-muted">
                        <img
                            src={item.image}
                            alt={item.title}
                            class="w-full h-full object-cover"
                        />
                    </div>

                    <!-- Content Section -->
                    <Card.Content class="pt-4 pb-3 space-y-3">
                        <!-- Action Icons (simplified Instagram-style) -->
                        <div class="flex gap-4">
                            <svg class="w-6 h-6 text-foreground cursor-pointer hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                            <svg class="w-6 h-6 text-foreground cursor-pointer hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                            </svg>
                            <svg class="w-6 h-6 text-foreground cursor-pointer hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                            </svg>
                        </div>

                        <!-- Description -->
                        <div>
                            <p class="text-sm text-foreground">
                                <span class="font-semibold">{item.title}</span>
                            </p>
                            <p class="text-sm text-foreground mt-1">{item.description}</p>
                        </div>

                        <!-- Tags as hashtags -->
                        <div class="flex flex-wrap gap-2">
                            {#each item.tags as tag (tag)}
                                <span class="text-sm text-primary hover:underline cursor-pointer">#{tag.replace(/\s+/g, '')}</span>
                            {/each}
                        </div>
                    </Card.Content>
                </Card.Root>
            {/each}

            {#if loading}
                <Card.Root class="overflow-hidden bg-card">
                    <Card.Header class="pb-3">
                        <div class="flex items-center gap-3">
                            <Skeleton class="h-10 w-10 rounded-full" />
                            <div class="flex-1 space-y-2">
                                <Skeleton class="h-3 w-32" />
                                <Skeleton class="h-2 w-20" />
                            </div>
                        </div>
                    </Card.Header>
                    <Skeleton class="w-full aspect-square" />
                    <Card.Content class="pt-4 space-y-3">
                        <Skeleton class="h-4 w-full" />
                        <Skeleton class="h-4 w-3/4" />
                    </Card.Content>
                </Card.Root>
            {/if}

            {#if !hasStartedLoading}
                <div class="text-center py-16">
                    <p class="text-muted-foreground text-lg">Scroll down to explore my journey...</p>
                    <svg class="w-6 h-6 text-muted-foreground mx-auto mt-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            {/if}

            {#if !loading && hasStartedLoading && currentIndex >= timelineData.length}
                <div class="text-center py-8">
                    <p class="text-muted-foreground">That's all for now!</p>
                </div>
            {/if}
        </div>
    </div>
</section>
