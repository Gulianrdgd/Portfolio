<script lang="ts">
    import julian from '$lib/assets/JulianWithBG.png';
</script>

<section class="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
    <div class="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">

        <div class="space-y-6">
            <div class="space-y-2">
                <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                    Hey, I am <br/><span class="text-primary">Julian</span> van der Horst
                </h1>
            </div>

            <p class="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Enthusiastic about anything computing science. I am a full-stack developer which loves to create web applications and explore new technologies.
            </p>

            <div class="flex gap-4 pt-4">
                <button class="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    View Projects
                </button>
                <button class="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-card transition-colors">
                    Contact Me
                </button>
            </div>
        </div>

        <!-- Image -->
        <div class="flex justify-center lg:justify-end">
            <div class="relative">
                <div class="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
                <img src={julian} class="relative z-10 max-w-md w-full h-auto rounded-2xl" alt="Julian van der Horst"/>
            </div>
        </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
    </div>
</section>
