<html>
    <head>
        <title>App Name - @yield('title')</title>
    </head>
    <body>
        @section('sidebar')
            <h1>Login successful!</h1>
        @show
 
        <div class="container">
            @yield('content')
        </div>
    </body>
</html>