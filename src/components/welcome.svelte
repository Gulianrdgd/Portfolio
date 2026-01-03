<script lang="ts">
	import julian from '$lib/assets/JulianWithBG.png';
</script>

<section class="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
	<div class="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
		<div class="space-y-6">
			<div class="space-y-2">
				<h1 class="text-5xl leading-tight font-bold text-foreground md:text-6xl lg:text-7xl">
					Hey, I am <br /><span class="text-primary">Julian</span> van der Horst
				</h1>
			</div>

			<p class="max-w-lg text-xl leading-relaxed text-muted-foreground">
				Enthusiastic about anything computing science. I am a full-stack developer which loves to
				create web applications and explore new technologies.
			</p>

			<div class="flex gap-4 pt-4">
				<button
					class="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
				>
					View Projects
				</button>
				<button
					class="rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-colors hover:bg-card"
				>
					Contact Me
				</button>
			</div>
		</div>

		<!-- Image -->
		<div class="flex justify-center lg:justify-end">
			<div class="relative">
				<div class="absolute inset-0 rounded-full bg-primary/20 blur-3xl"></div>
				<img
					src={julian}
					class="relative z-10 h-auto w-full max-w-md rounded-2xl"
					alt="Julian van der Horst"
				/>
			</div>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
		<svg
			class="h-6 w-6 text-muted-foreground"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M19 14l-7 7m0 0l-7-7m7 7V3"
			></path>
		</svg>
	</div>
</section>
