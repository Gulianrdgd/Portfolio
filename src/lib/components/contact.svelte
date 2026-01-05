<script lang="ts">
	import {CardContent, CardDescription, CardHeader, CardTitle, Root as CardRoot} from "$lib/components/ui/card";
	import {Button} from "$lib/components/ui/button";
	import {Github, GraduationCap, Linkedin} from '@lucide/svelte';
</script>

<section id="contact" class="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20">
    <div class="relative z-10 mx-auto w-full max-w-2xl">
        <CardRoot class="overflow-hidden border-border bg-card">
            <CardHeader class="text-center">
                <CardTitle class="text-4xl font-bold">Let's Connect</CardTitle>
                <CardDescription class="text-lg">
                    Feel free to reach out on any of these platforms
                </CardDescription>
            </CardHeader>

            <CardContent class="space-y-4">
                <div class="grid gap-4 sm:grid-cols-1">
                    <!-- LinkedIn -->
                    <Button
                            class="w-full justify-start gap-3"
                            href="https://www.linkedin.com/in/julian-van-der-horst-80498120/"
                            rel="noopener noreferrer"
                            size="lg"
                            target="_blank"
                            variant="outline"
                    >
                        <Linkedin class="size-5"/>
                        <span class="text-base">LinkedIn</span>
                    </Button>

                    <!-- GitHub -->
                    <Button
                            class="w-full justify-start gap-3"
                            href="https://github.com/Gulianrdgd"
                            rel="noopener noreferrer"
                            size="lg"
                            target="_blank"
                            variant="outline"
                    >
                        <Github class="size-5"/>
                        <span class="text-base">GitHub</span>
                    </Button>

                    <!-- Radboud University Profile -->
                    <Button
                            class="w-full justify-start gap-3"
                            href="https://www.ru.nl/personen/horst-j-van-der"
                            rel="noopener noreferrer"
                            size="lg"
                            target="_blank"
                            variant="outline"
                    >
                        <GraduationCap class="size-5"/>
                        <span class="text-base">Radboud University Profile</span>
                    </Button>
                </div>
            </CardContent>
        </CardRoot>
    </div>
</section>
