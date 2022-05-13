<html>
    <head>
        <title>Admin Controller @yield('title')</title>
    </head>
    <body>
        @section('sidebar')
            <h1>Login as ADMIN successful!</h1>
        @show
        <br>
        <div class="user-controll">
            <table>
                <ul style="font-size: 28px">
                    <li onclick="{{ $choice = 1 }}">SHOW USER</li>
                    <li onclick="{{ $choice = 2 }}">ADD USER</li>
                    <li onclick="{{ $choice = 3 }}">DELETE USER</li>
                    <li onclick="{{ $choice = 4 }}">UPDATE USER</li>
                </ul>
            </table>
        </div>
        <div class="delete-user">
            <h2>DELETE USER {{$choice}}</h2>
            <input type="text" name="username" placeholder="Username...">
            <button type="submit">Delete</button>
        </div>
        <br>
        <div class="container">
            @yield('content')
            <a href="{{ route('log-out'); }}">Log out</a>
        </div>
    </body>
</html>