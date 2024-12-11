<script>
    let { form } = $props();
</script>

<div class="container mt-2">
    <a href="/movies" class="btn btn-link text-light mb-4">Back</a>
    <h1 class="mb-4">Add a Movie</h1>
    <form method="POST" action="?/create" class="needs-validation">
        <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
                id="name"
                name="name"
                class="form-control"
                type="text"
                required
            />
        </div>
        <div class="mb-3">
            <label for="year" class="form-label">Year</label>
            <input
                id="year"
                name="year"
                class="form-control"
                type="number"
                required
            />
        </div>
        <div class="mb-3">
            <label for="length" class="form-label">Length</label>
            <input
                id="length"
                name="length"
                class="form-control"
                type="number"
                required
            />
        </div>
        <button type="submit" class="btn btn-primary">Add Movie</button>
    </form>
</div>

{#if form?.success}
    <p class="mt-3 text-success">Movie created successfully!</p>
{/if}

{#if form?.error}
    <p class="mt-3 text-danger">{form.error}</p>
{/if}
