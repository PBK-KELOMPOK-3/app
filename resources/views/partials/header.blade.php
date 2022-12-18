<header>
    <nav class="navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">BioFunQ</a>
            @auth
            <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Hallo, {{ auth()->user()->name }}
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="dashboard">dashboard</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li>
                        <form action="/logout" method="post">
                            @csrf
                            <button type="submit" class="dropdown-item">Logout</button>
                        </form>
                    </li>
                </ul>
            </div>
            @else
            <a href="login"><button type="button" class="btn btn-primary">Login</button></a>
            @endauth

        </div>
    </nav>
</header>