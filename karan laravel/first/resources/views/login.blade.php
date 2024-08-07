@extends('layout')
@push('title')
    <title>Home Page</title>

@endpush

@section('main-section')
@if (@session('error'))
<p>{{@session('error')}}</p>

@endif

<section class="p-3 p-md-4 p-xl-5">
    <div class="container">
        <div class="row">

            <div class="col-12  mx-auto col-md-6 bsb-tpl-bg-lotion">
                <div class="p-3 p-md-4 p-xl-5">
                    <div class="row">
                        <div class="col-12">
                            <div class="mb-5">
                                <h2 class="h3">Login</h2>
                                <h3 class="fs-6 fw-normal text-secondary m-0">Enter your details to register</h3>
                            </div>
                        </div>
                    </div>
                    <form action="{{route('user.login')}}" method="post">
                        @csrf
                        <div class="row gy-3 gy-md-4 overflow-hidden">


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


                </div>
            </div>
        </div>
    </div>
</section>

@endsection