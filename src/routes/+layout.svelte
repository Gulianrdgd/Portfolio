<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';

	let {children} = $props();
</script>

<svelte:head>
    <title>Julian van der Horst - Full Stack Developer</title>
    <meta content="Full-stack developer passionate about web development, AI projects, and building innovative solutions. Currently working at NOLAI at Radboud University."
          name="description"/>
    <meta content="Julian van der Horst, Full Stack Developer, Web Development, NOLAI, Radboud University, Software Engineer"
          name="keywords"/>
    <meta content="Julian van der Horst" name="author"/>

    <!-- Open Graph / Facebook -->
    <meta content="website" property="og:type"/>
    <meta content="Julian van der Horst - Full Stack Developer" property="og:title"/>
    <meta content="Full-stack developer passionate about web development, AI projects, and building innovative solutions."
          property="og:description"/>

    <!-- Twitter -->
    <meta content="summary_large_image" name="twitter:card"/>
    <meta content="Julian van der Horst - Full Stack Developer" name="twitter:title"/>
    <meta content="Full-stack developer passionate about web development, AI projects, and building innovative solutions."
          name="twitter:description"/>

    <link href={favicon} rel="icon"/>
</svelte:head>
<div class="min-h-screen bg-background text-foreground">
    {@render children()}
</div>
