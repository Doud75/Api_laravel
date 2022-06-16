@extends("base.app_base")

@section("content")
    <br><br>
    <section id="section"></section>

    <form action="" id="change_title" method="patch">
        @csrf
        <label for="new_title">changer le titre</label>
        <input id="title" type="text" name="title">
        <input id="content" type="text" name="content">
        <button>valider</button>
    </form>
    
    <script src="{{ asset('js/article.js') }}"></script>
@endsection
