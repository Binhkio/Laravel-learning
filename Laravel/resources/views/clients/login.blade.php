<h1>LOGIN</h1>
<form action="" method="POST">
    <div>
        <input type="text" name="username" placeholder="Username...">
        <input type="text" name="password" placeholder="Password...">
        <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
        <p class="res-msg">{{$msg??''}}</p>
    </div>
    <button type="submit">Submit</button>
</form>