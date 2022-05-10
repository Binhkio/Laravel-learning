<h1>USERS</h1>

<div class="container">
    @foreach ($users as $user)
        User: {{ $user->username }} ; Pass: {{ $user->password }} </br>
    @endforeach
</div>
 
{{ $users->links() }}