<script lang="ts">
    import type {CarouselAPI} from "$lib/components/ui/carousel/context.js";
    import {
        CarouselContent,
        CarouselItem,
        CarouselNext,
        CarouselPrevious,
        Root as CarouselRoot
    } from "$lib/components/ui/carousel";
    import {CardContent, Root as CardRoot} from "$lib/components/ui/card";

    let {image_filenames}: { image_filenames: string[] } = $props();

    // Track which images successfully loaded
    let loadedImages = $state<string[]>([]);
    let api = $state<CarouselAPI>();

    const count = $derived(api ? api.scrollSnapList().length : 0);
    let current = $state(0);

    // Check which images actually exist
    $effect(() => {
        const checkImages = async () => {
            const results = await Promise.all(
                image_filenames.map(async (filename) => {
                    try {
                        const response = await fetch(filename, {method: 'HEAD'});
                        return response.ok ? filename : null;
                    } catch {
                        return null;
                    }
                })
            );
            loadedImages = results.filter((img): img is string => img !== null);
        };

        checkImages();
    });

    $effect(() => {
        if (api) {
            current = api.selectedScrollSnap() + 1;
            api.on("select", () => {
                current = api!.selectedScrollSnap() + 1;
            });
        }
    });
</script>

<div class="w-full aspect-square relative">
    {#if loadedImages.length > 0}
        <CarouselRoot
                class="w-full border-none"
                setApi={(emblaApi) => (api = emblaApi)}
        >
            <CarouselContent>
                {#each loadedImages as src, i (src)}
                    <CarouselItem>
                        <CardRoot class="border-none py-0">
                            <CardContent
                                    class="flex aspect-square items-center justify-center px-0"
                            >
                                <img
                                        {src}
                                        alt="Slide {i + 1}"
                                        class="object-cover aspect-square"
                                        onerror={(e) => {
                                        // Hide broken images
                                        e.currentTarget.className = "hidden";
                                    }}
                                />
                            </CardContent>
                        </CardRoot>
                    </CarouselItem>
                {/each}
            </CarouselContent>
            <CarouselPrevious class="start-4"/>
            <CarouselNext class="end-4"/>
        </CarouselRoot>
        <!--        <div class="text-muted-foreground text-center text-sm -py-4">-->
        <!--            Image {current} of {count}-->
        <!--        </div>-->
    {:else}
        <p class="text-muted-foreground text-center">No images available</p>
    {/if}
</div>