import React from 'react';


export const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-warning">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg" alt="" /></a>
                    <div class="container-fluid">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                    <div class="collapse navbar-collapse col-auto" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">العربية</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ship to
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">UAE</a></li>
                                    <li><a class="dropdown-item" href="#">KSA</a></li>
                                    <li><a class="dropdown-item" href="#">Egypt</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Sign In</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Cart</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
