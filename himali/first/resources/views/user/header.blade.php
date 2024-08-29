<div class="navbar">
    <h1>Himali's Store</h1>
    <div class="search">
        <form action="/search" method="GET">
            <input class="text-black" type="search" name="query" id="">
            <button>Search</button>
        </form>
    </div>
    <div class="links">
        <p><a href="{{route('index')}}">Home</a></p>
        <p><a href="{{route('himali')}}">About</a></p>
        <p><a href="{{route('user.cart')}}">Cart</a></p>
        @if (Auth::check())
            <p><a href="{{route('user.logout')}}">Logout</a></p>
        @else
            <div class="flex gap-3">
                <p><a href="{{route('register')}}">Register</a></p>
                <p><a href="{{route('login')}}">Login</a></p>
            </div>
        @endif
    </div>
</div>