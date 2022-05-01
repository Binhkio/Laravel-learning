<h1>ADD CATEGORIES</h1>
<form method="POST" action="<?php echo route('categories.add'); ?>">
    <div>
        <input type="text" name="categories" placeholder="Category's name">
    </div>
    <input type="hidden" name="_token" value="<?php echo csrf_token() ?>">
    <button type="submit">Add category</button>
</form>