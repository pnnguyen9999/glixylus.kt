<html>
    <head>
        <title>App Name - @yield('title')</title>
        @yield('custom_CSS')
    </head>
    <body>
        <div class="container">
            @yield('content')
        </div>
        @yield('footer')
        @yield('script')
    </body>
</html>