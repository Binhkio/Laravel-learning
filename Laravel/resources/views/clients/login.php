<h1>LOGIN</h1>
<form action="" method="POST">
    <input type="text" name="username" placeholder="Username..." value="<?php old('username') ?>">
    <input type="password" name="password" placeholder="Password...">
    <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
    <button type="submit">Submit</button>
</form>