@extends("base.app_base")

@section("content")
    <h1>Créer un Post</h1>

    <form id='myForm' action="" method="post">
        @csrf
        <label for="title">Titre</label><br>
        <input id="title" type="text" name="title">
        <br>
        <label for="content">Votre article</label><br>
        <textarea id="content" name="content" cols="30" rows="10"></textarea><br>
        <button>Valider</button>
    </form>
    <script src="{{ asset('js/form.js') }}"></script>
@endsection