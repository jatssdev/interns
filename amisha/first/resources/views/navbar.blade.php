<nav class="d-flex align-items-center px-3 py-2 justify-content-between bg-dark text-white">
    <h1>Logo</h1>
    <div class="d-flex gap-3">
        <p><a href="/">Home</a></p>
        @if(Auth::check())
            <p><a href="{{Route('logout')}}">Logout</a></p>

        @else
                <p><a href="/register">Register</a></p>
                <p><a href="/login">Login</a></p>
            </div>
        @endif

</nav>