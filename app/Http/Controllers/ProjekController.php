<?php

namespace App\Http\Controllers;

use App\Models\Portofolio;
use Illuminate\Http\Request;

class ProjekController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $portofolio = Portofolio::orderBy("end_date", "desc")
            // ->orderBy("start_date", "desc")
            ->paginate(10);

        $params["data"] = (object)[
            "portofolio" => $portofolio
        ];
        return inertia("admin/projek/Projek", $params);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $params['data'] = (object) [
            "title" => "Tambah Projek",
            "method" => "POST",
            "action_form" => route("projek.store"),
            "data" => (object)[
                "title" => "",
                "description" => "",
                "thumbnail" => "",
                "details" => "",
                "start_date" => "",
                "end_date" => "",
            ]

        ];
        return inertia("admin/projek/Form", $params);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        request()->validate([
            "title" => "required",
            "description" => "required",
            "details" => "required",
            "start_date" => "required",
            "end_date" => "required",
            "thumbnail" => "required|image:jpg,png,jpeg,svg|max:2048"
        ]);

        $file = request()->file("thumbnail");
        // upload image
        $nama_file = uniqid() . "_" . $file->getClientOriginalName();
        $file->move("assets/projek/", $nama_file);

        $data = [
            "thumbnail" => $nama_file,
            "title" => request()->title,
            "description" => request()->description,
            "details" => request()->details,
            "start_date" => request()->start_date,
            "end_date" => request()->end_date,
        ];

        Portofolio::create($data);
        return redirect()->route("projek.index")->with("success", "Projek berhasil dibuat");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $portofolio  = Portofolio::findOrFail($id);

        $params['data'] = (object) [
            "title" => "Ubah Projek",
            "method" => "PUT",
            "action_form" => route("projek.update", $id),
            "data" => (object)[
                "title" => $portofolio->title,
                "description" => $portofolio->description,
                "thumbnail" => asset("assets/projek/" . $portofolio->thumbnail),
                "details" => $portofolio->details,
                "start_date" => $portofolio->start_date,
                "end_date" => $portofolio->end_date,
            ]

        ];
        return inertia("admin/projek/Form", $params);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        request()->validate([
            "title" => "required",
            "description" => "required",
            "details" => "required",
            "start_date" => "required",
            "end_date" => "required",
            "thumbnail" => "sometimes|nullable|image:jpg,png,jpeg,svg|max:2048"
        ]);

        $file = request()->file("thumbnail");
        $portofolio  = Portofolio::findOrFail($id);
        $data = [
            "title" => request()->title,
            "description" => request()->description,
            "details" => request()->details,
            "start_date" => request()->start_date,
            "end_date" => request()->end_date,
        ];
        if ($file) {
            $oldPath = public_path("assets/projek/" .
                $portofolio->getRealThumbnail());
            if (!file_exists($oldPath)) {
                return redirect()->back()->with("error", "Thumbnail sebelumnya tidak ditemukan");
            }
            unlink($oldPath);
            // upload image
            $nama_file = uniqid() . "_" . $file->getClientOriginalName();
            $file->move("assets/projek/", $nama_file);

            $data['thumbnail'] = $nama_file;
        }



        $portofolio->update($data);
        return redirect()->route("projek.index")->with("success", "Projek berhasil diubah");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id) {}
}
