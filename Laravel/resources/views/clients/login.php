<h1>LOGIN</h1>
<form action="" method="get">
    <input type="text" name="username" placeholder="Username...">
    <input type="password" name="password" placeholder="Password...">
    <input type="hidden" name="_token" value="<?php echo scrf_token(); ?>">
    <button type="submit">Submit</button>
</form>