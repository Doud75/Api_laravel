@extends("base.app_base")

@section("content")
    <h1>Upload File</h1>

    <form id='myForm' action="api/uploading-file-api" method="post" enctype="multipart/form-data">
        @csrf
        <input id="file" type="file" name="file">
        <button>Valider</button>
    </form>
@endsection