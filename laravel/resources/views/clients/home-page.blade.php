<html>
    <head>
        <title>App Name - @yield('title')</title>
    </head>
    <body>
        @section('sidebar')
            <h1>Login successful!</h1>
            @show
        <div class="content">
            <div>
                <a href="{{ route('user.display-posts') }}">View posts</a>
            </div>
            <br>
            <div class="container">
                @yield('content')
                <a href="{{ route('log-out'); }}">Log out</a>
            </div>
        </div>
    </body>
</html>