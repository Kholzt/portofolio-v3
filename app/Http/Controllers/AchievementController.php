<?php

namespace App\Http\Controllers;

use App\Models\Achievement;
use Illuminate\Http\Request;

class AchievementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $portofolio = Achievement::orderBy("id")
            // ->orderBy("start_date", "desc")
            ->paginate(10);

        $params["data"] = (object)[
            "achievement" => $portofolio
        ];
        return inertia("admin/achievement/Achievement", $params);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $params['data'] = (object) [
            "title" => "Tambah Projek",
            "method" => "POST",
            "action_form" => route("achievement.store"),
            "data" => (object)[
                "title" => "",
                "description" => "",
                "achievement1" => "",
                "achievement2" => "",
            ]

        ];
        return inertia("admin/achievement/Form", $params);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        request()->validate([
            "title" => "required",
            "description" => "required",
            "achievement1" => "required|image:jpg,png,jpeg,svg|max:3048",
            "achievement2" => "nullable|image:jpg,png,jpeg,svg|max:3048",
        ]);

        $file = request()->file("achievement1");
        $file2 = request()->file("achievement2");
        // upload image
        $nama_file = uniqid() . "_" . $file->getClientOriginalName();
        $nama_file2 = "";
        $file->move("assets/achievement/", $nama_file);
        if ($file2) {
            $nama_file2 = uniqid() . "_" . $file2->getClientOriginalName();
            $file2->move("assets/achievement/", $nama_file2);
        }
        $data = [
            "attachment1" => $nama_file,
            "attachment2" => $nama_file2,
            "title" => request()->title,
            "description" => request()->description,
        ];

        Achievement::create($data);
        return redirect()->route("achievement.index")->with("success", "Achievement berhasil dibuat");
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
        $achievement  = Achievement::findOrFail($id);

        $params['data'] = (object) [
            "title" => "Ubah Achievement",
            "method" => "PUT",
            "action_form" => route("achievement.update", $id),
            "data" => (object)[
                "title" => $achievement->title,
                "description" => $achievement->description,
                "achievement1" => asset("assets/achievement/" . $achievement->achievement1),
                "achievement2" => $achievement->achievement2 ?? asset("assets/achievement/" . $achievement->achievement2),

            ]

        ];
        return inertia("admin/achievement/Form", $params);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        request()->validate([
            "title" => "required",
            "description" => "required",
            "achievement1" => "nullable|image:jpg,png,jpeg,svg|max:3048",
            "achievement2" => "nullable|image:jpg,png,jpeg,svg|max:3048",
        ]);

        $file = request()->file("achievement1");
        $file2 = request()->file("achievement2");
        $portofolio  = Achievement::findOrFail($id);
        $data = [
            "title" => request()->title,
            "description" => request()->description,
        ];

        if ($file) {
            $oldPath = public_path("assets/achievement/" .
                $portofolio->getRealAttachment1());
            if (file_exists($oldPath)) {
                unlink($oldPath);
            }
            // upload image
            $nama_file = uniqid() . "_" . $file->getClientOriginalName();
            $file->move("assets/achievement/", $nama_file);
            $data['attachment1'] = $nama_file;
        }


        if ($file2) {
            $oldPath = public_path("assets/achievement/" .
                $portofolio->getRealAttachment2());
            if (file_exists($oldPath)) {
                unlink($oldPath);
            }
            // upload image
            $nama_file = uniqid() . "_" . $file2->getClientOriginalName();
            $file->move("assets/achievement/", $nama_file);
            $data['attachment2'] = $nama_file;
        }

        $portofolio->update($data);
        return redirect()->route("achievement.index")->with("success", "Achievement berhasil diubah");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id) {}
}
