<h1>LOGIN</h1>
<form action="" method="POST">
    <div>
        <input type="text" name="username" placeholder="Username..." value="{{ old('username') }}">
        @error('username')
            <span style="color: red; font-size: 20px;">
                {{ $message }}      {{-- Use $message (auto defined variable) to display error --}}
            </span>
        @enderror
    </div>
    <br>
    <div>
        <input type="text" name="password" placeholder="Password..." value="{{ old('password') }}">
        @error('password')
        <span style="color: red; font-size: 20px;">
            {{ $message }}      {{-- Use $message (auto defined variable) to display error --}}
        </span>
    @enderror
        @csrf
    </div>
    <hr/>
    <button type="submit">Submit</button>
</form>