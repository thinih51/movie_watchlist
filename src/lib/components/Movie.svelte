<script>
    let { movie } = $props();
</script>

<div class="col-lg-3 col-md-4 col-sm-6 mb-4">
    <div class="card h-100">
        <img src={movie.poster} alt={movie.title} class="card-img-top" />
        <div class="card-body">
            <h3 class="card-title">{movie.title}</h3>
            <div class="card-text">Jahr: {movie.year}</div>
            <div class="card-text">Dauer: {movie.length}</div>
        </div>
    </div>
</div>
