<h1>Posts</h1>
<div class="posts">
    @foreach ($posts as $post)
    <div style="background-color: rgb(186, 229, 186); margin: 4px 16px; padding: 4px 16px; border-radius: 20px">
        <h3>{{$post->id}}. Title: {{$post->title}}</h3>
        <img src="{{$post->image}}" alt="default-image">
        <div class="content" style="background-color: #d0d0d0; margin: 4px 16px; padding: 4px 16px; border-radius: 10px">
            {{$post->post_text}}
        </div>
        <div class="footer" style="text-align: right; margin: 4px 16px;; padding: 4px 16px;">by {{$post->user_id}} at {{$post->creat_at}}</div>
    </div>
    {{-- <br> --}}
    @endforeach
</div>