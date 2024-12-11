<script>
    import "./styles.css";
    let { children } = $props();
</script>

<div class="container-fluid">
    <nav class="navbar navbar-dark bg-secondary fixed-top">
        <div class="container d-flex justify-content-start align-items-center">
            <a class="navbar-brand me-3" href="/">ScreenStack</a>
            <a class="nav-link text-light" href="/movies">Movies</a>
        </div>
    </nav>
</div>

<div class="content pt-5">
    {@render children()}
</div>
