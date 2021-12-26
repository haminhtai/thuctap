<header id="header" class="wrapper module header w-full top-0 left-0 fixed z-200 down_lg:overflow-hidden ">
    <div class="bg-[#202C40] h-[111px] border-b-1 border-solid border-line">
        <nav class="container row navbar items-center h-[111px] pl-25 xl:pl-43 2xl:pl-54 2k:pl-48">
            <div class="col w-full down_lg:flex down_lg:flex-wrap lg:w-1/5 header-mobile relative justify-between items-center leading-111">
                <div class="lg:w-full relative">
                    <a id="header-logo" class="navbar-brand header-logo inline-block align-middle"
                        href="{!! App::getLogo()['href'] !!}">
                        {{-- <img src="{!! App::getLogo()['url'] !!}" alt="{!! App::getLogo()['alt'] !!}" class="w-full"> --}}
                        <img src="@asset('images/emcompass/logo.png')" alt="Emcompass" class="max-w-226">
                    </a>
                </div>
                <div class="block xl:hidden pr-11">
                    <button class="navbar-toggler hamburger-menu p-4 mt-0 cursor-pointer" type="button"
                        data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="icon-bar block bg-[#e03116] relative ml-auto w-16 h-2"></span>
                        <span class="icon-bar block bg-[#e03116] relative ml-auto w-16 h-2 mt-3"></span>
                        <span class="icon-bar block bg-[#e03116] relative ml-auto w-16 h-2 mt-3"></span>
                        <span class="sr-only">Open Menu</span>
                    </button>
                </div>
            </div>
        
            <div class="col w-full xl:max-w-681 2xl:max-w-964 2k:max-w-962 navbar-collapse main-menu flex flex-col justify-between" id="main-menu"
                data-module="menu">
                <ul
                    class="main-menu-ul navbar-nav list-none flex mb-0 p-0 text-white flex-col text-inherit
        lg:flex-row lg:justify-end">
                    <li class="menu-item mb-0 mr-13 2xl:mx-25">
                        <a class="block py-9 no-underline font-semibold" href="#">ABOUT US</a>
                    </li>
                    <li class="menu-item mb-0 ml-15 mr-17 2xl:mx-21">
                        <a class="block py-9 no-underline font-semibold" href="#">LEADERSHIP</a>
                    </li>
                    <li class="menu-item mb-0 ml-12 mr-11 2xl:ml-24 2xl:mr-21">
                        <a class="block py-9 no-underline font-semibold" href="#">CAREERS</a>
                    </li>

                    <li class="active menu-item mb-0 ml-15 mr-5 2xl:ml-25 2xl:mr-20">
                        <a class="block py-9 no-underline font-semibold" href="#">CONTACT US</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</header>
