<script lang="ts">
    import {Skeleton} from '$lib/components/ui/skeleton';
    import {Heart} from '@lucide/svelte';
    import {CardContent, CardHeader, Root as CardRoot} from "$lib/components/ui/card";
    import {AvatarFallback, Root as AvatarRoot} from "$lib/components/ui/avatar";
    import type {TimelineItem} from "$lib/types/timeline";

    let {item, loading}: { item: TimelineItem; loading: boolean } = $props();

</script>

<CardRoot class="overflow-hidden border-border bg-card">
    <!-- Instagram-style Header -->
    <CardHeader class="pb-3">
        <div class="flex items-center gap-3">
            <AvatarRoot class="h-10 w-10">
                <AvatarFallback class="font-bold text-white text-xs">
                    {item.title.charAt(0)}
                </AvatarFallback>
            </AvatarRoot>
            <div class="flex-1">
                <p class="text-xs text-muted-foreground">{item.date}</p>
            </div>
        </div>
    </CardHeader>

    <!-- Image Section -->
    <div class="w-full aspect-square relative bg-muted">
        <img
                alt={item.title}
                class="w-full h-full object-cover"
                src={item.image}
        />
    </div>

    <!-- Content Section -->
    <CardContent class="pt-4 pb-3 space-y-3">
        <div class="flex gap-4">
            <Heart/>
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
