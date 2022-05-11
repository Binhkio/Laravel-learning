<html>
    <head>
        <title>Admin Controller @yield('title')</title>
    </head>
    <body>
        @section('sidebar')
            <h1>Login as ADMIN successful!</h1>
        @show
 
        <div class="container">
            @yield('content')
            <a href="{{ route('log-out'); }}">Log out</a>
        </div>
    </body>
</html>