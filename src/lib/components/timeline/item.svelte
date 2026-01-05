<script lang="ts">
    import {Skeleton} from '$lib/components/ui/skeleton';
    import {Heart, MessageCircle, Share2} from '@lucide/svelte';
    import {CardContent, CardHeader, Root as CardRoot} from "$lib/components/ui/card";
    import type {TimelineItem} from "$lib/types/timeline";
    import ImageCarrousel from "$lib/components/timeline/imageCarrousel.svelte";

    let {item, loading}: { item: TimelineItem; loading: boolean } = $props();

</script>


<span class="text-center text-2xl font-bold text-gray-400 w-full">
    {item.date}
</span>

<CardRoot class="overflow-hidden border-border bg-card pt-0">
    <ImageCarrousel image_filenames={item.image}/>

    <!-- Content Section -->
    <CardContent class="pt-0 space-y-3">

        <!-- Description -->
        <div>
            <p class="text-sm text-foreground">
                <span class="font-semibold text-2xl">{item.title}</span>
            </p>
            <p class="text-sm text-foreground mt-1">{item.description}</p>
            <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
            <a class="text-sm text-accent mt-2" href={item.link}>{item.link}</a>
        </div>

        <!-- Tags as hashtags -->
        <div class="flex flex-wrap gap-2">
            {#each item.tags as tag (tag)}
                <span class="text-sm text-primary hover:underline cursor-pointer">#{tag.replace(/\s+/g, '')}</span>
            {/each}
        </div>

        <div class="flex gap-4">
            <Heart/>
            <MessageCircle/>
            <Share2/>
        </div>
    </CardContent>
</CardRoot>

{#if loading}
    <CardRoot class="overflow-hidden bg-card">
        <CardHeader class="pb-3">
            <div class="flex items-center gap-3">
                <Skeleton class="h-10 w-10 rounded-full"/>
                <div class="flex-1 space-y-2">
                    <Skeleton class="h-3 w-32"/>
                    <Skeleton class="h-2 w-20"/>
                </div>
            </div>
        </CardHeader>
        <Skeleton class="w-full aspect-square"/>
        <CardContent class="pt-4 space-y-3">
            <Skeleton class="h-4 w-full"/>
            <Skeleton class="h-4 w-3/4"/>
        </CardContent>
    </CardRoot>
{/if}
