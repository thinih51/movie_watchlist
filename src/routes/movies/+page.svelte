<script>
    import Movie from "../../lib/components/Movie.svelte";
    let { data } = $props();
</script>

<div class="container mt-2">
    <div class="row">
        <div class="col-lg-6 col-md-8 col-sm-12 text-light py-2">
            <p>Daten und Bilder generiert mit ChatGPT und DALL-E</p>
            <a href="/movies/create" class="btn btn-primary">Add New Movie</a>
        </div>
    </div>
</div>

<div class="container mt-4">
    <div class="row">
        {#each data.movies as movie}
            <div class="col-lg-3 mb-4">
                <div class="card">
                    <img
                        src={movie.poster}
                        alt={movie.title}
                        class="card-img-top"
                    />
                    <div class="card-body">
                        <h5>
                            <a href={`/movies/${movie._id}`} class="card-title"
                                >{movie.title}</a
                            >
                        </h5>
                        <p class="card-text">Jahr: {movie.year}</p>
                        <p class="card-text">Dauer: {movie.length}</p>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>