@extends('layout')
@push('title')
    <title>Home Page</title>

@endpush

@section('main-section')

<section class="p-3 p-md-4 p-xl-5">
    <div class="container">
        <div class="row">

            <div class="col-12  mx-auto col-md-6 bsb-tpl-bg-lotion">
                <div class="p-3 p-md-4 p-xl-5">
                    <div class="row">
                        <div class="col-12">
                            <div class="mb-5">
                                <h2 class="h3">Registration</h2>
                                <h3 class="fs-6 fw-normal text-secondary m-0">Enter your details to register</h3>
                            </div>
                        </div>
                    </div>
                    <form action="{{route('user.register')}}" method="post">
                        @csrf
                        <div class="row gy-3 gy-md-4 overflow-hidden">

                            <div class="col-12">
                                <label for="lastName" class="form-label"> Name <span
                                        class="text-danger">*</span></label>
                                <input type="email" class="form-control" name="name" id="lastName"
                                    placeholder="Last Name" required>
                            </div>
                            <div class="col-12">
                                <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                                <input type="email" class="form-control" name="email" id="email"
                                    placeholder="name@example.com" required>
                            </div>
                            <div class="col-12">
                                <label for="password" class="form-label">Password <span
                                        class="text-danger">*</span></label>
                                <input type="password" class="form-control" name="password" id="password" value=""
                                    required>
                            </div>

                            <div class="col-12">
                                <div class="d-grid">
                                    <button class="btn bsb-btn-xl btn-primary" type="submit">Sign up</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="row">
                        <div class="col-12">
                            <hr class="mt-5 mb-4 border-secondary-subtle">
                            <p class="m-0 text-secondary text-end">Already have an account? <a href="#!"
                                    class="link-primary text-decoration-none">Sign in</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>

@endsection